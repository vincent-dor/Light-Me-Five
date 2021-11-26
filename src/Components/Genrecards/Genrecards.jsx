import React, { useState } from "react";
import "./Genrecards.css";
// import { Link } from "react-router-dom";

const GenreCards = ({ compteurGenre, setCompteurGenre, setIdMusic }) => {
  const [compteur, setCompteur] = useState(0);
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);
  const [clicked5, setClicked5] = useState(false);
  const [clicked6, setClicked6] = useState(false);
  const [clicked7, setClicked7] = useState(false);
  const [clicked8, setClicked8] = useState(false);
  const [clicked9, setClicked9] = useState(false);
  const [clicked10, setClicked10] = useState(false);
  const [clicked11, setClicked11] = useState(false);
  const [clicked12, setClicked12] = useState(false);
  const [clicked13, setClicked13] = useState(false);
  const [clicked14, setClicked14] = useState(false);
  const [clicked15, setClicked15] = useState(false);

  return (
    <div className="section-team">
      <div className="column-img">
        {/* <Link to="/artists"> */}
        <button
          className="GenreButton"
          onClick={() => {
            setIdMusic("Latino");
            setClicked1(!clicked1);
            compteurGenre === 0 && setCompteurGenre(1);
            compteurGenre === 1 && setCompteurGenre(2);
            // !clicked1 && compteurGenre === 2 && setCompteurGenre(1)
            // !clicked1 && compteurGenre === 1 && setCompteurGenre(0)
          }}
        >
          <img
            id="GenreOne"
            className={clicked1 ? "img-team-clicked" : "img-team"}
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
            setIdMusic("Soul/Funk");
            setClicked2(!clicked2);
            compteurGenre === 0 && setCompteurGenre(1);
            compteurGenre === 1 && setCompteurGenre(2);
            // !clicked2 && compteurGenre === 2 && setCompteurGenre(1)
            // !clicked2 && compteurGenre === 1 && setCompteurGenre(0)
          }}
        >
          <img
            id="GenreTwo"
            className={clicked2 ? "img-team-clicked" : "img-team"}
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
            setIdMusic("Rap/Hip Hop");
            setClicked3(!clicked3);
            compteurGenre === 0 && setCompteurGenre(1);
            compteurGenre === 1 && setCompteurGenre(2);
            // !clicked3 && compteurGenre === 2 && setCompteurGenre(1)
            // !clicked3 && compteurGenre === 1 && setCompteurGenre(0)
          }}
        >
          <img
            id="GenreThree"
            className={clicked3 ? "img-team-clicked" : "img-team"}
            src="https://e-cdns-images.dzcdn.net/images/misc/3d5e8aab99b95bfa7ac7e9e466e7781e/250x250-000000-80-0-0.jpg"
            alt="test"
          />
          <p>Rap/Hip Hop</p>
        </button>
        {/* </Link> */}
      </div>

      <div className="column-img-bottom">
        {/* <Link to="/artists"> */}
        <button
          className="GenreButton"
          onClick={() => {
            setIdMusic("Dance");
            setClicked4(!clicked4);
            compteurGenre == 0 && setCompteurGenre(1);
            compteurGenre == 1 && setCompteurGenre(2);
            // !clicked4 && compteurGenre == 2 && setCompteurGenre(1)
            // !clicked4 && compteurGenre == 1 && setCompteurGenre(0)
          }}
        >
          <img
            id="GenreFour"
            className={clicked4 ? "img-team-clicked" : "img-team"}
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
            setIdMusic("R&B");
            setClicked5(!clicked5);
            compteurGenre == 0 && setCompteurGenre(1);
            compteurGenre == 1 && setCompteurGenre(2);
            // !clicked5 && compteurGenre == 2 && setCompteurGenre(1)
            // !clicked5 && compteurGenre == 1 && setCompteurGenre(0)
          }}
        >
          <img
            id="GenreFive"
            className={clicked5 ? "img-team-clicked" : "img-team"}
            src="https://e-cdns-images.dzcdn.net/images/misc/91468ecc5dfdd19c42a43d2cbdf27059/250x250-000000-80-0-0.jpg"
            alt="test"
          />
          <p>R&B</p>
        </button>
      </div>
      {/* </Link> */}

      {/* Music 2 */}

      {/* <Link to="/artists"> */}
      <div className={compteur == 0 ? "img2-hide" : "img2"}>
        <div className="column-img2">
          <button
            className="GenreButton"
            onClick={() => {
              setIdMusic("Electro");
              setClicked6(!clicked6);
              compteurGenre == 0 && setCompteurGenre(1);
              compteurGenre == 1 && setCompteurGenre(2);
              // !clicked6 && compteurGenre == 2 && setCompteurGenre(1)
              // !clicked6 && compteurGenre == 1 && setCompteurGenre(0)
            }}
          >
            <img
              id="GenreSix"
              className={clicked6 ? "img-team-clicked" : "img-team"}
              src="https://e-cdns-images.dzcdn.net/images/misc/069c9888538799748960781f098b5f4b/250x250-000000-80-0-0.jpg"
              alt="test"
            />{" "}
            <p> Electro</p>
          </button>
          {/* </Link> */}
          {/* <Link to="/artists"> */}
          <button
            className="GenreButton"
            onClick={() => {
              setIdMusic("Folk");
              setClicked7(!clicked7);
              compteurGenre == 0 && setCompteurGenre(1);
              compteurGenre == 1 && setCompteurGenre(2);
              // !clicked7 && compteurGenre == 2 && setCompteurGenre(1)
              // !clicked7 && compteurGenre == 1 && setCompteurGenre(0)
            }}
          >
            <img
              id="GenreSeven"
              className={clicked7 ? "img-team-clicked" : "img-team"}
              src="https://e-cdns-images.dzcdn.net/images/misc/bd5fdfa1a23e02e2697818e09e008e69/250x250-000000-80-0-0.jpg"
              alt="test"
            />
            <p>Folk</p>
          </button>
          {/* </Link> */}
        </div>

        <div className="column-img-solo2">
          {/* <Link to="/artists"> */}
          <button
            className="GenreButton"
            onClick={() => {
              setIdMusic("Reggae");
              setClicked8(!clicked8);
              compteurGenre == 0 && setCompteurGenre(1);
              compteurGenre == 1 && setCompteurGenre(2);
              // !clicked8 && compteurGenre == 2 && setCompteurGenre(1)
              // !clicked8 && compteurGenre == 1 && setCompteurGenre(0)
            }}
          >
            <img
              id="GenreHeight"
              className={clicked8 ? "img-team-clicked" : "img-team"}
              src="https://e-cdns-images.dzcdn.net/images/misc/3d5e8aab99b95bfa7ac7e9e466e7781e/250x250-000000-80-0-0.jpg"
              alt="test"
            />
            <p>Reggae</p>
          </button>
          {/* </Link> */}
        </div>

        <div className="column-img2-bottom">
          {/* <Link to="/artists"> */}
          <button
            className="GenreButton"
            onClick={() => {
              setIdMusic("Jazz");
              setClicked9(!clicked9);
              compteurGenre == 0 && setCompteurGenre(1);
              compteurGenre == 1 && setCompteurGenre(2);
              // !clicked9 && compteurGenre == 2 && setCompteurGenre(1)
              // !clicked9 && compteurGenre == 1 && setCompteurGenre(0)
            }}
          >
            <img
              id="GenreNine"
              className={clicked9 ? "img-team-clicked" : "img-team"}
              src="https://e-cdns-images.dzcdn.net/images/misc/b36ca681666d617edd0dcb5ab389a6ac/250x250-000000-80-0-0.jpg"
              alt="test"
            />
            <p>Jazz</p>
          </button>
          {/* </Link> */}
          {/* <Link to="/artists"> */}
          <button
            className="GenreButton"
            onClick={() => {
              setIdMusic("Chanson française");
              setClicked10(!clicked10);
              compteurGenre == 0 && setCompteurGenre(1);
              compteurGenre == 1 && setCompteurGenre(2);
              // !clicked10 && compteurGenre == 2 && setCompteurGenre(1)
              // !clicked10 && compteurGenre == 1 && setCompteurGenre(0)
            }}
          >
            <img
              id="GenreTen"
              className={clicked10 ? "img-team-clicked" : "img-team"}
              src="https://e-cdns-images.dzcdn.net/images/misc/91468ecc5dfdd19c42a43d2cbdf27059/250x250-000000-80-0-0.jpg"
              alt="test"
            />
            <p>Chanson française</p>
          </button>
        </div>
        {/* </Link> */}
      </div>
      {/* Music 3 */}
      <div className={compteur !== 2 ? "img3-hide" : "img3"}>
        {/* <Link to="/artists"> */}
        <div className="column-img3">
          <button
            className="GenreButton"
            onClick={() => {
              setIdMusic("Classique");
              setClicked11(!clicked11);
              compteurGenre == 0 && setCompteurGenre(1);
              compteurGenre == 1 && setCompteurGenre(2);
              // !clicked11 && compteurGenre == 2 && setCompteurGenre(1)
              // !clicked11 && compteurGenre == 1 && setCompteurGenre(0)
            }}
          >
            <img
              id="GenreEleven"
              className={clicked11 ? "img-team-clicked" : "img-team"}
              src="https://e-cdns-images.dzcdn.net/images/misc/069c9888538799748960781f098b5f4b/250x250-000000-80-0-0.jpg"
              alt="test"
            />{" "}
            <p> Classique</p>
          </button>
          {/* </Link> */}
          {/* <Link to="/artists"> */}
          <button
            className="GenreButton"
            onClick={() => {
              setIdMusic("Metal");
              setClicked12(!clicked12);
              compteurGenre == 0 && setCompteurGenre(1);
              compteurGenre == 1 && setCompteurGenre(2);
              // !clicked12 && compteurGenre == 2 && setCompteurGenre(1)
              // !clicked12 && compteurGenre == 1 && setCompteurGenre(0)
            }}
          >
            <img
              id="GenreTwelve"
              className={clicked12 ? "img-team-clicked" : "img-team"}
              src="https://e-cdns-images.dzcdn.net/images/misc/bd5fdfa1a23e02e2697818e09e008e69/250x250-000000-80-0-0.jpg"
              alt="test"
            />
            <p>Metal</p>
          </button>
          {/* </Link> */}
        </div>

        <div className="column-img-solo3">
          {/* <Link to="/artists"> */}
          <button
            className="GenreButton"
            onClick={() => {
              setIdMusic("Blues");
              setClicked13(!clicked13);
              compteurGenre == 0 && setCompteurGenre(1);
              compteurGenre == 1 && setCompteurGenre(2);
              // !clicked13 && compteurGenre == 2 && setCompteurGenre(1)
              // !clicked13 && compteurGenre == 1 && setCompteurGenre(0)
            }}
          >
            <img
              id="GenreThirteen"
              className={clicked13 ? "img-team-clicked" : "img-team"}
              src="https://e-cdns-images.dzcdn.net/images/misc/3d5e8aab99b95bfa7ac7e9e466e7781e/250x250-000000-80-0-0.jpg"
              alt="test"
            />
            <p>Blues</p>
          </button>
          {/* </Link> */}
        </div>

        <div className="column-img3">
          {/* <Link to="/artists"> */}
          <button
            className="GenreButton"
            onClick={() => {
              setIdMusic("Pop/Rock");
              setClicked14(!clicked14);
              compteurGenre == 0 && setCompteurGenre(1);
              compteurGenre == 1 && setCompteurGenre(2);
              // !clicked14 && compteurGenre == 2 && setCompteurGenre(1)
              // !clicked14 && compteurGenre == 1 && setCompteurGenre(0)
            }}
          >
            <img
              id="GenreFourtenn"
              className={clicked14 ? "img-team-clicked" : "img-team"}
              src="https://e-cdns-images.dzcdn.net/images/misc/b36ca681666d617edd0dcb5ab389a6ac/250x250-000000-80-0-0.jpg"
              alt="test"
            />
            <p>Pop Rock</p>
          </button>
          {/* </Link> */}
          {/* <Link to="/artists"> */}
          <button
            className="GenreButton"
            onClick={() => {
              setIdMusic("Country");
              setClicked15(!clicked15);
              compteurGenre == 0 && setCompteurGenre(1);
              compteurGenre == 1 && setCompteurGenre(2);
              // !clicked15 && compteurGenre == 2 && setCompteurGenre(1)
              // !clicked15 && compteurGenre == 1 && setCompteurGenre(0)
            }}
          >
            <img
              id="GenreFifteen"
              className={clicked15 ? "img-team-clicked" : "img-team"}
              src="https://e-cdns-images.dzcdn.net/images/misc/91468ecc5dfdd19c42a43d2cbdf27059/250x250-000000-80-0-0.jpg"
              alt="test"
            />
            <p>Country</p>
          </button>

          {/* </Link> */}
        </div>
      </div>
      <div className={compteur != 2 ? "SeeNext" : "SeeNext-hide"}>
        <button
          type="button"
          onClick={() => setCompteur(compteur + 1)}
          className="ButtonNext"
        >
          Plus de genre
        </button>
      </div>

      <div className="Valid-Genre">
        <button type="button" className="ButtonValidation">
          Validate
        </button>
      </div>
    </div>
  );
};

export default GenreCards;
