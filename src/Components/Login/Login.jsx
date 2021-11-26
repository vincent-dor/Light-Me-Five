import { Link, Navigate, Route } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import "./Login.css";
import Auth from "../contexts/Auth";
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup
  .object({
    username: yup.string().max(20).required("Please enter your Nick Name"),
    password: yup.string().max(200).required("Please enter a password"),
  })
  .required();

const Login = () => {

  const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setUser({ ...user, [name]: value });
  };
 
  const handleSubmited = (values) => {
    try {
      setIsAuthenticated(values.username);
      <Link to ="/genres" />
    } catch ({ response }) {
      console.log(response);
    }
  };
  useEffect(() => {
    if (isAuthenticated) {
      <Link to ="/genres" />
     
    }
  }, [isAuthenticated]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
   const onSubmit = (data, e) => console.log(data, e);
    const onError = (errors, e) => console.log(errors, e);
    console.log("test", onSubmit);
  return (
    <div className="login">
   
      
      <form
        className="form-profil"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(handleSubmited, onError)();
         
        }} >
      <input
          className="name"
          type="text"
          id="name"
          name="usermame"
          placeholder="Nouvel Utilisateur ? Renseignez un identifiant"
          onChange={handleChange}
          {...register("username")}
          />
          {errors.username && <p id="p-yup">{errors.username.message}</p>}

          <br />
        
        <input
          className="password"
          type="password"
          id="password"
          name="password"
          placeholder="Déjà inscrit ? Renseignez votre identifiant"
          onChange={handleChange}
          {...register("password")}
          />
          {errors.password && <p id="p-yup">{errors.password.message}</p>}

          <br />
   
          <Link to ="/genres" >
        <input
          className="sign"
          id="buttonsignup"
          type="submit"
          value="Sign in"
        />
   </Link >
</form>


    </div>
  );
};

export default Login;
