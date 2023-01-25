import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
function Navbar() {
  return (
    <nav>
      <h2>OneSchool</h2>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/"}>Courses</Link></li>
        <li><Link to={"/"}>Programs</Link></li>
        <li><Link to={"/"}>Teachers</Link></li>
      </ul>
      <button>Contact us</button>
    </nav>
  );
}

export default Navbar;
