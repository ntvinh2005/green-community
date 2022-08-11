import "./login.css";
import Topbar from "../../components/topbar/Topbar";
import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, Link}  from "react-router-dom";
import { useProfile } from "../../contexts/UserContext";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const { user, login } = useAuth();
  const { User } = useProfile();

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(error);
    try {
        await login(emailRef.current.value, passwordRef.current.value)
          .then((userCredential) => {
            const uid = userCredential.user.uid;
            // console.log(uid);
            // const user = userCredential.user;
            // dispatch({type: "LOGIN", payload: user});
            console.log(user);
          })
        navigate('/profile');
    } catch (error) {
      console.log(error);
      setError('Đăng nhập không thành công!');
    }
  };

  return (
    <>
        <Topbar/>
        <div className = "container">
          <div className = "wrapper">
              <h1 className = "title">Đăng nhập</h1>
              {error !== '' && <p>{error}</p>}
              <form className = "form" onSubmit={handleSubmit}>
                <input ref = {emailRef} placeholder="Nhập tên đăng nhập" className = "input" required/>
                <input type = "password" ref = {passwordRef} placeholder="Mật khẩu" className = "input" required/>
                <button className = "button">Đăng nhập</button>
                <p>Bạn chưa có tài khoản? <Link to = "/signup" className = "link">Tạo tài khoản mới</Link> </p>
              </form>
          </div>
        </div>
    </>
  );
};

export default Login;