import React, { useState, useEffect } from "react";
import GenreCards from "../Genrecards/Genrecards.jsx";
import axios from "axios";
import "./Genrepage.css";
import ArrowUp from "../Arrows/ArrowUp.jsx";

//const genreId = [197, 169, 116, 113, 165, 106, 466, 144, 129, 52, 98, 464, 153, 132, 152]

//const [latino, setLatino] = useState()

const GenrePage = () => {
  const [genres, setGenres] = useState([]);
  const [idMusic, setIdMusic] = useState("");
  const [compteurGenre, setCompteurGenre] = useState(0);

  const getDataUser = () => {
    axios.get(`http://localhost:5000/user`).then((response) => {
      console.log(response.data);
    });
  };
  getDataUser();
  // const genresFromApi = () => {
  //   const options = {
  //     method: "GET",
  //     url: `https://deezerdevs-deezer.p.rapidapi.com/genre/${idMusic}`,
  //     headers: {
  //       "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  //       "x-rapidapi-key": "53c7c86d46mshe62a388c66d7041p198e5djsn82c6a1a7e426",
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       setGenres(response.data);
  //     })

  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };

  useEffect(() => {
    const id = 1;
    if (compteurGenre == 1) {
      axios.put(`http://localhost:5000/user/${id}`, {
        favorite_style_one: `${idMusic}`,
      });
    } else if (compteurGenre == 2) {
      axios.put(`http://localhost:5000/user/${id}`, {
        favorite_style_two: `${idMusic}`,
      });
    }
  }, [idMusic]);
  console.log(compteurGenre);

  //   useEffect(() => {

  //   }, [idMusic])

  console.log(idMusic);
  useEffect(() => {
    // genresFromApi();
    console.log(genres);
  }, [idMusic]);

  return (
    <div>
      <GenreCards
        idMusic={idMusic}
        setIdMusic={setIdMusic}
        compteurGenre={compteurGenre}
        setCompteurGenre={setCompteurGenre}
      />
      <ArrowUp />
    </div>
  );
};

export default GenrePage;
