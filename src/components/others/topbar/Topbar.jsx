import "./topbar.css"
import "./common.css"
import "./header.css"
import "./profile.css"

import {Link, useNavigate} from 'react-router-dom';
import { useAuth } from "../../../contexts/AuthContext";
import { useProfile } from "../../../contexts/ProfileContext";

export default function Topbar() {
    const { user, logout } = useAuth();
    const { profile } = useProfile();
  
    const navigate = useNavigate();
  
    async function handleLogout() {
      try {
        await logout();
        navigate('/login');
      } catch {
        console.log("Failed")
      }
    }

    if (user) {        
        return (
            <div className = "topbar">
                <Link to = '/' className = "name">
                    <span className="green">Green</span> H
                </Link>
                <nav className="navbar">
                    <Link to = '/' className = "nav"> Trang chủ </Link>
                    <Link to = '/market' className = "nav"> Gian hàng </Link>
                    <Link to = '/task' className = "nav"> Nhiệm vụ </Link>
                </nav>
                <div className="profile">
                    <p>Xin chào, {profile.username}!</p>
                    <img src = {require('./user.png')} width="50" height="50" alt=""/>
                    <div className="profile-dropdown">
                        <Link to = '/profile' className = "profile-link"> Thông tin cá nhân </Link>
                        <Link to = '/shop' className = "profile-link"> Cửa hàng của tôi </Link>
                        <button onClick={handleLogout} className="profile-link">Đăng xuất</button>
                    </div>
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
                    <Link to = '/market' className = "nav"> Gian hàng </Link>
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