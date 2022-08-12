import React from 'react'
import { database } from '../../firebase';
import { useProfile } from '../../contexts/ProfileContext';

const AcceptQuest = ({quest, user}) => {
    const { profile } = useProfile()
    var IsYourQuest = false
    quest.receivers.forEach((receiver) => {
        if (receiver.profile.uid === user.uid) {
            IsYourQuest = true
        } 
    })
    console.log(IsYourQuest)
    const accept = () => {
        var receivers = quest.receivers
        receivers.push({
            profile
        })
        console.log(receivers)
        database.task.doc(quest.id).update({
            status: "Accepted",
            receivers: receivers
          });
        const current_score = profile.point
        database.profile.doc(profile.id).update({
            point: current_score + 2
        })
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