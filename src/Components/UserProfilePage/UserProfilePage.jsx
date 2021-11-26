import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import axios from "axios";
import UserProfileCards from "../Userprofilecards/Userprofilecards.jsx";

const UserProfilePage = () => {
  const {id} = useParams();

  const [style1, setStyle1] = useState("");
  const [style2, setStyle2] = useState("");
  const [list, setList] = useState([]);


  // const getDataUser = () => {
  //   axios.get(http://localhost:5000/user).then((response) => {
  //     console.log(response.data);
  //   });
  // };
  // getDataUser()

  // ID | nickname   | favorite_style_one | favorite_style_two | location   | email

  useEffect (()=> {

    const getUser = () => {
      axios.get('http://localhost:5000/user/')
      .then(response => setList(response.data))}

    getUser()

  },[id])
  // console.log(list.filter(e=> e.ID))
  // console.log(list.filter(e=> e.ID == id)[0].favorite_style_one))
  // setStyle2(list.filter(e=> e.ID == id)[0].favorite_style_two)

  return (
    <div>
      <h1></h1>
      {list.map( e => <UserProfileCards prop={e.nickname} />)}
    </div>
  );
};

export default UserProfilePage;