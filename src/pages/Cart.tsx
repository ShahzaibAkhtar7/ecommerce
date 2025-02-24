
export default function Cart({ cartItems }: { cartItems: string[] }) {
  return (
    <div className="max-w-[800px] mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item, index) => (
            <li key={index} className="p-4 bg-white shadow-md rounded-lg">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
