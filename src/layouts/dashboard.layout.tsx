import { Outlet } from "react-router-dom";
const DashBoardLayout = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Outlet />
      </div>
    </>
  );
};

export default DashBoardLayout;
