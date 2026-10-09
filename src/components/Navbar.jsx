import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          BookStore
        </NavLink>
        <div className="navbar-nav ms-auto">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/team">
            Team
          </NavLink>
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;