"use client";
import { signupDatas } from "../signupDatas";
import Input from "../Input";
// import Link from "next/link";
import axios from "axios";

import { useState } from "react";
import Link from "next/link";

function Signup() {
  const URL = process.env.NEXT_PUBLIC_SERVER_URL;

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${URL}/auth/signup`, {
        firstname: form.firstname,
        lastname: form.lastname,
        email: form.email,
        password: form.password,
        phone: form.phone,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen">
      <div className="w-full h-screen flex flex-col items-center justify-center gap-6">
        <div className="text-3xl font-ibarra">
        <h1 >S&apos;inscrire</h1>
        </div>
       <div className="w-full flex justify-center">
       <h3 className="text-xl font-imprima">
          Déjà membre ? {" "}
          <Link href="/auth/signin">
            <button className="textColor" type="button">
              Se connecter
            </button>
          </Link>
        </h3>
       </div>
        
      <div className="w-full flex flex-col gap-6 items-center font-imprima text-xl" onSubmit={handleSubmit}>
      <form className="flex flex-col gap-4">
          {signupDatas.map((item) => (
            <Input
              key={item.id}
              label={item.label}
              type={item.type}
              name={item.name}
              placeholder={item.placeholder}
              value={form[item.name]}
              onChange={handleChangeInput}
            />
          ))}
          <Link href="/auth/signin">
          <button type="button" className="buttonConection flex w-full justify-center" onClick={handleSubmit}>
          S&apos;inscrire
        </button></Link>
          
        </form>
      </div>
       </div>  
    </div>
  );
}

export default Signup;
