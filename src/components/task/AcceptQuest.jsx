import React from 'react'
import { database } from '../../firebase';

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
    {IsYourQuest ? (null):(
       <button onClick = {accept}>Accept this quest</button> 
    )}
    </>
  )
}

export default AcceptQuest