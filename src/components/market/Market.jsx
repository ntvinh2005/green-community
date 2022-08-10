import React from 'react'
import { useMall } from '../../contexts/MallContext'
import Item from '../shop/Item'
import Topbar from '../others/topbar/Topbar'

const Market = () => {
    const { shop_items } = useMall()
    
  return (
    <>
        <Topbar/>
        <h1>Market</h1>
        {shop_items.map((item) => (
        <div
        key={item.id}
        style={{ maxWidth: "400px" }}
      >
        <Item item={item}></Item>
      </div>
    ))}
    </>
  )
}

export default Market;