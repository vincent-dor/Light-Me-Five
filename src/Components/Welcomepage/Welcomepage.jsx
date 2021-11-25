import axios from 'axios';
import React, { useEffect } from "react";
import ButtonCards from "../Buttoncards/Buttoncards.jsx"



const WelcomePage = () => {

    
    const getDataUser = () => {
        
        
        axios.get(`http://localhost:5000/user`, {credentials: 'include'})
        .then(response => {
            console.log(response.data)
        })
    }



    useEffect (()=>{
        getDataUser()
    },[])

    return (
        <div>
            <ButtonCards />
        </div>
    )
}


export default WelcomePage;