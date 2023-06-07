"use client";
import React, { useContext, useState } from "react";
import Login from "../Login";

import { signupDatas } from "../signupDatas";
import Input from "../Input";
import AuthContext from "../../../src/context/AuthContext";

function Signup() {
  const { signup, user, setUser } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);
  const URL = process.env.NEXT_PUBLIC_SERVER_URL;

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  //Fonction pour récupérer la saisie de l'utilisateur
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //Fonction pour gérer la soumission du formulaire lors de son envoie
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {showLogin ? (
        <Login />
      ) : (
        <div className="flex flex-col items-center w-full h-auto justify-center gap-8">
          <h1 className="text-7xl font-ibarra">S&apos;inscrire</h1>
          <h3 className="font-imprima text-3xl">
            Déjà membre ?{" "}
            <button
              className="textColor"
              type="button"
              onClick={handleLoginClick}
            >
              Se connecter
            </button>
          </h3>
          <form className="flex flex-col mt-12 font-imprima text-3xl w-1/3 gap-10">
            {signupDatas.map((item) => (
              <Input
                key={item.id}
                label={item.label}
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                value={user[item.value]}
                onChange={handleChange}
              />
            ))}
            <button
              type="button"
              className="buttonConection"
              onClick={handleSubmit}
            >
              S&apos;inscrire
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Signup;
