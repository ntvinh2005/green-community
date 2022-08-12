import React from 'react'
import AddFile from './AddFile'
import { useAuth } from '../../contexts/AuthContext'
import DeleteButton from '../others/DeleteButton'
import PurchaseRequest from '../market/PurchaseRequest'
import '../market/market.css'

const Item = ({item}) => {
  const { user } = useAuth()

  return (
    <>
      <div className='product-image'>
        <AddFile item = {item} type = {"item"}/>
      </div>
      <p className="product-name">{item.title}</p>
      <p className="product-price">
        <img src={require('./price-tag.png')} alt=""/>
        <span>{item.price}</span>
      </p>

      <p className="product-seller">
        <img src={require('./seller.png')} />
        <span>{item.authorName}</span>
      </p>
      {user.uid === item.author ? (
          <DeleteButton id = {item.id} downloadUrl = {item.url} />
      ) : (
          <PurchaseRequest item = {item} owner = {user.email}/>
      )}
    </>
  )
}

export default Item;