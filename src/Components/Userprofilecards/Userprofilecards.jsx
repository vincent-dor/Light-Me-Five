import Image from "../../Assets/Light.png"
import "./Userprofilecards.css"

const UserProfileCards = () => {
    return (
   <div>
       <div className="Userprofile"><img src={Image} alt="" className="Userprofile0"/><h1 className="Userprofile1">Coucou</h1></div>
       <div className="Userprofile"><img src={Image} alt="" className="Userprofile0"/><h1 className="Userprofile1">Coucou</h1></div>
       <div className="Userprofile"><img src={Image} alt="" className="Userprofile0"/><h1 className="Userprofile1">Coucou</h1></div>
       <div className="Userprofile"><img src={Image} alt="" className="Userprofile0"/><h1 className="Userprofile1">Coucou</h1></div>
       <div className="Userprofile"><img src={Image} alt="" className="Userprofile0"/><h1 className="Userprofile1">Coucou</h1></div>
   </div> 
)
}

export default UserProfileCards;