import React, { useState } from 'react'
import "./product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/usefetch';
import {useDispatch} from "react-redux";
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
  const id = useParams().id
  const [selectedimg,setSelectedimg]=useState("img");
  const [quantity,setQuantity]=useState(1);
    const dispatch= useDispatch()

    const {data,loading}=useFetch(`/products/${id}?populate=*`)
  
  return (
    <div className='product'>
      {loading ? "loading" : (<><div className='left'>
         <div className='images' >
           <img src={process.env.REACT_APP_UPLOAD_URL  + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={(e)=>setSelectedimg("img") }/>
           <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt=""  onClick={(e)=>setSelectedimg("img2") } />
         </div>
         <div className='mainimg'>
         <img src={process.env.REACT_APP_UPLOAD_URL+data?.attributes[selectedimg]?.data?.attributes?.url} alt=""/>
         </div>
      </div>
      <div className='right'>
        <h1>
          {data?.attributes?.title}
        </h1>
        <span className='price'>${data?.attributes?.price}</span>
        <p>{data?.attributes?.desc}</p>
        <div className='quantity'>
            <button onClick={()=>setQuantity(quantity=>(quantity === 1 ? 1 : quantity-1)) }>-</button>
            {quantity}
            <button onClick={()=>setQuantity(quantity=>quantity+1)}>+</button>

        </div>
        <button className='add' onClick={()=>dispatch(addToCart({
          id:data.id,
          title:data.attributes.title,
          desc:data.attributes.desc,
          price:data.attributes.price,
          img:data.attributes.img.data.attributes.url,
          quantity,
        }))}>
            <AddShoppingCartIcon/> Add To Cart
        </button>
        <div className='link'>
            <div className='item'><FavoriteBorderIcon/>Add to Wishlist</div>
            <div className='item'><BalanceIcon/> Add To Compare</div>
        </div>
        <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
      </div></>)}

    </div>
  )
}

export default Product