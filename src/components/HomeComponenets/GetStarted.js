import React from "react";
import "./GetStarted.css";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function GetStarted({ progress }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  const gotoBucket = () => {
    if (user) {
      navigate("/bucket");
    } else {
      navigate("/signin");
    }
  };
  return (
    <div className="get-started">
      <button
        onClick={gotoBucket}
        className={progress > 0.85 ? "entered-button" : "get-started-button"}
      >
        Get Started
      </button>
    </div>
  );
}
