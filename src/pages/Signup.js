import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Signin.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
      console.error(e.message);
    }
  };

  const switchPage = () => {
    navigate("/signin");
  };

  return (
    <div className="Signin">
      <div className="SigninContainer">
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <h4 style={{ color: "white" }}>
            Create a new <span style={{ color: "#ee6502" }}>account!!</span>
          </h4>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <input type="submit" value="SIGNUP" />
        </form>
        <p className="switch">
          Already have an account? <span onClick={switchPage}>SignIn</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
