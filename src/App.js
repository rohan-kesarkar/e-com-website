import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage'
import ProductDetails from './Components/ProductDetails';



function App() {
 
  return (
    <>
     <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/product/:productId" element={<ProductDetails  />} />
      </Routes>
     </Router>
      
    </>
  );
}

export default App;
