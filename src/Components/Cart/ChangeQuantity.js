import React from 'react'

const ChangeQuantity = ({quantity, setQuantity}) => {
    const addQuantity= () => {
        const newQuantity = quantity +1;
        setQuantity(newQuantity)
    }
    const removeQuantity = () => {
        if(quantity<=1) return;
        const newQuantity = quantity -1;
        setQuantity(newQuantity)
    }
  return (
    <div className='quantity-container'>
        <button className='quantityButton' onClick={addQuantity}>+</button>
        <span className='quantityNumber'>{quantity}</span>
        <button  className='quantityButton' onClick={removeQuantity}>-</button>
      
    </div>
  )
}

export default ChangeQuantity
