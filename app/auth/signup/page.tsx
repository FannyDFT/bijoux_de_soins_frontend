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
    <>
      <div className="flex flex-col h-screen items-center gap-8">
        <h1 className="">S&apos;inscrire</h1>
        <h3 className="">
          Déjà membre ?{" "}
          <Link href="/auth/signin">
            <button className="textColor" type="button">
              Se connecter
            </button>
          </Link>
        </h3>
        <form className="" onSubmit={handleSubmit}>
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
          <button type="submit" className="buttonConection">
            S&apos;inscrire
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
