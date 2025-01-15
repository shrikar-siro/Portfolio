import { Link, NavLink } from "react-router-dom";
import "../Styling/Navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/" className="title">
          Shrikar Sirobhushanam
        </Link>
        <ul>
          <li>
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
