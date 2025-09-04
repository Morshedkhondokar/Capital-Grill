import React from "react";

const Discover = () => {
  return (
    <section className=" bg-[#181818] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Image */}
        <div data-aos="fade-right" data-aos-duration="1200" className="rounded-2xl shadow-lg border-2 border-red-500 overflow-hidden">
          <img
            src="https://cdn.getiryemek.com/products/1738966498784_1000x750.jpeg"
            alt="Delicious Food"
            className="hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Content */}
        <div
          className="space-y-6"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold leading-snug">
            Find Your <span className="text-yellow-500">Best Tasted</span>{" "}
            <br /> Food & Drink <br /> Just in One Place
          </h2>
          <p className="text-gray-300 max-w-lg">
            From sizzling beef burgers to crispy chicken delights, we bring you
            flavors that hit the spot every time. Taste freshness, quality, and
            love — all served hot and fast.
          </p>
          <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-semibold shadow-lg transition duration-300">
            Explore Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Discover;
