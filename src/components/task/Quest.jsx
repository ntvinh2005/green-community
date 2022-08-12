import React from 'react'
import AddFile from '../shop/AddFile'
import DeleteQuestButton from './DeleteQuestButton'
import AcceptQuest from './AcceptQuest'
import CloseQuest from './CloseQuest'
import { useAuth } from '../../contexts/AuthContext'
import "./task.css"

const Quest = ({quest}) => {
  const { user } = useAuth()
  const receivers = quest.receivers
    console.log(quest)
  return (
    <>
      <div className="mission-image" style={{backgroundImage: `url(${quest.url})`}}>
        {/* <AddFile item = {quest} type = {"quest"}/> */}
      </div>
      <div className="mission-description-container">
        <p className="mission-title">{quest.title }</p>
        <div className="mission-description">
          <img src= {require('./seller.png')} className="mission-icon" />
          <span className="mission-text"> { quest.authorName} </span>
        </div>
        <div className="mission-description">
          <img src= {require('./point.png')} className="mission-icon" />
          <span className="mission-text"> {quest.point} </span>
        </div>
      </div>
      { user.uid === quest.author ? (
        <>{ receivers === [] ? (
          <DeleteQuestButton id = {quest.id} downloadUrl = {quest.url}></DeleteQuestButton>
        ) : (
          <CloseQuest id = {quest.id} downloadUrl = {quest.url}/>
        )}
        </>
      ) : (
        <AcceptQuest quest = {quest} user = {user}/>
      ) }
      
    </>
  )
}

export default Quest