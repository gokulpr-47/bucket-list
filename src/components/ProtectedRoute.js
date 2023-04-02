// import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  const { user } = useAuth();
  if (!user) {
    return navigate("/signin");
  }
  return children;
};

export default ProtectedRoute;
