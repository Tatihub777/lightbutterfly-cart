import React from 'react'
import { filterCategory, getSelectedCategory } from '../../redux/productsSlice'
import { useDispatch, useSelector } from 'react-redux';

const Filter = ({category}) => {
    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();
  return (
    <div>
      <p onClick={()=>{dispatch(filterCategory(category))}} 
      className={selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'}>{category}</p>
    </div>
  )
}

export default Filter
