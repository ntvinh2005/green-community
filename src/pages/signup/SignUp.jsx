import "./signup.css";
import Topbar from "../../components/topbar/Topbar";
import {Link} from 'react-router-dom';


const SignUp = () => {
  return (
    <>
        <Topbar/>
        <div class = "container">
        <div class = "wrapper">
            <h1 class = "title">Đăng ký</h1>
            <form class = "form">
                <input placeholder="Tên đăng nhập" class = "input"/>
                <input placeholder="Mật khẩu" class = "input"/>
                <button class = "button">Đăng ký</button>
                <p>Bạn đã có tài khoản? <Link to = "/login" class = "link">Đăng nhập</Link> </p>
            </form>
        </div>
        </div>
    </>
  );
};

export default SignUp;