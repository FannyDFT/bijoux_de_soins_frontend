"use client";

import React, { useState } from "react";
import Signup from "./Signup";

function Login() {
  const [showSignup, setShowSignup] = useState(false);

  const handleGoSignupClick = () => {
    setShowSignup(true);
  };

  return (
    <>
      {showSignup ? (
        <Signup />
      ) : (
        <div className="flex flex-col items-center w-fullh-screen h-screen justify-center gap-10">
          <h1 className="text-7xl font-ibarra">Se connecter</h1>
          <h3 className="font-imprima text-3xl">
            Vous êtes nouveau ici ?{" "}
            <button
              className="textColor"
              type="button"
              onClick={handleGoSignupClick}
            >
              S&apos;inscrire
            </button>
          </h3>
          <form className="flex flex-col gap-10 font-imprima text-3xl">
            <label>E-mail</label>
            <input type="text" />
            <label>Mot de Passe</label>
            <input type="password" />
            <button type="submit" className="buttonConection">
              Se connecter
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;
