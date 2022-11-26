import { Link, useLocation, useNavigate } from "react-router-dom";
import useFormInput, { createFormFieldConfig } from "../../hooks/useFormInput";
import {
  maxLengthRule,
  minLengthRule,
  requiredRule,
} from "../../utils/validationRule.auth";
import { login as logInUser, ILoginRequest } from "../../api/Auth";
import { useCustomMutation } from "../../hooks/useCustomMutation";
import { ILoginResponse } from "../../types/interfaces/auth.interface";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Button from "../../components/Button";
import AuthState from "../../store/auth/auth.state";
import { useContext } from "react";
import { LocationWithNav } from "../../types/interfaces";

export default function login() {
  const nav = useNavigate();
  const { state } = useLocation() as LocationWithNav;

  const logInForm = {
    email: {
      ...createFormFieldConfig("Email", "email", "email"),
      validationRules: [
        requiredRule("Email"),
        minLengthRule("Email", 10),
        maxLengthRule("Email", 35),
      ],
    },
    password: {
      ...createFormFieldConfig("Password", "password", "password"),
    },
  };
  const { login: loginDispatch, isAuthenticated } = useContext(AuthState);

  const { mutate: login } = useCustomMutation<ILoginRequest, ILoginResponse>({
    api: logInUser,
    error: "Error",
    onSuccess: (res) => {
      loginDispatch(res.data);
      nav(state?.path || "/");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email: logInForm.email.value,
      password: logInForm.password.value,
    };

    login(data);
  };

  const { renderFormInputs, isFormValid } = useFormInput(logInForm);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>login - Educare</title>
        </Helmet>
      </HelmetProvider>
      <div className="authWrapper">
        <div className="authContainer">
          <div className="authFormHead">
            <h1 className="authHeader">Login to continue.</h1>
            <p className="authSubHeader">
              Take your leap and start learning with Educare.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            {renderFormInputs()}
            <Link className="forgotPassword" to="/forgot-password">
              Forgot your password?
            </Link>
            <Button>login</Button>
            <div className="authSubText">
              <p>
                Don&#8217;t have an account?&nbsp;
                <Link to="/register" className="spans">
                  Sign Up!
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
