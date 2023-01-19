import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Navbar from "./navbar/NavBar";
import { Outlet } from "react-router-dom";
import Alerts from "../components/alerts/Alerts.jsx"

export default function LayoutSpecial() {
  return (
    <div>
      <Navbar/>
      <Header />
      <div className="content">
      <div className="slideshow-container">
        <Outlet />
        </div>
      </div>
      <Alerts/>
      <Footer />
    </div>
  );
}
