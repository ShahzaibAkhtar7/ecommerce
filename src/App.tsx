import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="flex flex-col min-h-screen"> {/* Ensures the full height of the page */}
      <Router>
        <Navbar />
        <main className="flex-grow"> {/* Pushes footer to the bottom */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer /> {/* Footer stays at the bottom */}
      </Router>
    </div>
  );
}

export default App;
