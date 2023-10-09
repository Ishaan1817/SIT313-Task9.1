import React from "react";
import "./App.css";
import { Outlet, Link } from "react-router-dom";

function NaviBar() {
  return (
    <div className="topnav">
      <div className="logo">
        <img src={require("./Logo.png")} alt="logo" width={150} height={50} />
      </div>
      {/* <a href="#news">Find DEV</a> */}
      <div className="search-container text-center">
        <div className="text-center">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </div>
        <Link to="/">Post </Link>
        <Link to="login">Login</Link>
        <Outlet />
      </div>
    </div>
  );
}

export default NaviBar;
