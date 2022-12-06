import React from 'react';
import "./Cart.scss"
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {useDispatch, useSelector}from "react-redux"
import { removeItem, resetCart } from '../../redux/cartReducer';
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from '../../makerequest';

const Cart = () => {
  
  const products = useSelector((state)=>state.cart.products)
  const dispatch=useDispatch();

  const totalprice=()=>{
    let total=0
    products.forEach((item)=>{
    total+=item.quantity*item.price});
    return total.toFixed(2)
  }


  const stripePromise=loadStripe("pk_test_51MBhyOSEO3iGTW6YBj4Ew020cgTh1NbRuWrJ8QJwDS9lHhickRiH80z7a3hjYqmRJtteEpAzLxRHmVY6VEI9TpDW00ivE4rJt1")
  


  const handlepayment =async ()=>{
     try{
       const stripe =await stripePromise;
      


       console.log(products)
      const res =await makeRequest.post("/orders",{
        products
       });
       console.log(res.data)
       await stripe.redirectToCheckout({
        sessionId:res.data.stripeSession.id,
       })
    }
    catch(err){
      console.log(err)
    }

  }

  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {products?.map(item=>(
        <div className='item' key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL+item.img} alt=""/>
          <div className='details'>
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0,100)}</p>
            <div className='price'>{item.quantity} x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className='delete' onClick={()=>dispatch(removeItem(item.id))}/>
        </div>
      ))} 
      <div className='total'>
        <span>SUBTOTAL</span>
        <span>${totalprice()}</span>
      </div>
      <button onClick={handlepayment}>PROCEED TO CHECKOUT</button>
     <span className='reset' onClick={()=>dispatch(resetCart())}>Reset Cart</span>

    </div>
  )
}

export default Cart