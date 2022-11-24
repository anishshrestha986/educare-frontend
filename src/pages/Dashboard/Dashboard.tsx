import React from "react";
import NavBar from "../../components/NavBar";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "../../styles/dashboard/dashBoard.css";
const Dashboard = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title> Dashboard - Rent Store</title>
        </Helmet>
      </HelmetProvider>
    </div>
  );
};

export default Dashboard;
