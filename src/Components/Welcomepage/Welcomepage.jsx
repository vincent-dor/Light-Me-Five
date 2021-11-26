import axios from "axios";
import React, { useEffect } from "react";
import ButtonCards from "../Buttoncards/Buttoncards.jsx";

const WelcomePage = () => {


  //POST

  // useEffect(() => {
  //     axios.post(`http://localhost:5000/user`,  {
  //         nickname:"Tom" ,
  //         favorite_style_one:"JAZZ" ,
  //         favorite_style_two:"FUNK" ,
  //         artist_one:"xxxx" ,
  //         artist_two:"xxxx" ,
  //         artist_three:"xxxx"
  //     })
  // },[])

  //PUT
  //add USESTATE id



  return (
    <div className="welcomepage">
      <ButtonCards />

      <h1>
        {" "}
        Bienvenue à toi "name" alors tu aimes "musique" de "artiste" ???{" "}
      </h1>
    </div>
  );
};

export default WelcomePage;
