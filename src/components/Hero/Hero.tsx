import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      navigate("/products");
    }, 500); // Effect duration before navigation
  };

  return (
    <div className="relative w-full h-screen max-w-[1920px] mx-auto flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <img 
        src="/Images/hero.png" 
        alt="Hero Background" 
        className="absolute inset-0 w-full h-full object-cover rounded-2xl" 
      />
      <div className="absolute bottom-10 left-0 right-0 flex justify-center px-4 sm:px-0">
        <motion.button
          onClick={handleClick}
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl py-3 sm:py-4 relative text-white text-base sm:text-lg font-semibold rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 bg-yellow-500"
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            initial={{ x: "-100%" }}
            animate={isClicked ? { x: "100%" } : {}}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
          <span className="relative z-10">Shop Now</span>
        </motion.button>
      </div>
    </div>
  );
}
