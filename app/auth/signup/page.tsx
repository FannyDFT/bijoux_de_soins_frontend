"use client";
import React, { useContext } from "react";
import { signupDatas } from "../signupDatas";
import Input from "../Input";
import { AuthContext } from "../../../src/context/AuthContext";
import Link from "next/link";

function Signup() {
  const { signup, user, setUser } = useContext(AuthContext);
  console.log(user);

  const handleInputChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col items-center w-full h-auto justify-center gap-8">
        <h1 className="text-7xl font-ibarra">S&apos;inscrire</h1>
        <h3 className="font-imprima text-3xl">
          Déjà membre ?{" "}
          <Link href="/auth/signin">
            {" "}
            <button className="textColor" type="button">
              Se connecter
            </button>
          </Link>
        </h3>
        <form className="flex flex-col mt-12 font-imprima text-3xl w-1/3 gap-10">
          {signupDatas.map((item) => (
            <Input
              key={item.id}
              label={item.label}
              type={item.type}
              name={item.name}
              placeholder={item.placeholder}
              value={user}
              onChange={handleInputChange}
            />
          ))}
          <button type="submit" className="buttonConection">
            S&apos;inscrire
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
