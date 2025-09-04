import React from "react";

const PopularMenu = () => {
  const items = [
    {
      id: 1,
      name: "Classic Beef Burger",
      price: "$8.99",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOdT3Rz07n7jJ5sQX2M00VEomxQWwYXAQNA&s",
      desc: "Juicy beef patty with fresh lettuce, tomato & house sauce.",
      animation:"fade-right"
    },
    {
      id: 2,
      name: "Cheese Overload Burger",
      price: "$9.99",
      image:
        "https://pbs.twimg.com/media/EMJiICFXsAA3q8v.jpg:large",
      desc: "Loaded with triple cheese layers for true cheese lovers.",
      animation:"fade-up"
    },
    {
      id: 3,
      name: "Crispy Chicken Burger",
      price: "$7.99",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2025/04/Crispiest-buttermilk-fried-chicken-burgers-90854e5.jpg",
      desc: "Golden fried chicken breast with crunchy lettuce & mayo.",
      animation:"fade-down"
    },
    {
      id: 4,
      name: "Spicy Veggie Burger",
      price: "$6.99",
      image:
        "https://www.gardengourmet.be/sites/default/files/recipes/aeead5804e79ff6fb98b2039619c5230_200828_MEDIAMONKS_GG_Spicytarian.jpg",
      desc: "A fiery blend of veggies & spices with tangy sauce.",
      animation:"fade-left"
    },
  ];

  return (
    <section className="md:py-16 px-4 md:px-8">
      <div className="text-center mb-12">
        <h2 data-aos="zoom-out-down" data-aos-duration="1000"
    className="text-4xl md:text-5xl heading-font font-bold text-red-600 heading-font">
          🍔 Popular Menu
        </h2>
        <p data-aos="zoom-out-up" className="mt-4 md:text-lg max-w-2xl mx-auto">
          Discover our most ordered and loved burgers — freshly made with
          premium ingredients and served hot!
        </p>
      </div>

      {/* Grid Items */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div data-aos={item.animation} data-aos-duration="2000">
            <div
          
            key={item.id}
            className="bg-[#181818] hover:bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-105 transform transition duration-300 border-t-4 border-red-500"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-5 flex flex-col justify-between h-44">
              <h3 className="text-xl font-bold md:text-gray-600">{item.name}</h3>
              <p className="text-gray-400 text-sm mt-2 flex-1">{item.desc}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-lg font-bold text-red-600">
                  {item.price}
                </span>
                <button className="bg-red-500 text-white px-4 py-1 rounded-xl hover:bg-red-600 transition">
                  Order
                </button>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
