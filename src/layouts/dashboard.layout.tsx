import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../styles/dashboard/dashboardLayout.css";
const DashBoardLayout = () => {
  return (
    <>
      <div className="dashboardLayout">
        <NavBar />
        <Outlet />
      </div>
    </>
  );
};

export default DashBoardLayout;
