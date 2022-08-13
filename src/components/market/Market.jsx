import React from 'react'
import { useMall } from '../../contexts/MallContext'
import Item from '../shop/Item'
import Topbar from '../others/topbar/Topbar'
import "./market.css"
import Footer from '../others/footer/Footer'

const Market = () => {
  const { shop_items } = useMall()
  
  return (
    <>
        <Topbar/>
        <main className = "main">
          <h2>Gian Hàng</h2>
          <section>
            <p className="filter-header">Bộ lọc tìm kiếm</p>
            <p className="filter-subheader">Thể loại</p>
            <div className="choice-container">
              <label htmlFor="product-type-0" className="radio-label">
                <input
                  type="radio"
                  name="product-type"
                  id="product-type-0"
                  className="radio-input"
                />
                <div className="radio-radio"></div>
                Đồ gia dụng
              </label>
              <label htmlFor="product-type-1" className="radio-label">
                <input
                  type="radio"
                  name="product-type"
                  id="product-type-1"
                  className="radio-input"
                />
                <div className="radio-radio"></div>
                Đồ điện tử
              </label>
              <label htmlFor="product-type-2" className="radio-label">
                <input
                  type="radio"
                  name="product-type"
                  id="product-type-2"
                  className="radio-input"
                />
                <div className="radio-radio"></div>
                Sách báo
              </label>
            </div>
            <p className="filter-subheader">Giá thành</p>
            <div className="choice-container">
              <label htmlFor="product-price-0" className="radio-label">
                <input
                  type="radio"
                  name="product-price"
                  id="product-price-0"
                  className="radio-input"
                />
                <div className="radio-radio"></div>
                Miễn phí
              </label>
              <label htmlFor="product-price-1" className="radio-label">
                <input
                  type="radio"
                  name="product-price"
                  id="product-price-1"
                  className="radio-input"
                />
                <div className="radio-radio"></div>
                1 - 10 điểm
              </label>
              <label htmlFor="product-price-2" className="radio-label">
                <input
                  type="radio"
                  name="product-price"
                  id="product-price-2"
                  className="radio-input"
                />
                <div className="radio-radio"></div>
                10 - 100 điểm
              </label>
              <label htmlFor="product-price-2" className="radio-label">
                <input
                  type="radio"
                  name="product-price"
                  id="product-price-2"
                  className="radio-input"
                />
                <div className="radio-radio"></div>
                100+ điểm
              </label>
            </div>
          </section>
          <section className = "product-container">
            {shop_items.map((item) => (
            <div key={item.id} className = "product-card">
              <Item item={item}></Item>
            </div>
            ))}
          </section>
        </main>

        <Footer/>
    </>
  )
}

export default Market;