import "./Header.css";
import MainLogo from "../../Assets/Light1.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">
          <img className="main-logo" src={MainLogo} alt="logo-icon"></img>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
