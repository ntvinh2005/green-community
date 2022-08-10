import "./topbar.css"

import {Link} from 'react-router-dom';

export default function Topbar({username}) {
    if (username) {
        return (
            <div class = "topbar">
                <Link to = '/' class = "name">
                    <span class="green">Green</span> Community
                </Link>
                <nav class="navbar">
                    <Link to = '/' class = "nav"> Trang chủ </Link>
                    <Link to = '/shop' class = "nav"> Cửa hàng </Link>
                    <Link to = '/task' class = "nav"> Nhiệm vụ </Link>
                </nav>
                <div class="profile">
                    <p>Xin chào, {username}!</p>
                    {/* <img src="/img/user.png" width="50" height="50" /> */}
                </div>            
            </div>
        )
    } else {
        return (
            <div class = "not-login">
                <Link to = '/' class = "name">
                    <span class="green">Green</span> Community
                </Link>
                <nav class="navbar">
                    <Link to = '/' class = "nav"> Trang chủ </Link>
                    <Link to = '/shop' class = "nav"> Cửa hàng </Link>
                    <Link to = '/task' class = "nav"> Nhiệm vụ </Link>
                </nav>
                <div class = "account"> 
                    <Link to = '/signup' class = "account_link"> Đăng ký </Link>
                    <Link to = '/login' class = "account_link"> Đăng nhập </Link>
                </div>
            </div>
        )
    }
}