import { NavLink } from "react-router-dom";
import "../../css/styles.css";
import "../../css/Navigation.css";
import "../../css/App.css";
import 'bootstrap/dist/css/bootstrap.css';

function Navigation() {
  return (
    <header>
      <nav className="navbar-container">
        <ul className="nav__links">
          <li><NavLink end to="/"> Home </NavLink></li>
          <li><NavLink to="/certifications">Certifications</NavLink></li>
        </ul>
        <div id="mobile__menu" className="overlay">
          <NavLink end to="/"> Home </NavLink>
          <NavLink to="/certifications">Certifications</NavLink>
      </div>
      </nav>
    </header>
  );
}


export default Navigation;