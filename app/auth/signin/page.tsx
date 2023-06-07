"use client";

import React, { useContext, useReducer, useState } from "react";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";

function Login() {
  const { signin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [pawwsord, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signin();
      router.push("/");
    } catch (error) {
      console.log(error);
      // Gérer les erreurs de connexion
    }
  };
  return (
    <>
      <div className="flex flex-col items-center w-fullh-screen h-screen justify-center gap-10">
        <h1 className="text-7xl font-ibarra">Se connecter</h1>
        <h3 className="font-imprima text-3xl">
          Vous êtes nouveau ici ?{" "}
          <Link href="/auth/signup">
            <button className="textColor" type="button">
              S&apos;inscrire
            </button>
          </Link>
        </h3>
        <form
          className="flex flex-col gap-10 font-imprima text-3xl"
          onSubmit={handleLogin}
        >
          <label>E-mail</label>
          <input type="text" />
          <label>Mot de Passe</label>
          <input type="password" />
          <button type="submit" className="buttonConection">
            Se connecter
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
