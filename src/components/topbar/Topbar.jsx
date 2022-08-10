import "./topbar.css"

import {Link} from 'react-router-dom';

export default function Topbar() {
    return (
        <div class = "topbar">
            <Link to = '/' class = "name">
                <span class="green">Green</span> Community
            </Link>
            <nav class="navbar">
                <Link to = '/' class = "nav"> Trang chủ </Link>
                <Link to = '/cuahang' class = "nav"> Cửa hàng </Link>
                <Link to = '/nhiemvu' class = "nav"> Nhiệm vụ </Link>
            </nav>
            <div class="profile">
                <p>Xin chào, <b>Người Dùng</b>.</p>
                <img src="/img/user.png" width="50" height="50" />
            </div>            
        </div>
    )
}