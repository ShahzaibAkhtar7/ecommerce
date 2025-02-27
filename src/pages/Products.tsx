import { useCart } from "../components/CartContainer/CartContext";

export default function Products() {
  const { addToCart } = useCart();

  const products = [
    { 
      id: 1, 
      name: "Niki1", 
      price: 10, 
      image: "/Images/img1.png", 
      description: "Lorem ipsum dolor sit amet, consectetur.", 
      reviews: [
        { text: "Great quality!", rating: 5 },
        { text: "Loved it!", rating: 4 },
        { text: "Worth the price.", rating: 5 }
      ] 
    },
    { 
      id: 2, 
      name: "Niki2", 
      price: 10, 
      image: "/Images/img2.png", 
      description: "Amet consectetur adipisicing elit. Saepe!", 
      reviews: [
        { text: "Super comfortable!", rating: 4 },
        { text: "Will buy again.", rating: 5 },
        { text: "Amazing product.", rating: 4 }
      ] 
    },
    { 
      id: 3, 
      name: "Niki3", 
      price: 10, 
      image: "/Images/img3.png", 
      description: "Dolor sit amet consectetur adipisicing elit.", 
      reviews: [
        { text: "Highly recommend!", rating: 5 },
        { text: "Good value.", rating: 3 },
        { text: "Nice design!", rating: 4 }
      ] 
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-xl p-4 transition transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold mt-3 text-gray-900">
              {product.name}
            </h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-gray-700 font-bold mt-2">${product.price}</p>
            
            <button
               onClick={() => addToCart(product.name, product.price)}
             className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg w-full 
             transition duration-300 hover:bg-purple-700 
             active:scale-95 active:bg-purple-800 focus:ring focus:ring-purple-300"
             >
             Add to Cart
             </button>


            {/* Reviews Section with Star Ratings */}
            <div className="mt-4">
              <h4 className="font-semibold text-gray-800">Reviews:</h4>
              <ul className="list-disc pl-5 text-gray-600">
                {product.reviews.map((review, index) => (
                  <li key={index} className="text-sm flex items-center gap-2">
                    {Array(review.rating).fill("⭐").join("")} {/* Display stars */}
                    {review.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
