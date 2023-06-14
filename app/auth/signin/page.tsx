"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

function Login() {
  const { signin } = useAuth();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signin(credentials);
    router.push("/");
  };

  return (
    <>
      <div className="">
        <h1 className="">Se connecter</h1>
        <h3 className="">
          Vous êtes nouveau ici ?{" "}
          <Link href="/auth/signup">
            <button className="textColor" type="button">
              S&apos;inscrire
            </button>
          </Link>
        </h3>
        <form className="" onSubmit={handleSubmit}>
          <label>E-mail</label>
          <input
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
          />
          <label>Mot de Passe</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button type="submit" className="buttonConection">
            Se connecter
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
