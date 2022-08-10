import "./topbar.css"

import {Link} from 'react-router-dom';

export default function Topbar() {
    return (
        <div class = "topbar">
            <a class="name" > <span class="green">Green</span> Community</a>
            <nav class="navbar">
                <a class="nav">Trang chủ</a>
                <a class="nav">Gian hàng</a>
                <a class="nav">Nhiệm vụ</a>
            </nav>
            <div class="profile">
                <p>Xin chào, <b>Người Dùng</b>.</p>
                <img src="/img/user.png" width="50" height="50" />
            </div>            
        </div>
    )
}