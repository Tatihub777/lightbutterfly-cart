import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        
      selectedCategory: 'ALL'
    },
    reducers: {
     filterCategory: (state, action) => {state.selectedCategory = action.payload;}
    }
  })
  
  // Action creators are generated for each case reducer function
  export const getSelectedCategory = state => state.products.selectedCategory;
  export const {filterCategory} = productsSlice.actions;
  export default productsSlice.reducer