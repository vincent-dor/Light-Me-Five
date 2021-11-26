import Image from "../../Assets/Light.png"
import React from "react";

const UserProfile = (props) => {
    return (
       <div>  
        <div className="Userprofile">
            <img src={Image} alt="" className="Userprofile0"/>
            <h2 className="Userprofile1">{props.firstname}</h2>
            <h3 className="Userprofile1">{props.lastname}</h3>
            <button>hola</button>
        </div>
        </div>
    )

}

export default UserProfile;