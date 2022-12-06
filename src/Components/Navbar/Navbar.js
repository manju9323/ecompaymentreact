import React, { useState } from 'react';
import "./navbar.scss"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { useSelector}from "react-redux"


function Navbar() {
  const [open,setopen]=useState(false)
  const products = useSelector(state=>state.cart.products)

  return (
    <div className='nav'>
      <div className='wrapper'>
        <div className='left'>
          <div className='item'>
            <img src="/img/in.png" alt="india"/>
            <KeyboardArrowDownIcon/>
          </div>
          <div className='item'>
           <span>USD</span>
            <KeyboardArrowDownIcon/>
          </div>
          <div className='item'>
            <Link className="link" to="/products/1">women</Link>
          </div>
          <div className='item'>
            <Link className="link" to="/products/2">men</Link>
          </div>
          <div className='item'>
            <Link className="link" to="/products/3">children</Link>
          </div>
        </div>
        <div className='center'>
          <Link className="link" to="/">MANGOP</Link>
        </div>
        <div className='right'>
         <div className='item'>
          <Link className="link" to="/">Home</Link>
         </div>
         <div className='item'>
          <Link className="link" to="/">About</Link>
         </div>
         <div className='item'>
          <Link className="link" to="/">Contact</Link>
         </div>
         <div className='item'>
          <Link className="link" to="/">Store</Link>
         </div>
         <div className='icons'>
          <SearchIcon/>
          <PersonOutlineOutlinedIcon/>
          <FavoriteBorderOutlinedIcon/>
          <div className='carticon' onClick={()=>{setopen(!open)}}>
            <ShoppingCartOutlinedIcon/>
            <span>{products.length}</span>
          </div>
         </div>
         </div>
      </div>
      {open && <Cart/>}
    </div>
  )
}

export default Navbar