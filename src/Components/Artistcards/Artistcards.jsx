import MainLogo1 from "../../Assets/Light.png";
import "./Artistcards.css";
import { Link } from "react-router-dom";

const ArtistCards = () => {
  return (
    <div className="section-team1">
      <div className="column-img1">
        <Link to="/welcome">
          <img id="GenreOne" className="img-team1" src={MainLogo1} alt="test" />
        </Link>
        <Link to="/welcome">
          <img id="GenreTwo" className="img-team1" src={MainLogo1} alt="test" />
        </Link>
      </div>

      <div className="column-img-solo1">
        <Link to="/welcome">
          <img
            id="GenreThree"
            className="img-team1"
            src={MainLogo1}
            alt="test"
          />
        </Link>
      </div>

      <div className="column-img1">
        <Link to="/welcome">
          <img id="GenreFour" className="img-team1" src={MainLogo1} alt="test" />
        </Link>
        <Link to="/welcome">
          <img id="GenreFive" className="img-team1" src={MainLogo1} alt="test" />
        </Link>
      </div>
    </div>
  );
};

export default ArtistCards;
