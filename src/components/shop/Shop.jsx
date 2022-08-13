import React, { useState } from 'react'
import { useAuth } from "../../contexts/AuthContext";
import { database } from "../../firebase"
import { useShop } from "../../contexts/ShopContext"
import { usePurchase } from "../../contexts/PurchaseContext"
import Item from "./Item"
import AcceptButton from "./AcceptButton"
import RejectButton from "./RejectButton"
import Topbar from '../others/topbar/Topbar'
import { useProfile } from '../../contexts/ProfileContext';
import Footer from '../others/footer/Footer';

const Shop = () => {
    const { user } = useAuth()
    const { profile } = useProfile();
    const { shop_items } = useShop()
    const { requests } = usePurchase()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [isGift, setIsGift] = useState(false)
    const [open, setOpen] = useState(false)
    const [price, setPrice] = useState("");
    const handleSubmit = async () => {
        await database.shop_item.add({ 
            title: title,
            description: description,
            url: "",
            author: user.uid,
            authorName: profile.username,
            isGift: isGift,
            price: price, 
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
      <button onClick = {openForm} className = "addButton"> Thêm sản phẩm mới </button>
        
      <div id="myModal" className="modal" style={{display: open ? "block" : "none"}}>
        <div className="new-mission">
          <span className="close-button" onClick={hideForm}>&times;</span>
          <form className = "form-mission">
            <label className = "form-label">Tên sản phẩm: 
              <input className = "form-input form-input-inline" type="text" value={title} onChange={ (event) => setTitle(event.target.value)} required></input>
            </label>

            <label className = "form-label">Giá: 
              <input className = "form-input form-input-inline" value={price} onChange={ (event) => setPrice(event.target.value)} required></input>
            </label>

            <label className = "form-label">Mô tả: </label>
            <textarea className = "form-input form-input-description" value={description} onChange={ (event) => setDescription(event.target.value)} required></textarea>

          </form>
          <div className="action">
            <button className = "action-button-post" onClick={handleSubmit}>Đăng</button>
            <button className = "action-button-cancel" onClick={hideForm}>Huỷ</button>
          </div>
        </div>
      </div>

      <h2>Sản phẩm đã đăng</h2>
      <section className = "product-container">
              {shop_items.map((item) => (
              <div key={item.id} className = "product-card">
                <Item item={item}></Item>
              </div>
              ))}
      </section>

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

      <Footer/>
    </>
  )
}

export default Shop