"use client";

import axios from "axios";
import { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const URL = process.env.NEXT_PUBLIC_SERVER_URL;
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    phone: "",
  });

  const signup = async (userData) => {
    try {
      const response = await axios.post(`${URL}/auth/signup`, {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
        phone: user.phone,
      });

      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
    const signin = async (userData) => {
      try {
        const response = await axios.post(`${URL}/auth/signin`, {
          email: user.email,
          password: user.password,
        });
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const signout = () => {
      setUser(null);
    };

    return (
      <AuthContext.Provider value={{ user, setUser, signup, signin, signout }}>
        {children}
      </AuthContext.Provider>
    );
  };
}

export default AuthContext;
