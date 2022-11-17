/* eslint-disable comma-dangle */
import { useReducer, useMemo } from "react";
import { getMe as getUser } from "../../api/Auth";
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "../../utils/storage";
import toast from "../../utils/toast";
import authReducer from "./auth.reducer";
import { AuthActionType } from "./auth.actions";
import AuthState, { AUTH_STATE, IAuthContextProps } from "./auth.state";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(authReducer, AUTH_STATE);

  const value = useMemo<IAuthContextProps>(
    () => ({
      ...state,
      login: (data) => {
        const { email, _id: id, firstName, lastName } = data.user;
        const name = `${firstName} ${lastName}`;
        const { access_token: accessToken } = data;
        setLocalStorage("access_token", accessToken);
        toast({ message: `Welcome ${name}!`, type: "success" });
        dispatch({
          type: AuthActionType.LOGIN,
          payload: {
            email,
            name,
            accessToken,
            id,
          },
        });
      },
      logout: () => {
        dispatch({ type: AuthActionType.LOGOUT });
        removeLocalStorage("access_token");
      },
      checkLogin: () => {
        const accessToken = getLocalStorage("access_token");
        if (accessToken) {
          dispatch({ type: AuthActionType.AUTHENTICATED });
          getUser()
            .then((res) => res.data)
            .then((data) => {
              const { email, _id: id, firstName, lastName } = data;
              const name = `${firstName} ${lastName}`;
              toast({ message: `Welcome Back, ${name}!`, type: "success" });
              dispatch({
                type: AuthActionType.LOGIN,
                payload: {
                  email,
                  name,
                  accessToken,
                  id,
                },
              });
            })
            .catch(() => {
              dispatch({
                type: AuthActionType.LOGOUT,
              });
              removeLocalStorage("access_token");
            });
        }
      },
    }),
    [state]
  );

  return <AuthState.Provider value={value}>{children}</AuthState.Provider>;
}
