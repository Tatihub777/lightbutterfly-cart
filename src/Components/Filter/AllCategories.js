import React from 'react'
import Filter from './Filter'

const AllCategories = () => {
  return (
    <div className='categories'>
      
      {
        ['ALL', 'SOCKS', 'MITTENS', 'SCARF', 'TOP'].map((category, id) => <Filter key={id} category={category}/>)
      }
     
     
    </div>
  )
}

export default AllCategories
