import React from 'react'
import Product from './Product'
import productsData from '../../Data/productsData'
import { getSelectedCategory } from '../../redux/productsSlice'
import { useSelector } from 'react-redux';

const Products = () => {
    const selectedCategory = useSelector(getSelectedCategory);
  return (
    <div className='container'>
      {productsData
      .filter(dataProduct => {
        if(selectedCategory==='ALL')
        return true;
        return selectedCategory === dataProduct.category;
      })
      .map((dataProduct, id) => <Product key={id} dataProduct={dataProduct}/>)}
    </div>
  )
}

export default Products
