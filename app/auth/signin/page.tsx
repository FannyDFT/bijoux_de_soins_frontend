"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Login() {
  const { signin } = useAuth();
  // const router = useRouter()

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full  flex flex-col items-center justify-center gap-10 my-12">
      <div className="w-full flex justify-center">
        <h1 className="text-3xl font-ibarra">Se connecter</h1>
      </div>
      <div className="w-full flex justify-center">
        <h3 className="text-xl font-imprima">
          Vous êtes nouveau ici ?{" "}
          <Link href="/auth/signup">
            <button className="textColor" type="button">
              S&apos;inscrire
            </button>
          </Link>
        </h3>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-col gap-6 text-xl font-imprima w-1/3">
          <div className="flex flex-col gap-6">
            <label>E-mail</label>
            <input
              className="inputConection"
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder=""
            />
          </div>
          <div className="flex flex-col gap-6">
            <label>Mot de Passe</label>
            <input
              className="inputConection"
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder=""
            />
          </div>
          <Link href="/">
            <button
              type="button"
              className="buttonConection px-8 flex w-full justify-center mt-8"
              onClick={() => signin(credentials)}
            >
              Se connecter
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
