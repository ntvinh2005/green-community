import React from "react";
import { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { database } from "../../firebase";
import firebase from "firebase/compat/app";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      await signup(emailRef.current.value, passwordRef.current.value);

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          database.profile.add({
            uid: user.uid,
            email: user.email,
          });
        }
      });

      navigate("/");
    } catch {
      setError("Failed to create an account");
    }
  };

  return (
    <>
      <div>
            <h2 className="text-center mb-4">Sign up</h2>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <form onSubmit={handleSubmit}>
              <div id="email">
                <label>Email</label>
                <input
                  type="email"
                  ref={emailRef}
                  required
                ></input>
              </div>
              <div id="password">
                <label>Password</label>
                <input
                  type="password"
                  ref={passwordRef}
                  required
                ></input>
              </div>
              <div id="confirm-password">
                <label>Confirm Password</label>
                <input
                  type="password"
                  ref={confirmPasswordRef}
                  required
                ></input>
              </div>
              <button className="w-100 mt-3" type="submit">
                Sign up
              </button>
            </form>
          <div>
            Already have an account?{" "}
            <Link to="/login">
              Login
            </Link>
          </div>
      </div>
    </>
  );
};

export default Signup;