import { FormEvent, createContext, useContext, useState } from "react";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { AlertContext } from "./AlertContext";
import { ITask } from "../models/tasks";

interface IUser {
  name?: string;
  password: string;
  email: string;
}
interface UserContextProps {
  handleCreateNewUser: (user: IUser, event: FormEvent) => Promise<void>;
  login: (user: IUser, event: FormEvent) => Promise<void>;
  logOut: () => void;
  token: string;
}

export const UserContext = createContext({} as UserContextProps);

export function UserContextProvider({ children }: any) {
  const [token, setToken] = useState<string>("");

  const { toast } = useContext(AlertContext);

  const navigation = useNavigate();

  async function handleCreateNewUser(
    { email, name, password }: IUser,
    e: FormEvent
  ) {
    e.preventDefault();

    try {
      await api.post("/users", {
        email,
        name,
        password,
      });

      toast.success("Usuário cadastrado com sucesso!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      navigation("/login");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  }

  async function login({ email, password }: IUser, e: FormEvent) {
    e.preventDefault();

    try {
      const response = await api.post("/users/login", {
        email,
        password,
      });
      setToken(response.data.token);
      localStorage.setItem("@token", response.data.token);
      navigation("/home");
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${localStorage.getItem("@token")}`;
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          style: {
            backgroundColor: "#525252",
            color: "white",
          },
        });
      }
    }
  }

  function logOut() {
    localStorage.removeItem("@token");
    setToken("");
  }

  return (
    <UserContext.Provider
      value={{
        handleCreateNewUser,
        login,
        logOut,
        token,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
