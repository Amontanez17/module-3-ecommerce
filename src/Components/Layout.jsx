import React from "react";
import { Outlet } from "react-router";
function Layout() {
  return (
    <div id="page-content">
      <Outlet />
    </div>
  );
}

export default Layout;
