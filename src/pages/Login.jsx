import React, { useEffect } from 'react'

const Login = () => {

  const handleLoginSuccess = response => {
    console.log(`jwt token: ${response.credential}`);
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