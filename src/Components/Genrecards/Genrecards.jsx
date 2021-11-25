import MainLogo1 from "../../Assets/Light.png";
import "./Genrecards.css";
import { Link } from "react-router-dom";

const GenreCards = () => {
  return (
    <div className="section-team">
      <div className="column-img">
        <Link to="/artists">
          <img id="GenreOne" className="img-team" src={MainLogo1} alt="test" />
        </Link>
        <Link to="/artists">
          <img id="GenreTwo" className="img-team" src={MainLogo1} alt="test" />
        </Link>
      </div>

      <div className="column-img-solo">
        <Link to="/artists">
          <img
            id="GenreThree"
            className="img-team"
            src={MainLogo1}
            alt="test"
          />
        </Link>
      </div>

      <div className="column-img">
        <Link to="/artists">
          <img id="GenreFour" className="img-team" src={MainLogo1} alt="test" />
        </Link>
        <Link to="/artists">
          <img id="GenreFive" className="img-team" src={MainLogo1} alt="test" />
        </Link>
      </div>
    </div>
  );
};

export default GenreCards;
