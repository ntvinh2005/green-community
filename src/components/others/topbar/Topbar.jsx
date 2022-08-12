import "./topbar.css"

import {Link} from 'react-router-dom';
import { useAuth } from "../../../contexts/AuthContext";

export default function Topbar() {
    const { user } = useAuth();
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
                    <p>Xin chào, {user.email}!</p>
                    {/* <img src="/img/user.png" width="50" height="50" /> */}
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