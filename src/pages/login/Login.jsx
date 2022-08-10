import "./login.css";
import Topbar from "../../components/topbar/Topbar";
import {Link} from 'react-router-dom';


const Login = () => {
  return (
    <>
        <Topbar/>
        <div class = "container">
        <div class = "wrapper">
            <h1 class = "title">Đăng nhập</h1>
            <form class = "form">
            <input placeholder="Tên đăng nhập" class = "input"/>
            <input placeholder="Mật khẩu" class = "input"/>
            <button class = "button">Đăng nhập</button>
            <p>Bạn chưa có tài khoản? <Link to = "/signup" class = "link">Tạo tài khoản mới</Link> </p>
            </form>
        </div>
        </div>
    </>
  );
};

export default Login;