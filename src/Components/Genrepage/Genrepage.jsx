import React, { useState, useEffect } from 'react';
import GenreCards from "../Genrecards/Genrecards.jsx"
import axios from "axios";


import "./Genrepage.css"

//const genreId = [197, 169, 116, 113, 165, 106, 466, 144, 129, 52, 98, 464, 153, 132, 152]

//const [latino, setLatino] = useState()

const GenrePage = () => {
const [genres, setGenres] = useState([]);
const [id, setId] = useState("");




const genresFromApi=() => {
  
    
    const options = {
        method: 'GET',
        url: `https://deezerdevs-deezer.p.rapidapi.com/genre/${id}/artists`,
        headers: {
          'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
          'x-rapidapi-key': '53c7c86d46mshe62a388c66d7041p198e5djsn82c6a1a7e426'
        }
      };

    axios.request(options).then(function (response) {
        setGenres(response.data);
     
        
        
    })
    
    .catch(function (error) {
        console.error(error);
    });
}

useEffect(()=>{
    genresFromApi()
}, [])

useEffect(()=>{
    id && console.log(id)
}, [id])

console.log("les genres", genres);



    return (
        <div>
           
<GenreCards id={id} setId={setId}  />


        
        
        </div>
    )
}


export default GenrePage;