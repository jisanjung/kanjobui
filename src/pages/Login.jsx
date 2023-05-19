import React, { useEffect } from 'react';
import jwt_decode from "jwt-decode";

const Login = () => {

  const handleLoginSuccess = response => {
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
  }

  useEffect(() => {
    const { VITE_GOOGLE_CLIENT_ID, VITE_GOOGLE_CLIENT_SECRET } = import.meta.env;
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