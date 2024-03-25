import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Media/Images/Logo.png";

function Navbar() {
  return (
    <nav>
      <div className="navLogo">
        <img src={Logo} alt="Logo" />
        <p>Ocean Micro Plast</p>
      </div>

      <div className="navLinks">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/customer">Customers</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
