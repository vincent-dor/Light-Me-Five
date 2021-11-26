import React, { useState, useEffect } from "react";
import GenreCards from "../Genrecards/Genrecards.jsx";
import axios from "axios";
import "./Genrepage.css";
import ArrowUp from "../Arrows/ArrowUp.jsx";



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


  console.log(idMusic);
  useEffect(() => {
   
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
