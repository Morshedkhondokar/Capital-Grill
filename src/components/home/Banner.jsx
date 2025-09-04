import React from "react";

const Banner = () => {
  return (
    <div>
      <div
      className="w-full min-h-screen
                 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.6)),url('https://i.pinimg.com/736x/7a/a7/db/7aa7db1d99eb19483d30efc765c954e0.jpg')] 
                 bg-cover bg-center
                 flex justify-center items-center text-center px-2"
    >
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-7xl  font-extrabold heading-font heading-font text-yellow-500 leading-tight 
        animate__animated animate__slideInLeft">
          Taste the <span className="text-red-500">Best <br /> Burgers</span> in Town
        </h1>
        <p className="mt-4 font-bold text-lg md:text-xl text-gray-300 body-font  animate__animated animate__slideInRight">
          Freshly grilled, served hot, and made with love. Capital Grill brings
          you the ultimate flavor experience.
        </p>
        <div className="mt-8 flex  justify-center gap-4 animate__animated animate__zoomIn">
          <button className="btn w-2xs border-none bg-red-600 px-8 text-white  rounded-xl font-semibold shadow-lg hover:bg-red-700 transition">
            See Menu
          </button>
          {/* <button className="btn border border-white bg-transparent px-8 rounded-xl font-semibold text-white hover:bg-white hover:text-black transition ">
            See Menu
          </button> */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
