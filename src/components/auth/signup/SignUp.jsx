import React from 'react';
import { useRef, useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { database } from '../../../firebase';
import firebase from 'firebase/compat/app';
import { Link, useNavigate } from 'react-router-dom';
import Topbar from '../../others/topbar/Topbar';

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const phoneNumberRef = useRef();
  const placeLivingRef = useRef()
  const nameRef = useRef()
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match');
    }
    try {
      setError('');
      await signup(emailRef.current.value, passwordRef.current.value);

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          database.profile.add({
            uid: user.uid,
            email: user.email,
            phone: phoneNumberRef.current.value, 
            place: placeLivingRef.current.value, 
            username: nameRef.current.value,
            point: 5
          });
        }
      });

      navigate('/');
    } catch {
      setError('Failed to create an account');
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
                <input ref = {nameRef} placeholder = "Tên đăng nhập" class = "input" required/>
                <input ref = {emailRef} placeholder="Email" class = "input" required/>
                <input ref = {passwordRef} type = "password" placeholder="Mật khẩu" class = "input" required/>
                <input ref = {confirmPasswordRef} type = "password" placeholder="Nhập lại mật khẩu" class = "input" required/>
                <input ref = {phoneNumberRef} type = "tel" placeholder="SĐT" class = "input" required/>
                <input ref = {placeLivingRef} type = "tel" placeholder="Địa chỉ" class = "input"/>
                <button class = "button">Đăng ký</button>
                <p>Bạn đã có tài khoản? <Link to = "/login" class = "link">Đăng nhập</Link> </p>
            </form>
        </div>
        </div>
    </>
  );

  // return (
  //   <>
  //     <div>
  //       <h2 className="text-center mb-4">Sign up</h2>
  //       {error && <div style={{ color: 'red' }}>{error}</div>}
  //       <form onSubmit={handleSubmit}>
  //         <div id="email">
  //           <label>Email</label>
  //           <input type="email" ref={emailRef} required></input>
  //         </div>
  //         <div id="password">
  //           <label>Password</label>
  //           <input type="password" ref={passwordRef} required></input>
  //         </div>
  //         <div id="confirm-password">
  //           <label>Confirm Password</label>
  //           <input type="password" ref={confirmPasswordRef} required></input>
  //         </div>
  //         <div id="phone-number">
  //           <label>Phone Number</label>
  //           <input type="number" ref={phoneNumberRef} required></input>
  //         </div>
  //         <div id="place-living">
  //           <label>Your Hometown</label>
  //           <input type="text" ref={placeLivingRef} required></input>
  //         </div>
  //         <div id="name">
  //           <label>Your Username</label>
  //           <input type="text" ref={placeLivingRef} required></input>
  //         </div>
  //         <button className="w-100 mt-3" type="submit">
  //           Sign up
  //         </button>
  //       </form>
  //       <div>
  //         Already have an account? <Link to="/login">Login</Link>
  //       </div>
  //     </div>
  //   </>
  // );
};

export default Signup;
