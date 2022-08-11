import React from 'react'
import AddFile from '../shop/AddFile'
import DeleteQuestButton from './DeleteQuestButton'
import AcceptQuest from './AcceptQuest'
import CloseQuest from './CloseQuest'
import { useAuth } from '../../contexts/AuthContext'

const Quest = ({quest}) => {
  const { user } = useAuth()
  const receivers = quest.receivers
    console.log(quest)
  return (
    <>
    Item
    <AddFile item = {quest} type = {"quest"}/>
    <h5>{quest.title}</h5>
    <h5>{quest.description}</h5>
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