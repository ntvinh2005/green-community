import React, { useState } from 'react'
import { useAuth } from "../../contexts/AuthContext";
import { database } from "../../firebase"
import { useTask } from "../../contexts/TaskContext"
import Topbar from '../others/topbar/Topbar'
import Quest from "./Quest"
import "./task.css"
import Footer from "../others/footer/Footer"
import { useProfile } from '../../contexts/ProfileContext';

const Shop = () => {
    const { user } = useAuth()
    const { quests } = useTask()
    const { profile } = useProfile();
    console.log(quests)
    var missions = []

    quests.forEach(quest => {
        quest.receivers.forEach(receiver => {
            if (receiver.uid === user.uid) missions.push(quest)
        })
    });


    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [open, setOpen] = useState(false)
    const handleSubmit = async () => {
        await database.task.add({ 
            title: title,
            description: description,
            url: "https://media.istockphoto.com/vectors/black-plus-sign-positive-symbol-vector-id688550958?k=20&m=688550958&s=612x612&w=0&h=wvzUqT3u3feYygOXg3GB9pYBbqIsyu_xpvfTX-6HOd0=",
            author: user.uid, 
            authorName: profile.username,
            status: "Waiting",
            receivers: [],
         })
         console.log(title, description)
         setOpen(false)
    }

    const openForm = () => {
        setOpen(true)
      }
  
    const hideForm = () => {
        setOpen(false)
        
    }

  return (
    <>
      <Topbar/>
      <button onClick = {openForm} className = "addButton"> Thêm nhiệm vụ mới </button>
      
      <div id="myModal" className="modal" style={{display: open ? "block" : "none"}}>
        <div className="new-mission">
          <span class="close-button"  onClick={hideForm}>&times;</span>
          <form className = "form-modal">
            <label className = "form-label">Nhiệm vụ: </label>
            <textarea className = "form-input" type="text" value={title} onChange={ (event) => setTitle(event.target.value)} required></textarea>

            <label className = "form-label">Mô tả: </label>
            <textarea className = "form-input form-input-description" value={description} size = "50" onChange={ (event) => setDescription(event.target.value)} required></textarea>
          </form>
          <div className="action">
            <button className = "action-button-post" onClick={handleSubmit}>Đăng</button>
            <button className = "action-button-cancel" onClick={hideForm}>Huỷ</button>
          </div>
        </div>
      </div>

      {/* { open ? 
      (<div>
          <div>
              <label>Name of quest: </label>
              <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} required></input>
          </div>
          <div>
              <label>Description of quest: </label>
              <textarea value={description} onChange={(event) => setDescription(event.target.value)} required></textarea>
          </div>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={hideForm}>Cancel</button>
      </div>) : ( */}
      <main className = "mainTask">
        <h2>Nhiệm vụ</h2>
        {quests.map((quest) => (
            <div key={quest.id} className = "mission-container">
              <Quest quest={quest}></Quest>
            </div>
        ))}
        
      </main>
      <hr></hr>
      <main className = "mainTask">
        <h2>Nhiệm vụ của bạn</h2>
        {missions.map((mission) => (
            <div
            key={mission.id}
            className = "mission-container"
          >
            <Quest quest={mission}></Quest>
          </div>
        ))}
      </main>

      <Footer/>
    </>
  )
}

export default Shop