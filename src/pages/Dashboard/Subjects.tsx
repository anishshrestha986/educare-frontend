import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import NavBar from "../../components/NavBar";

const Subjects = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title> Subjects- Educare</title>
        </Helmet>
      </HelmetProvider>
      <NavBar />
    </div>
  );
};

export default Subjects;
