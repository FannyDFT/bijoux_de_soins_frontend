"use client";
import axios from "axios";
import { createContext, useState } from "react";
import { TUSER } from "../../app/types/TUser";

type AuthContextType = {
  user: TUSER;
  setUser: React.Dispatch<React.SetStateAction<TUSER>>;
  signup: () => Promise<void>;
  signin: () => Promise<void>;
  signout: () => void;
};
export const AuthContext = createContext<AuthContextType>({
  user: {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    phone: "",
  },
  setUser: () => null,
  signup: () => Promise.resolve(),
  signin: () => Promise.resolve(),
  signout: () => null,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const URL = process.env.NEXT_PUBLIC_SERVER_URL;
  const [user, setUser] = useState<TUSER>({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    phone: "",
  });

  const signup = async () => {
    try {
      const response = await axios.post(`${URL}/auth/signup`, {
        firstname: user?.firstname,
        lastname: user?.lastname,
        email: user?.email,
        password: user?.password,
        phone: user?.phone,
      });

      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const signin = async () => {
    try {
      const response = await axios.post(`${URL}/auth/signin`, {
        email: user?.email,
        password: user?.password,
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
}
