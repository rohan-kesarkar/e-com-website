import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage'
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart'
import LoginForm from './Components/LoginForm'
import Payment from './Components/Payment'
import Addres from './Components/Addres'



function App() {
 
  return (
    <>
     <Router>
      <Routes>
      <Route exact path="/" element={<LoginForm />} />
        <Route exact path="/product" element={<HomePage />} />
        <Route exact path="/product/:productId" element={<ProductDetails  />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/cart/address" element={<Addres />} />
      </Routes>
     </Router>
      
    </>
  );
}

export default App;
