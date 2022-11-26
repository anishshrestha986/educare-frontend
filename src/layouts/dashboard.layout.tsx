import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
const DashBoardLayout = () => {
  return (
    <>
      <div className="dashBoardLayout">
        <NavBar />
        <Outlet />
      </div>
    </>
  );
};

export default DashBoardLayout;
