"use client";
import { signupDatas } from "../signupDatas";
import Input from "../Input";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

function Signup() {
  const URL = process.env.NEXT_PUBLIC_SERVER_URL;

  const initialFormState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
  };

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
      toast.success(
        "Compte créé avec succès, vous pouvez désormais vous connecter",
      );

      setForm(initialFormState);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 my-12">
      <div className="text-3xl font-ibarra">
        <h1>S&apos;inscrire</h1>
      </div>
      <div className="w-full flex justify-center">
        <h3 className="text-xl font-imprima">
          Déjà membre ?{" "}
          <Link href="/auth/signin">
            <button className="textColor zoom pl-4" type="button">
              Se connecter
            </button>
          </Link>
        </h3>
      </div>

      <div
        className="w-2/3 flex flex-col gap-6 items-center font-imprima text-xl"
        onSubmit={handleSubmit}
      >
        <form className="flex flex-col gap-4 w-3/4">
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
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
            <button
              type="button"
              className="buttonHover flex w-full justify-center mt-10 "
              onClick={handleSubmit}
            >
              S&apos;inscrire
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
