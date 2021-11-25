import Image from "../../Assets/Light.png"
import "./Groupcards.css"

const GroupsCards = () => {
    return (
   <div>
       <div className="Groupscards"><img src={Image} alt="" className="Groupscards0"/><h1 className="Groupscards1">Groupe de la mort </h1></div>
       <div className="Groupscards"><img src={Image} alt="" className="Groupscards0"/><h1 className="Groupscards1">Groupe de la guitare </h1></div>
       <div className="Groupscards"><img src={Image} alt="" className="Groupscards0"/><h1 className="Groupscards1">Groupe des musuciens </h1></div>
       <div className="Groupscards"><img src={Image} alt="" className="Groupscards0"/><h1 className="Groupscards1">Groupe des flutitstes </h1></div>
       <div className="Groupscards"><img src={Image} alt="" className="Groupscards0"/><h1 className="Groupscards1">Groupe des lunes </h1></div>
   </div> 
    )
}

export default GroupsCards