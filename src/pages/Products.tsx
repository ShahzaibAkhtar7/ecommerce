import { useState } from "react";

export default function Products() {
  const [cart, setCart] = useState<string[]>([]);

  const products = [
    { id: 1, name: "Niki1", price: "$10", image: "/Images/img1.png" },
    { id: 2, name: "Niki2", price: "$10", image: "/Images/img2.png" },
    { id: 3, name: "Niki3", price: "$10", image: "/Images/img3.png" },
  ];

  const addToCart = (productName: string) => {
    setCart([...cart, productName]);
  };

  return (
    <div className="max-w-[1200px] mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[300px] object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button
              onClick={() => addToCart(product.name)}
              className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 w-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
