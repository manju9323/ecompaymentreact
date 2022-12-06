import React from 'react';
import "./footer.scss"

function Footer() {
  return (
    <div className='footer'>
       <div className='top'>
          <div className='item'>
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Acessories</span>
            <span>New Arrivals</span>
          </div>
          <div className='item'>
            <h1>Links</h1>
            <span>Faq</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
          <div className='item'>
            <h1>About</h1>
            <span>ndia, officially the Republic of India (Hindi: Bhārat Gaṇarājya), is a country in South Asia. It is the seventh-largest country by area, the second-most </span>
          </div>
          <div className='item'>
          <h1>Contact</h1>
            <span>ndia, officially the Republic of India (Hindi: Bhārat Gaṇarājya), is a country in South Asia. It is the seventh-largest country by area, the second-most </span>
          </div>
       </div>
       <div className='bottom'>
          <div className="left">
            <span className='logo'>ManjGostore</span>
            <span className='copyright'>Copyright 2023. all rights Reserved</span>
          </div>
          <div className="right">
            <img src="/img/payment.png" alt=""></img>
          </div>
       </div>
    </div>
  )
}

export default Footer