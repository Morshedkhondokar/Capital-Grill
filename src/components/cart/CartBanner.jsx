import React from "react";

const CartBanner = () => {
  return (
    <div className="relative h-[300px] w-screen bg-cover bg-center flex items-center justify-center bg-[url('https://i.pinimg.com/736x/88/05/ee/8805ee77f5d2aafd43db7c214c3dcd43.jpg')]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65 "></div>

      {/* Content */}
      <div className="relative text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 drop-shadow-md heading-font tracking-widest animate__animated animate__slideInLeft">
          Your Cart
        </h1>
        <p className="mt-3 text-xl md:text-2xl text-gray-200 animate__animated animate__slideInRight">
          Review your items before checkout
        </p>
      </div>
    </div>
  );
};

export default CartBanner;
