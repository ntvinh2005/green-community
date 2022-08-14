import "./profile.css"
import React, {useState} from 'react';
import { useProfile } from '../../../contexts/ProfileContext'
import Topbar from '../../others/topbar/Topbar';
import Footer from "../../others/footer/Footer";
import { database } from "../../../firebase";
import { useAuth } from "../../../contexts/AuthContext";


const Profile = () => {
  const { profile }  = useProfile()
  const [newUsername, setNewUsername] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const { updatePassword, updateEmail } = useAuth()

  const handleChangeUsername = async() => {
    await database.profile.doc(profile.id).update({ 
      username: newUsername,
    })
    setNewUsername("")
  }

  const handleResetPassword = async() => {
    if (confirmPassword == newPassword) {
      await updatePassword(newPassword)
    }
    setNewPassword("")
    setConfirmPassword("")
  }

  const handleResetEmail = async() => {
    await updateEmail(newEmail)
    await database.profile.doc(profile.id).update({ 
      email: newEmail,
    })
    setNewEmail("")
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
          <div className="form">
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
              value={newUsername}
              onChange={(event) => setNewUsername(event.target.value)}
            />
            <button className="change-profile-button" onClick={handleChangeUsername}>Thay đổi tài khoản</button>

            <label className="form-label" htmlFor="username" style={{ margin: "10px"}}>Thay đổi thông tin địa chỉ thư điện tử và mật khẩu cần đăng xuất và đăng nhập lại trước.</label>
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
              value={newEmail}
              onChange={(event) => setNewEmail(event.target.value)}
            />
            <button className="change-profile-button" onClick={handleResetEmail}>
              Thay đổi địa chỉ thư điện tử
            </button>
            
            <label className="form-label" htmlFor="new-email">Mật khẩu mới:</label>
            <input
              type="password"
              className="form-input"
              id="new-email"
              placeholder="Mật khẩu mới"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
            />
            <label className="form-label" htmlFor="new-email"
              >Xác nhận mật khẩu mới:</label
            >
            <input
              type="password"
              className="form-input"
              id="new-email"
              placeholder="Mật khẩu mới"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <button className="change-profile-button" style={{marginBottom: 0}} onClick={handleResetPassword}>
              Thay đổi mật khẩu
            </button>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default Profile;