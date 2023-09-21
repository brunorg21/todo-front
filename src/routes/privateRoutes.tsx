import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoutes() {
  const { token } = useContext(UserContext);
  return <>{token ? <Outlet /> : <Navigate to="/login" />}</>;
}
