import { Link, NavLink } from "react-router-dom";
import "../Styling/Navbar.css";
import { useState } from "react";
function Navbar() {
  const [linkVisible, setLinkVisible] = useState(false);
  return (
    <>
      <nav>
        <Link to="/" className="title">
          Shrikar Siro
        </Link>
        {/* using useState, we can set the visibility of the navbar list based on click */}
        <div className="menu" onClick={() => setLinkVisible(!linkVisible)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={linkVisible ? "open" : ""}>
          <li>
            {/* navLinks help with additional CSS we can add when link is active. */}
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Experience">Experience</NavLink>
          </li>
          <li>
            <NavLink to="/Skills">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/Projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
