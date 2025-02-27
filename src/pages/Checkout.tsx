import { useCart } from "../components/CartContainer/CartContext";

export default function Checkout() {
  const { cart, getCartTotal, getTotalQuantity } = useCart();

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Checkout</h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty</p>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{item.name} x {item.quantity}</span>
                <span>${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="border-t mt-4 pt-4 flex justify-between text-lg font-bold">
            <span>Total Items:</span> <span>{getTotalQuantity()}</span>
          </div>
          <div className="border-t mt-2 pt-2 flex justify-between text-lg font-bold">
            <span>Total Price:</span> <span>${getCartTotal()}</span>
          </div>
          <button className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
}
