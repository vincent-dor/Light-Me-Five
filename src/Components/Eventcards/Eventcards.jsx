import Image from "../../Assets/Light.png"
import "./Eventcards.css"

const EventCards = () => {
    return (
   <div>
       <div className="Eventcards"><img src={Image} alt="" className="Eventcards0"/><h1 className="Eventcards1">Event à Lisieux </h1></div>
       <div className="Eventcards"><img src={Image} alt="" className="Eventcards0"/><h1 className="Eventcards1">Event de Métal à Marseille </h1></div>
       <div className="Eventcards"><img src={Image} alt="" className="Eventcards0"/><h1 className="Eventcards1">Event de Latino à Bordeaux </h1></div>
       <div className="Eventcards"><img src={Image} alt="" className="Eventcards0"/><h1 className="Eventcards1">Event de Reggae à Grenoble </h1></div>
       <div className="Eventcards"><img src={Image} alt="" className="Eventcards0"/><h1 className="Eventcards1">Event de Rap à Lille  </h1></div>
   </div> 
    )
}

export default EventCards