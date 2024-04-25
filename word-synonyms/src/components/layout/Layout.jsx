import React from "react";
import TopNav from "./TopNav";
import AppRoutes from "../../routes/Routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ScrollToTop } from "./ScrollToTop";

function Layout() {
  return (
    <div>
      <TopNav />
      <ScrollToTop />
      <ToastContainer />
      <div>
        <AppRoutes />
      </div>
    </div>
  );
}

export default Layout;
