import "./topbar.css"

import {Link} from 'react-router-dom';

export default function Topbar() {
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
                <p>Xin chào, <b>Người Dùng</b>.</p>
                <img src="/img/user.png" width="50" height="50" alt=""/>
            </div>            
        </div>
    )
}