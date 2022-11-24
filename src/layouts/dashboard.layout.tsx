import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
const DashBoardLayout = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <NavBar />
        <Outlet />
      </div>
    </>
  );
};

export default DashBoardLayout;
