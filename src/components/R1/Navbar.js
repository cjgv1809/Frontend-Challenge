import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="Navbar__menu">
        <li className="Navbar__logo">
          <Link to="/">
            <img
              src="https://cdn.worldvectorlogo.com/logos/devto.svg"
              alt="Logo"
              width="45"
            />
          </Link>
        </li>
        <li className="Navbar__items">
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          <Link to="/aboutus">About us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
