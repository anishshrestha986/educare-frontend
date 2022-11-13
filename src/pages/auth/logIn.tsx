import { Link, useNavigate } from "react-router-dom";
import useFormInput, { createFormFieldConfig } from "../../hooks/useFormInput";
import {
  maxLengthRule,
  minLengthRule,
  requiredRule,
} from "../../utils/validationRule.auth";
import { logIn as logInUser, ILoginRequest, logIn } from "../../api/Auth";
import { useCustomMutation } from "../../hooks/useCustomMutation";
import { ILoginResponse } from "../../types/interfaces/auth.interface";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Button from "../../components/Button";

export default function LogIn() {
  const nav = useNavigate();
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

    logIn(data);
  };

  const { renderFormInputs, isFormValid } = useFormInput(logInForm);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Login - Educare</title>
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
            <Button>Login</Button>
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
