import "./Genrecards.css";

const GenreCards = ({ setId }) => {
  return (
    <div className="section-team">
      <div className="column-img">
        {/* <Link to="/artists"> */}
        <button
          className="GenreButton"
          onClick={() => {
            setId(197);
          }}
        >
          <img
            id="GenreOne"
            className="img-team"
            src="https://e-cdns-images.dzcdn.net/images/misc/069c9888538799748960781f098b5f4b/250x250-000000-80-0-0.jpg"
            alt="test"
          />{" "}
          <p> Latino</p>
        </button>
        {/* </Link> */}
        {/* <Link to="/artists"> */}
        <button
          className="GenreButton"
          onClick={() => {
            setId(169);
          }}
        >
          <img
            id="GenreTwo"
            className="img-team"
            src="https://e-cdns-images.dzcdn.net/images/misc/bd5fdfa1a23e02e2697818e09e008e69/250x250-000000-80-0-0.jpg"
            alt="test"
          />
          <p>Soul/Funk</p>
        </button>
        {/* </Link> */}
      </div>

      <div className="column-img-solo">
        {/* <Link to="/artists"> */}
        <button
          className="GenreButton"
          onClick={() => {
            setId(116);
          }}
        >
          <img
            id="GenreThree"
            className="img-team"
            src="https://e-cdns-images.dzcdn.net/images/misc/3d5e8aab99b95bfa7ac7e9e466e7781e/250x250-000000-80-0-0.jpg"
            alt="test"
          />
          <p>Rap/Hip Hop</p>
        </button>
        {/* </Link> */}
      </div>

      <div className="column-img">
        {/* <Link to="/artists"> */}
        <button
          className="GenreButton"
          onClick={() => {
            setId(113);
          }}
        >
          <img
            id="GenreFour"
            className="img-team"
            src="https://e-cdns-images.dzcdn.net/images/misc/b36ca681666d617edd0dcb5ab389a6ac/250x250-000000-80-0-0.jpg"
            alt="test"
          />
          <p>Dance</p>
        </button>
        {/* </Link> */}
        {/* <Link to="/artists"> */}
        <button
          className="GenreButton"
          onClick={() => {
            setId(165);
          }}
        >
          <img
            id="GenreFive"
            className="img-team"
            src="https://e-cdns-images.dzcdn.net/images/misc/91468ecc5dfdd19c42a43d2cbdf27059/250x250-000000-80-0-0.jpg"
            alt="test"
          />
          <p>R&B</p>
        </button>

        {/* </Link> */}
      </div>
      <div className="column-img-solo">
        <button className="GenreButton">Plus de genre</button>
      </div>
    </div>
  );
};

export default GenreCards;
