import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact';
function App() {
  

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart cartItems={[]} />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />/
      </Router>
    </>
  )
}

export default App
