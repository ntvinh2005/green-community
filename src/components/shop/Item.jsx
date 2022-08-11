import React from 'react'
import AddFile from './AddFile'
import { useAuth } from '../../contexts/AuthContext'
import DeleteButton from '../others/DeleteButton'
import PurchaseRequest from '../market/PurchaseRequest'

const Item = ({item}) => {
    const { user } = useAuth()

  return (
    <>
    Item
    <AddFile item = {item} type = {"item"}/>
    <h5>{item.title}</h5>
    <h5>{item.description}</h5>
    {user.uid === item.author ? (
        <DeleteButton id = {item.id} downloadUrl = {item.url} />
    ) : (
        <PurchaseRequest item = {item} owner = {user.email}/>
    )}
    </>
  )
}

export default Item