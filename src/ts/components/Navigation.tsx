import { Link} from "react-router-dom";
import "../../css/styles.css";
import "../../css/Navigation.css";
import "../../css/App.css";
import 'bootstrap/dist/css/bootstrap.css';


function Navigation() {
  return (
    <header>
      <nav className="navbar-container">
        <ul className="nav__links">
          <li><Link to="/"><button className="nav__button btn btn-primary">Home</button></Link></li>
          <li><Link to="/documents"><button className="nav__button btn btn-primary">Documents</button></Link></li>
          <li><Link to="mailto:jebelfor@gmail.com" target="_blank"><button className="nav__button btn btn-primary">Contact</button></Link></li>
        </ul>
      </nav>
    </header>
  );
}


export default Navigation;