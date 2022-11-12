import { METHODS } from "../../enums/axios.enum";
import createApi from "../../utils/axios";

const userApi = createApi("/auth");

export interface IRegisterRequest {
  name: string;
  email: string;
  password: string;
  userName: string;
}

export interface ILoginRequest {
  username: string;
  password: string;
}

export const register = async (registerBody: IRegisterRequest) => {
  const data = await userApi({
    url: "/register",
    method: METHODS.POST,
    data: registerBody,
  });

  return data;
};
