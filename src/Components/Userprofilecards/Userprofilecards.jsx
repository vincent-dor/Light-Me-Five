import Image from "../../Assets/Light.png";
import "./Userprofilecards.css";

const UserProfileCards = ({prop}) => {
   
  // setStyle1(list.filter(e=> e.ID == id)[0].favorite_style_one)
  // setStyle2(list.filter(e=> e.ID == id)[0].favorite_style_two)


  return (
    <div>
      <div className="Userprofile">
        <img src={Image} alt="" className="Userprofile0" />
        <h1 className="Userprofile1">{prop}</h1>
      </div>
      {/* <div className="Userprofile">
        <img src={Image} alt="" className="Userprofile0" />
        <h1 className="Userprofile1">Coucou</h1>
      </div>
      <div className="Userprofile">
        <img src={Image} alt="" className="Userprofile0" />
        <h1 className="Userprofile1">Coucou</h1>
      </div>
      <div className="Userprofile">
        <img src={Image} alt="" className="Userprofile0" />
        <h1 className="Userprofile1">Coucou</h1>
      </div>
      <div className="Userprofile">
        <img src={Image} alt="" className="Userprofile0" />
        <h1 className="Userprofile1">Coucou</h1>
      </div> */}
    </div>
  );
};

export default UserProfileCards;
