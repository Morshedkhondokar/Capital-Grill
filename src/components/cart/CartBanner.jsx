import React from "react";

const CartBanner = () => {
  return (
    <div className="relative h-[250px] w-screen bg-cover bg-center flex items-center justify-center bg-[url('https://i.pinimg.com/1200x/ab/cd/60/abcd60e626ca9a02ba3c63c1af27ad83.jpg')]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65 "></div>

      {/* Content */}
      <div className="relative text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 drop-shadow-md heading-font tracking-widest animate__animated animate__slideInLeft">
          Your Cart
        </h1>
        <p className="mt-3 text-lg md:text-xl text-gray-200 animate__animated animate__slideInRight">
          Review your items before checkout
        </p>
      </div>
    </div>
  );
};

export default CartBanner;
