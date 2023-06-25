"use client";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { TUSER } from "../types/TUser";
import { Router } from "next/router";

type TCredentials = {
  email: string;
  password: string;
};
// });
interface IUserContext {
  user: TUSER | null;
  isAuth: boolean;
  signin: (credentials: TCredentials) => Promise<void>;
  signout: () => Promise<void>;
}

const AuthContext = createContext<IUserContext | null>(null);

type AuthState = {
  user: TUSER | null;
  isAuth: boolean;
  isLoading: boolean;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const URL = process.env.NEXT_PUBLIC_SERVER_URL;

  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuth: false,
    isLoading: true,
  });

  const signin = async ({ email, password }: TCredentials) => {
    try {
      const { data, headers } = await axios.post(`${URL}/auth/signin`, {
        email,
        password,
      });
      setAuthState(() => ({ isAuth: true, user: data, isLoading: false }));
      const token = headers["authorization"];
      axios.defaults.headers.common["authorization"] = token;
      localStorage.setItem("token", token || "");
    } catch (error) {
      console.log(error);
    }
  };

  const signout = async () => {
    setAuthState({ user: null, isAuth: false, isLoading: false });
    localStorage.removeItem("token");
    axios.defaults.headers.common.authorization = "";
  };

  useEffect(() => {
    setAuthState((state) => ({
      ...state,
      isLoading: true,
    }));
    axios
      .post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/me`,
        {},
        {
          headers: {
            Authorization:
              typeof window !== "undefined" && localStorage.getItem("token"),
          },
        },
      )
      .then((res) => {
        setAuthState(() => ({
          isLoading: false,
          user: res.data,
          isAuth: true,
        }));
        axios.defaults.headers.common["authorization"] =
          localStorage.getItem("token");
      })
      .catch(() =>
        setAuthState((state) => ({
          ...state,
          isLoading: false,
        })),
      );
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: authState.user,
        isAuth: authState.isAuth,
        signin,
        signout,
      }}
    >
      {authState.isLoading ? "Loading ..." : children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within a UserContextProvider");
  }
  return context;
};
