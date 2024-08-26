import React from 'react'
import productsData from '../../Data/productsData'
import { removeItemFromCart } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'


const CartItem = ({cartItem}) => {
    
    const products = productsData.find(item=>item.id === cartItem.productID)
    const dispatch = useDispatch()
  return (
    <div className='itemContainer'>
        <h3>
         {products.name}   
        </h3>
        <h5>
         {cartItem.quantity} item(s)
        </h5>
        <h4>Price: ${products.price*cartItem.quantity}</h4>
        
        <span onClick={()=>dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
        <img className="icon" alt='delete' src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"/> 
        </span>
    </div>
  )
}

export default CartItem
