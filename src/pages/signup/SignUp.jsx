import Topbar from "../../components/topbar/Topbar";

import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, Link}  from "react-router-dom";

import {
  addDoc, 
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../../firebase";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordAgain = useRef();
  const phoneRef = useRef();
  const usernameRef = useRef();

  const [error, setError] = useState('');
  const { dispatch, signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordAgain.current.value) {
      console.error('Not Matched!');
      console.log(passwordRef, passwordAgain);
    } else {
      try {
        const res = await signup(emailRef.current.value, passwordRef.current.value);
        const userCredential = {
          username: usernameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
          phone: phoneRef.current.value,
          uid: res.user.uid,
          timeStamp: serverTimestamp(),
        }

        await addDoc(collection(db, "profile"), userCredential);

        dispatch({type: "LOGIN", payload: userCredential});
        navigate(`/profile`)
      } catch (error) {
        console.log(error);
        setError('Đăng ký không thành công!');
      }
    }
  };

  return (
    <>
        <Topbar/>
        <div class = "container">
        <div class = "wrapper">
            <h1 class = "title">Đăng ký</h1>
            <form class = "form" onSubmit={handleSubmit}>
                {error !== '' && <p>{error}</p>}
                <input ref = {usernameRef} placeholder = "Tên đăng nhập" class = "input" required/>
                <input ref = {emailRef} placeholder="Email" class = "input" required/>
                <input ref = {passwordRef} type = "password" placeholder="Mật khẩu" class = "input" required/>
                <input ref = {passwordAgain} type = "password" placeholder="Nhập lại mật khẩu" class = "input" required/>
                <input ref = {phoneRef} type = "tel" placeholder="SĐT" class = "input" required/>
                <button class = "button">Đăng ký</button>
                <p>Bạn đã có tài khoản? <Link to = "/login" class = "link">Đăng nhập</Link> </p>
            </form>
        </div>
        </div>
    </>
  );
};

export default SignUp;