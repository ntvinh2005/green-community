import React, { useState } from 'react'
import { useAuth } from "../../contexts/AuthContext";
import { database } from "../../firebase"
import { useShop } from "../../contexts/ShopContext"
import { usePurchase } from "../../contexts/PurchaseContext"
import { useProfile } from '../../contexts/ProfileContext';
import Item from "./Item"
import AcceptButton from "./AcceptButton"
import RejectButton from "./RejectButton"
import Topbar from '../others/topbar/Topbar'

const Shop = () => {
    const { user } = useAuth()
    const { shop_items } = useShop()
    const { requests } = usePurchase()
    const {profile} = useProfile()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [isGift, setIsGift] = useState(false)
    const [open, setOpen] = useState(false)
    const handleSubmit = async () => {
        await database.shop_item.add({ 
            title: title,
            description: description,
            url: "",
            author: user.uid,
            isGift: isGift
         })
         if (isGift) {
            const current_score = profile.point
            await database.profile.doc(profile.id).update({
                point: current_score + 2
            })
         } 
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
    <h1>WELCOME TO SHOP</h1>
    
    { open ? 
    (<div>
        <div>
            <label>Name of item: </label>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} required></input>
        </div>
        <div>
            <label>Description of item: </label>
            <textarea value={description} onChange={(event) => setDescription(event.target.value)} required></textarea>
        </div>
        <div>
            <input type="checkbox" onChange={(event) => setIsGift(event.target.checked)}></input>Is this a gift for members who have high green point
        </div>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={hideForm}>Cancel</button>
    </div>) : (<button onClick = {openForm}> + </button>)
    }
    <hr></hr>
    <h1>Shop Item</h1>
    {shop_items.map((item) => (
        <div
        key={item.id}
        style={{ maxWidth: "400px" }}
      >
        <Item item={item}></Item>
      </div>
    ))}
    <hr></hr>
    <h2>Purchase Request</h2>
    {requests.map((request) => (
        <div
        key={request.id}
        style={{ maxWidth: "400px" }}
      >
        <img src={request.item.url} alt=""></img>
        <h4>{request.item.title}</h4>
        <h5>{request.item.description}</h5>
        <h5>{request.custommer.email}</h5>
        <h5>{request.place}</h5>
        <h5>{request.status}</h5>
        <AcceptButton request = {request}/>
        <RejectButton request = {request}/>
      </div>
    ))}
    </>
  )
}

export default Shop