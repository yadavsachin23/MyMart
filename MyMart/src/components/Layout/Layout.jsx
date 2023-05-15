import React from "react";
import Router from "../../routes/Router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useLocation } from "react-router-dom";
import AdminNav from "../../admin/AdminNav";

function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname.startsWith("/dashboard") ? <AdminNav /> : <Header />}
      <div>
        <Router />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
