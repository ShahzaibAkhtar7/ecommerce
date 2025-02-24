import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 shadow-lg rounded-2xl mx-4 mt-4">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <h1 className="text-white text-xl font-bold">MyStore</h1>
        <ul className="flex space-x-6 md:flex-row flex-col md:items-center md:space-x-6 w-full md:w-auto">
          <li>
            <Link to="/" className="text-white hover:text-yellow-300 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/products" className="text-white hover:text-green-300 transition duration-300">Products</Link>
          </li>
          <li>
            <Link to="/cart" className="text-white hover:text-blue-300 transition duration-300">Cart</Link>
          </li>
          <li>
            <Link to="/checkout" className="text-white hover:text-orange-300 transition duration-300">Checkout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
