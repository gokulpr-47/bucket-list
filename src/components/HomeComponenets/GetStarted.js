import React from "react";
import "./GetStarted.css";
import { useNavigate } from "react-router-dom";

export default function GetStarted({ progress }) {
  const navigate = useNavigate();

  const gotoBucket = () => {
    navigate("/bucket");
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
