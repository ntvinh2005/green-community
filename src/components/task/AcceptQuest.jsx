import React from 'react'
import { database } from '../../firebase';
import "./task.css";

const AcceptQuest = ({quest, user}) => {
    var IsYourQuest = false
    quest.receivers.forEach((receiver) => {
        if (receiver.uid === user.uid) {
            IsYourQuest = true
        } 
    })
    console.log(IsYourQuest)
    const accept = () => {
        var receivers = quest.receivers
        receivers.push({
            email: user.email,
            uid: user.uid
        })
        console.log(receivers)
        database.task.doc(quest.id).update({
            status: "Accepted",
            receivers: receivers
          });
    }

  return (
    <>
    {IsYourQuest ? (
       <button onClick = { (e) => { e.preventDefault();}} className = "mission-button">Đã nhận</button> 
    ):(
       <button onClick = {accept} className = "mission-button">Nhận</button> 
    )}
    </>
  )
}

export default AcceptQuest