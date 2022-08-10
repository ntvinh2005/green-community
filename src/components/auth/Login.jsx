import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, Link}  from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("")
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await login(emailRef.current.value, passwordRef.current.value)
        console.log("Logged in!")
        setError("")
        navigate("/profile")
    } catch (error) {
        console.log(error)
        setError("Failed to login")
    }
  }

  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
        {error !== "" && <p>{error}</p>}
        <div>
            <label>Email: </label>
          <input type="email" ref={emailRef} required></input>
        </div>
        <div>
            <label>Password: </label>
          <input type="password" ref={passwordRef} required></input>
        </div>
        <button type="submit">Login</button>
        <div>
            Haven't had an account?{" "}
            <Link to="/signup">
              Login
            </Link>
          </div>
      </form>
    </div>
  );
};

export default Login;