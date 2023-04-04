// import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  if (!user) {
    navigate("/signin");
  }
  return children;
};

export default ProtectedRoute;
