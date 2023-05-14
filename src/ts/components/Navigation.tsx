import { Link} from "react-router-dom";
import "../../css/styles.css";
import "../../css/Navigation.css";
import "../../css/App.css";
import 'bootstrap/dist/css/bootstrap.css';


function Navigation() {
  return (
    <header>
      <nav className="navbar-container">
        <ul className="nav-links buttons-container">
          <li><Link to="/"><button className="button-arounder">Home</button></Link></li>
          <li><Link to="/documents"><button className="button-arounder">Documents</button></Link></li>
          <li><Link to="mailto:jebelfor@gmail.com" target="_blank"><button className="button-arounder">Contact</button></Link></li>
        </ul>
      </nav>
    </header>
  );
}


export default Navigation;