import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useFormInput from "../../hooks/useFormInput";
import { createFormFieldConfig } from "../../hooks/useFormInput";
import "../../styles/auth.css";

export default function Register() {
  const nav = useNavigate();

  const signUpForm = {
    name: {
      ...createFormFieldConfig("Full Name", "name", "text"),
    },
    email: {
      ...createFormFieldConfig("Email", "email", "email"),
    },
    password: {
      ...createFormFieldConfig("Password", "password", "password"),
    },
    confirmPassword: {
      ...createFormFieldConfig(
        "Confirm Password",
        "confirmPassword",
        "password"
      ),
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
  // const { mutate: register } = useCustomMutation<IRegisterRequest, any>({
  //   api: registerUser,
  //   success: "Registered Successfully",
  //   error: "Error",
  //   onSuccess: () => {
  //     nav("/login");
  //   },
  // });

  const { renderFormInputs } = useFormInput(signUpForm);
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

          <form className="signUpForm">
            {renderFormInputs()}
            <Button>Sign Up </Button>
          </form>
        </div>
      </div>
    </>
  );
}
