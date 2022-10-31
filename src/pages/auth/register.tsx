import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Register() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Register - Educare</title>
        </Helmet>
      </HelmetProvider>
      <div className="authWrapper register"></div>
    </>
  );
}
