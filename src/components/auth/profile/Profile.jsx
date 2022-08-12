import "./profile.css"
import React, { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useProfile } from '../../../contexts/ProfileContext'
import Topbar from '../../others/topbar/Topbar';
import Footer from "../../others/footer/Footer";

const PF = process.env.PUBLIC_FOLDER


const Profile = () => {
  const [error, setError] = useState('');
  const { user, logout } = useAuth();
  const { profile }  = useProfile()

  const navigate = useNavigate();

  async function handleLogout() {
    setError('');
    try {
      await logout();
      navigate('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <>
      <Topbar/>

      <main>
        <section className="profile-short">
          <div
            className="profile-image"
            // style={{backgroundImage: `url(${PF}/img/user.png)`}}
          ></div>
          <p className="profile-name">{profile.username}</p>
          <p className="profile-detail">Điểm: <span>{profile.point ? profile.point : 0}</span> điểm</p>
          <p className="profile-detail">Ngày tham gia: <span>01/01/2022</span></p>
          <p className="profile-detail">Nhiệm vụ đã làm: <span>100</span></p>
        </section>
        <section className="profile-modification">
          <h3>Thay đổi thông tin cá nhân</h3>
          <form>
            <label className="form-label" htmlFor="username">Tên tài khoản:</label>
            <input className="form-input" id="username" value={profile.username} disabled />
            <label className="form-label" htmlFor="new-username"
              >Tên tài khoản mới:</label
            >
            <input
              type="text"
              className="form-input"
              id="new-username"
              placeholder="Tên tài khoản mới"
            />
            <button className="change-profile-button">Thay đổi tài khoản</button>
            <label className="form-label" htmlFor="email">Địa chỉ thư điện tử:</label>
            <input
              className="form-input"
              id="email"
              value={profile.email}
              disabled
            />
            <label className="form-label" htmlFor="new-email"
              >Địa chỉ thư điện tử mới:</label
            >
            <input
              type="email"
              className="form-input"
              id="new-email"
              placeholder="Địa chỉ thư điện tử mới"
            />
            <button className="change-profile-button">
              Thay đổi địa chỉ thư điện tử
            </button>
            <label className="form-label" htmlFor="new-email">Mật khẩu mới:</label>
            <input
              type="password"
              className="form-input"
              id="new-email"
              placeholder="Mật khẩu mới"
            />
            <label className="form-label" htmlFor="new-email"
              >Xác nhận mật khẩu mới:</label
            >
            <input
              type="password"
              className="form-input"
              id="new-email"
              placeholder="Mật khẩu mới"
            />
            <button className="change-profile-button" style={{marginBottom: 0}}>
              Thay đổi mật khẩu
            </button>
          </form>
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default Profile;