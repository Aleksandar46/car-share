import React from "react";
import {Link} from "react-router-dom";

function Nav() {
  return (
    <nav>
        <h3>carShare</h3>
        <ul className="nav-links">
            <Link to="/about">
                <li>About</li>
            </Link>
            <Link to="/carlist">
                <li>CarList</li>
            </Link>
            <Link to="/register">
                <li>Register</li>
            </Link>
        </ul>
    </nav>
  );
}
export default Nav;
