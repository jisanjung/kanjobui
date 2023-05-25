import React, { useEffect } from 'react';
import jwt_decode from "jwt-decode";
import { doesUserExist, addUser } from "../utils/userUtils";
const { VITE_GOOGLE_CLIENT_ID, VITE_GOOGLE_CLIENT_SECRET } = import.meta.env;

const Login = () => {

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
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: VITE_GOOGLE_CLIENT_ID,
      callback: handleLoginSuccess
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );
  }, []);

  return (
    <h1>
        Login
        <div id='signInDiv'></div>
    </h1>
  )
}

export default Login