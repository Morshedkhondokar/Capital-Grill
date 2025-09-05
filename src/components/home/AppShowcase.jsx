import { TbTruckDelivery } from "react-icons/tb";

const AppShowcase = () => {
  return (
    <section className="text-white my-6 md:py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-12 items-center">
        
        {/* Left Side - Mobile Image */}
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          className="flex justify-center md:justify-end"
        >
          <img
            src="https://templatekit.jegtheme.com/burgry/wp-content/uploads/sites/132/2021/07/food-Clay-01.jpg" // replace with your image path
            alt="Mobile App"
            className="w-64 md:w-96 lg:w-[400px] shadow-2xl rounded-3xl hover:scale-90 transform transition duration-300"
          />
        </div>

        {/* Right Side - Text & Features */}
        <div data-aos="fade-left" data-aos-duration="1200" className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-snug">
            Don’t Worry! <br />
            You Can Order Your Food Just By Phone
          </h2>
          <p className="text-gray-300 md:text-lg max-w-lg">
            Order your favorite meals from anywhere. Enjoy fast delivery, special promos, and delicious food right at your doorstep.
          </p>

          {/* Features */}
          <div className="space-y-4 mt-4 w-96 pr-10">
            <div className="flex items-center bg-[#181818] px-4 py-3 rounded-lg gap-4">
              <span className="bg-yellow-500 p-3 rounded-lg">
               <TbTruckDelivery className="text-xl text-black" />
              </span>
              <div>
                <h3 className="font-bold text-white">Free Delivery</h3>
                <p className="text-gray-400 text-sm">Free delivery - delicious and fast.</p>
              </div>
            </div>

            <div className="flex items-center bg-[#181818] px-4 py-3 rounded-lg gap-4">
              <span className="bg-yellow-500 p-2  rounded-lg size-10">
                <img src="/public/voucher.png" alt=""  className="w-full h-full"/>
              </span>
              <div>
                <h3 className="font-bold text-white">Special Promo</h3>
                <p className="text-gray-400 text-sm">Limited-time tasty offer.</p>
              </div>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex gap-4 mt-6">
            <div className="inline-block">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-12"/>
            </div>
            <div className="inline-block">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-12"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
