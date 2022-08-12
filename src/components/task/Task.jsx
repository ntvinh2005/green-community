import React, { useState } from 'react'
import { useAuth } from "../../contexts/AuthContext";
import { database } from "../../firebase"
import { useTask } from "../../contexts/TaskContext"
import Topbar from '../others/topbar/Topbar'
import Quest from "./Quest"

const Shop = () => {
    const { user } = useAuth()
    const { quests } = useTask()
    console.log(quests)
    var missions = []

    quests.forEach(quest => {
        quest.receivers.forEach(receiver => {
            if (receiver.profile.uid === user.uid) missions.push(quest)
        })
    });


    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [open, setOpen] = useState(false)
    const handleSubmit = async () => {
        await database.task.add({ 
            title: title,
            description: description,
            url: "",
            author: user.uid, 
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
    <h1>WELCOME TO QUEST BOARD</h1>
    
    { open ? 
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
    </div>) : (<button onClick = {openForm}> + </button>)
    }
    <hr></hr>
    <h1>AVAILABLE QUESTs</h1>
    {quests.map((quest) => (
        <div
        key={quest.id}
        style={{ maxWidth: "400px" }}
      >
        <Quest quest={quest}></Quest>
      </div>
    ))}
    <hr/>
    <h1>YOUR MISSION</h1>
    {missions.map((mission) => (
        <div
        key={mission.id}
        style={{ maxWidth: "400px" }}
      >
        <Quest quest={mission}></Quest>
      </div>
    ))}
    </>
  )
}

export default Shop