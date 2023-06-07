"use client";
import axios from "axios";
import { ReactNode, createContext, useState } from "react";

type TUser = {
  id: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  phone: string;
};

interface IAuthContext {
  user: TUser | null;
  isAuth: boolean;
  signup: (userData: TUser) => Promise<void>;
  signin: (credentials: TCredentials) => Promise<void>;
  signout: () => void;
}

type TCredentials = {
  email: string;
  password: string;
};

type AuthState = {
  user: TUser | null;
  isAuth: boolean;
  isLoading: boolean;
};

const AuthContext = createContext<IAuthContext | null>(null);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuth: false,
    isLoading: true,
  });
  const URL = process.env.NEXT_PUBLIC_SERVER_URL;

  const signup = async (userData: TUser) => {
    try {
      const response = await axios.post(`${URL}/auth/signup`, userData);
      setAuthState({ user: response.data, isAuth: true, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };

  const signin = async (credentials: TCredentials) => {
    try {
      const response = await axios.post(`${URL}/auth/signin`, credentials);
      setAuthState({ user: response.data, isAuth: true, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };

  const signout = () => {
    setAuthState({ user: null, isAuth: false, isLoading: false });
  };

  return (
    <AuthContext.Provider value={{ ...authState, signup, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
