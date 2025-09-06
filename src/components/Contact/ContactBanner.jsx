import React from "react";

const ContactBanner = () => {
  return (
    <section className="relative bg-gradient-to-b from-black to-red-500 text-white py-20">
      {/* Overlay for effect */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative  mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl text-red-500 font-bold mb-4 heading-font tracking-widest animate__animated animate__fadeInDown">
          Contact Us
        </h1>
      </div>

      {/* Decorative shapes  */}
      <svg 
  className="absolute bottom-0 left-0 w-full h-20 text-white " 
  preserveAspectRatio="none" 
  viewBox="0 0 1440 320"
>
  <path 
    fill="currentColor" 
    d="M0,160L60,149.3C120,139,240,117,360,112C480,107,600,117,720,149.3C840,181,960,235,1080,229.3C1200,224,1320,160,1380,128L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
  >
  </path>
</svg>
    </section>
  );
};

export default ContactBanner;
