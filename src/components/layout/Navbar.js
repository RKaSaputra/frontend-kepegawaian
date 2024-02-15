import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-menu">
        <div className="navbar-start has-text-centered">
          <NavLink className="navbar-item" to="/" activeClassName="is-active">
            Pegawai
          </NavLink>
          <NavLink
            className="navbar-item"
            to="/jabatan"
            activeClassName="is-active"
          >
            Jabatan
          </NavLink>
          <NavLink
            className="navbar-item"
            to="/divisi"
            activeClassName="is-active"
          >
            Divisi
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
