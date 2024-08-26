import React from 'react'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import { getCartItems, getTotalPrice } from '../../redux/cartSlice'

const Cart = () => {
    const cartItems = useSelector(getCartItems)
    const totalPrice = useSelector(getTotalPrice)
    
    


  return (
    <div className='containerCartItems'>
        <button className='closeButton'>X</button>
        <img className="cartIcon" alt='' src="https://img.icons8.com/?size=100&id=3337&format=png&color=000000"/> 
        <p>Continue shopping!</p>
<div className='line'>
       <h3>ITEM(S) TOTAL: ${totalPrice}</h3>
     </div>
     {cartItems.map(cartItem =><CartItem  cartItem={cartItem}/>)}
     
    
     <button className='checkoutButton'>CHECKOUT</button>
    </div>
  )
}

export default Cart
