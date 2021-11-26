import axios from 'axios';
import React, { useEffect } from "react";
import ButtonCards from "../Buttoncards/Buttoncards.jsx"



const WelcomePage = () => {



    const getDataUser = () => {
            
        axios.get(`http://localhost:5000/user`)
        .then(response => {
            console.log(response.data)
        })
    }
    getDataUser()


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
      
    useEffect(()=> {
        const id=1;
        axios.put(`http://localhost:5000/user/${id}`, {
            artist_one:"zz66",
            artist_two: "zzz66",
            artist_three: "zzzz66",
        })

    },[])
        
    return (
        <div>
            <ButtonCards />
        </div>
    )
}


export default WelcomePage;