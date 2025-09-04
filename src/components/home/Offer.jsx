import React from "react";

const Offer = () => {
  return (
    <section
      className="relative  text-white py-20 px-6 md:px-12 
                 bg-[url('https://i.pinimg.com/736x/aa/90/2b/aa902b7590d9a89f3bf4f34166d15755.jpg')]
                 bg-cover bg-center bg-fixed"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-6xl font-extrabold text-yellow-500 heading-font">
          🔥 Special Weekend Offer 🔥
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-200">
          Buy <span className="text-red-500 font-bold">1 Burger</span> & Get{" "}
          <span className="text-yellow-400 font-bold">1 Free Drink</span>.  
          Limited Time Only!
        </p>

        <div className="mt-10 flex justify-center gap-4">
          {/* <button className="bg-red-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-red-700 transition">
            Order Now
          </button> */}
          <button className="bg-yellow-500 w-3xs text-black px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-yellow-400 transition">
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offer;
