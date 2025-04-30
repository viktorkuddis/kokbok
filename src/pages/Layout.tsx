import { Outlet } from "react-router-dom";

import MenuBar from "../components/MenuBar/MenuBar";

const Layout = () => {
  return (
    <>
      <MenuBar />
      <Outlet />
    </>
  );
};

export default Layout;
