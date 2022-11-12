import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { register as registerUser, IRegisterRequest } from "../../api/Auth";
import Button from "../../components/Button";
import { useCustomMutation } from "../../hooks/useCustomMutation";
import useFormInput from "../../hooks/useFormInput";
import { createFormFieldConfig } from "../../hooks/useFormInput";
import "../../styles/auth.css";
import toast from "../../utils/toast";
import {
  requiredRule,
  minLengthRule,
  maxLengthRule,
  passwordMatchRule,
} from "../../utils/validationRule.auth";

export default function Register() {
  const nav = useNavigate();

  const signUpForm = {
    name: {
      ...createFormFieldConfig("Full Name", "name", "text"),
      validationRules: [
        requiredRule("Name"),
        minLengthRule("Name", 3),
        maxLengthRule("Name", 25),
      ],
    },
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
      validationRules: [
        requiredRule("Password"),
        minLengthRule("Password", 4),
        maxLengthRule("Password", 20),
      ],
    },
    confirmPassword: {
      ...createFormFieldConfig(
        "Confirm Password",
        "confirmPassword",
        "Password"
      ),
      validationRules: [passwordMatchRule()],
    },
    stream: {
      ...createFormFieldConfig("Stream", "stream", "dropdown", [
        "Engineering",
        "Commerce",
      ]),
    },
    faculty: {
      ...createFormFieldConfig("Faculty", "faculty", "dropdown", [
        "BCT",
        "BEX",
        "BCE",
        "BSc Csit",
      ]),
    },
    class: {
      ...createFormFieldConfig("Class", "class", "dropdown", [
        "BCT 078",
        "BCT 077",
        "BCT 076",
        "BCT 075",
      ]),
    },
    section: {
      ...createFormFieldConfig("Section", "section", "dropdown", [
        "A",
        "B",
        "C",
      ]),
    },
    contact_number: {
      ...createFormFieldConfig("Contact Number", "contact number", "string"),
    },
  };
  const { mutate: register } = useCustomMutation<IRegisterRequest, any>({
    api: registerUser,
    success: "Registered Successfully",
    error: "Error",
    onSuccess: () => {
      nav("/login");
    },
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      name: signUpForm.name.value,
      email: signUpForm.email.value,
      password: signUpForm.password.value,
      userName: signUpForm.name.value,
    };
    if (signUpForm.password.value !== signUpForm.confirmPassword.value) {
      toast({ message: "Passwords do not match", type: "error" });
      return;
    }
    register(data);
  };

  const { renderFormInputs, isFormValid } = useFormInput(signUpForm);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Register - Educare</title>
        </Helmet>
      </HelmetProvider>
      <div className="authWrapper register">
        <div className="authContainer">
          <div className="authFormHead">
            <h1 className="authHeader">Welcome To Educare.</h1>
            <p className="authSubHeader">
              Fill in the details and get started.
            </p>
          </div>

          <form className="signUpForm" onSubmit={handleSubmit}>
            {renderFormInputs()}
            <Button disabled={!isFormValid()}>Submit</Button>
            <div className="authSubText">
              <p>
                Already have an account?&nbsp;
                <Link to="/login" className="spans">
                  Login!
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
