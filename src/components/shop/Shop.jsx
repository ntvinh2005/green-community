import React, { useState } from 'react'
import { useAuth } from "../../contexts/AuthContext";
import { database } from "../../firebase"
import { useShop } from "../../contexts/ShopContext"
import { usePurchase } from "../../contexts/PurchaseContext"
import Item from "./Item"
import AcceptButton from "./AcceptButton"
import RejectButton from "./RejectButton"

const Shop = () => {
    const { user } = useAuth()
    const { shop_items } = useShop()
    const { requests } = usePurchase()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [open, setOpen] = useState(false)
    const handleSubmit = async () => {
        await database.shop_item.add({ 
            title: title,
            description: description,
            url: "",
            author: user.uid
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