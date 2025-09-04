import { useState, useEffect } from "react";
import FoodCard from "../Menu/FoodCard";

const Menu = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch('/public/menu.json')
      .then(res => res.json())
      .then(data => setFoods(data));
  }, []);

  return (
    <div className="px-6 py-12">
      
      {/* Heading */}
      <div className="text-center  mb-16">
        <h2 className="text-3xl mx-auto w-2xs md:text-4xl text-center font-bold heading-font  text-red-600 py-1 rounded-2xl  border-t-2 border-b-2">
          Our Delicious Menu
        </h2>
          <p className="text-yellow-400 text-lg md:text-xl mt-5">
          Experience the Best Flavors in Town
        </p>
      </div>

      {/* Food Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {foods.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
