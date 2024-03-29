import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { signIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/bucket");
    } catch (e) {
      setError(e.message);
      console.error(e.message);
    }
    console.log(error);
  };

  const switchPage = () => {
    navigate("/signup");
  };

  return (
    <div className="Signin">
      <div className="SigninContainer">
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <h4 style={{ color: "#EE6502" }}>
            SignIn <span style={{ color: "white" }}>To Your Bucket List!!</span>
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
          <input type="submit" value="SIGNIN" />
        </form>
        <p className="switch">
          Already have an account? <span onClick={switchPage}>SignUp</span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
