import React from "react";
import NavBar from "../../components/NavBar";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "../../styles/dashBoard.css";
const Dashboard = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title> Dashboard - Rent Store</title>
        </Helmet>
      </HelmetProvider>
      <NavBar />
    </div>
  );
};

export default Dashboard;