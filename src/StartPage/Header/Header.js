import React from "react";
import { NavLink } from "react-router-dom";
import obj from "./Header.module.css";

const Header = () => {
  return (
    <div className={obj.header}>
      <button className={obj.button} role="button">
        <NavLink style={{ textDecoration: "none", color: "white" }} to="/login">
          Sign In
        </NavLink>
      </button>
    </div>
  );
};
export default Header;
