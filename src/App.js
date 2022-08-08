import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage'
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart'



function App() {
 
  return (
    <>
     <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/product/:productId" element={<ProductDetails  />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
     </Router>
      
    </>
  );
}

export default App;
