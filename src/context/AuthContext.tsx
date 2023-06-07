"use client";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { TUSER } from "../../app/types/TUser";

// type AuthContextType = {
//   user: TUSER;
//   setUser: React.Dispatch<React.SetStateAction<TUSER>>;
//   signup: () => Promise<void>;
//   signin: () => Promise<void>;
//   signout: () => void;
// };
// export const AuthContext = createContext<AuthContextType>({
//   user: {
//     email: "",
//     password: "",
//     firstname: "",
//     lastname: "",
//     phone: "",
//   },
//   setUser: () => null,
//   signup: () => Promise.resolve(),
//   signin: () => Promise.resolve(),
//   signout: () => null,
type TCredentials = {
  email: string;
  password: string;
};
// });
interface IUserContext {
  user: TUSER | null;
  isAuth: boolean;
  signIn: (credentials: TCredentials) => Promise<void>;
  signOut: () => Promise<void>;
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

  // const [user, setUser] = useState<TUSER>({
  //   email: "",
  //   password: "",
  //   firstname: "",
  //   lastname: "",
  //   phone: "",
  // });

  // const signup = async () => {
  //   try {
  //     const response = await axios.post(`${URL}/auth/signup`, {
  //       firstname: user?.firstname,
  //       lastname: user?.lastname,
  //       email: user?.email,
  //       password: user?.password,
  //       phone: user?.phone,
  //     });

  //     setUser(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const signin = async () => {
  //   try {
  //     const response = await axios.post(`${URL}/auth/signin`, {
  //       email: user?.email,
  //       password: user?.password,
  //     });

  //     setUser(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const signout = () => {
  //   setUser(null);
  // };
  const signIn = async ({ email, password }: TCredentials) => {
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

  const signOut = async () => {
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
        signIn,
        signOut,
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
