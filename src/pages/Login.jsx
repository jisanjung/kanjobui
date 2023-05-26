import React from 'react';
import jwt_decode from "jwt-decode";
import { doesUserExist, addUser } from "../utils/userUtils";
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const handleLoginSuccess = async response => {
    const { email, given_name, family_name } = jwt_decode(response.credential);

    const userObject = {
      email,
      fullname: `${given_name} ${family_name}`
    }

    const userExists = await doesUserExist(email);
    if (!userExists) {
      const userAdded = await addUser(userObject);
      console.log(userAdded);
    }

    localStorage.clear();
    localStorage.setItem("currentUser", JSON.stringify(userObject));

    navigate("/home");
  }

  return (
    <h1>
        Login
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={err => console.log(err)}
        />
    </h1>
  )
}

export default Login