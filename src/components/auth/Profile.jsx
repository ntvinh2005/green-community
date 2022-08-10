import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";


const Profile = () => {
  const [error, setError] = useState("");
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div
      style={{ minHeight: "100vh" }}
    >
      <div style={{ maxWidth: "400px" }}>
            <h2>Profile</h2>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <strong>Email:</strong> {user !== null ? user.email : null}
            <div>
            <Link to="/update-profile">
              Update Profile
            </Link>
            </div>
          <div>
            <button
              onClick={handleLogout}
            >
              Log Out
            </button>
          </div>
      </div>
    </div>
  );
};

export default Profile;