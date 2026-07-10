import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please enter Email and Password");
      return;
    }

    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>🎓 Course Registration System</h1>

        <h3>Welcome to the Course Registration Portal</h3>

        <p>
          Login to explore available courses and register for your favorite
          learning programs.
        </p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="options">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <span>Forgot Password?</span>
          </div>

          <button type="submit">
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;