import React, { useState } from 'react'
import ChangeQuantity from '../Cart/ChangeQuantity';
import { addItemToCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';


const Product = ({dataProduct}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()
  return (
   
     <div className='singleProduct'>
        <img className='productImage' src={`${dataProduct.img}.jpg`} alt="" />
    <h2>{dataProduct.name}</h2> 
    
    
    <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
    <h3>${dataProduct.price}</h3>
    <button className='addToCartButton' onClick={()=>{dispatch(addItemToCart({dataProduct, quantity}))}}>ADD TO CART</button>
     </div>
    
  )
}

export default Product;
