
import './App.css';
import Cart from './Components/Cart/Cart';

import Navbar from './Components/Navbar/Navbar';
import Products from './Components/ProductsComponents/Products';


function App() {
  return (
    <div className="App">

      <Navbar />
      
     
      <div>
        <div className='containerApp'>
          
        <div className='containerApp-products'>
        <Products />
        </div>
        <div className='containerApp-cart'>
        <Cart />  
        </div>   
        </div>
        
        
       
       <div>
  
</div>
        
          
        </div>
       
     
    </div>
  );
}

export default App;
