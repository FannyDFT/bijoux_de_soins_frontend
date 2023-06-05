"use client";
import React, { useState } from "react";
import Login from "./Login";
import axios from "axios";

function Signup() {
  const [showLogin, setShowLogin] = useState(false);
  const URL = process.env.NEXT_PUBLIC_SERVER_URL;

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  //Fonction pour récupérer la saisie de l'utilisateur
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //Fonction pour gérer la soumission du formulaire lors de son envoie
  const handleSubmit = async () => {
    await axios.post(`${URL}/auth/signup`, {
      firstname: form.firstname,
      lastname: form.lastname,
      email: form.email,
      password: form.password,
      phone: form.phone,
    });
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
            <label htmlFor="email" className="flex flex-col">
              E-mail{" "}
              <input
                type="text"
                placeholder=""
                className="inputConnection"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="password" className="flex flex-col">
              Mot de Passe
              <input
                type="password"
                className="inputConnection"
                value={form.password}
                name="password"
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col">
              Prénom
              <input
                type="text"
                className="inputConnection"
                name="firstname"
                value={form.firstname}
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col">
              Nom
              <input
                type="text"
                className="inputConnection"
                name="lastname"
                value={form.lastname}
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col">
              Téléphone
              <input
                type="text"
                className="inputConnection"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </label>

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
