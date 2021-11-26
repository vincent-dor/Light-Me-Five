import "./ButtonCards.css";
import { Link } from "react-router-dom";

const ButtonCards = () => {
  return (
    <div>
      <div className="Button-container1">
        <button className="Button1">Logout</button>
      </div>
      <div className="Button-container">
        <div>
          <Link to="/events">
            {" "}
            <button className="Button">Events</button>{" "}
          </Link>
        </div>
        <div>
          <Link to="/userprofiles">
            {" "}
            <button className="Button">Profiles</button>{" "}
          </Link>
        </div>
        <div>
          <Link to="/groups">
            {" "}
            <button className="Button">Groups</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ButtonCards;
