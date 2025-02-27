import { useCart } from "../components/CartContainer/CartContext";

export default function Cart() {
  const { cart } = useCart(); // Get cart items from context

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg">No items in cart</p>
      ) : (
        <ul className="bg-white shadow-md rounded-lg p-6 w-96">
          {cart.map((item, index) => (
            <li key={index} className="text-lg font-medium text-gray-800 border-b last:border-none py-2">
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
