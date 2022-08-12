import "./topbar.css"

import {Link, useNavigate} from 'react-router-dom';
import { useAuth } from "../../../contexts/AuthContext";
import { useState } from "react";
import { useProfile } from "../../../contexts/ProfileContext";

export default function Topbar() {
    const { user, logout } = useAuth();
    const { profile } = useProfile();
    const [error, setError] = useState('');
  
    const navigate = useNavigate();
  
    async function handleLogout() {
      setError('');
      try {
        await logout();
        navigate('/login');
      } catch {
        setError('Failed to log out');
      }
    }

    if (user) {        
        return (
            <div className = "topbar">
                <Link to = '/' className = "name">
                    <span className="green">Green</span> Community
                </Link>
                <nav className="navbar">
                    <Link to = '/' className = "nav"> Trang chủ </Link>
                    <Link to = '/shop' className = "nav"> Cửa hàng </Link>
                    <Link to = '/task' className = "nav"> Nhiệm vụ </Link>
                </nav>
                <div className="profile">
                    <p>Xin chào, {profile.username}!</p>
                    <ul class="profile-option">
                        <li class="profile-option-item">
                            <Link to = '/profile' className = "profile-nav"> Tài khoản của tôi</Link>
                        </li>

                        <li class="profile-option-item">
                            <button onClick={handleLogout} className = "profile-nav nav-button">Đăng xuất</button>
                        </li>
                    </ul>
                </div>            
            </div>
        )
    } else {
        return (
            <div className = "not-login">
                <Link to = '/' className = "name">
                    <span className="green">Green</span> Community
                </Link>
                <nav className="navbar">
                    <Link to = '/' className = "nav"> Trang chủ </Link>
                    <Link to = '/shop' className = "nav"> Cửa hàng </Link>
                    <Link to = '/task' className = "nav"> Nhiệm vụ </Link>
                </nav>
                <div className = "account"> 
                    <Link to = '/signup' className = "account_link"> Đăng ký </Link>
                    <Link to = '/login' className = "account_link"> Đăng nhập </Link>
                </div>
            </div>
        )
    }
}