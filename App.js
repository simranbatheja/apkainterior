import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import ProductInfo from './Component2/ProductsInfo';
import Productlist from './Component2/Productlist';
import AddtoCart from './Component2/AddtoCart';
import Checkout from './Component2/image/Checkout';




function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/productdetails' element={<ProductInfo/>}/>
          <Route path='/product' element={<Productlist/>}/>
          <Route path='/cart' element={<AddtoCart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
