import { useState, useEffect } from "react";
import FoodCard from "../Menu/FoodCard";

const Menu = ({setSelectedFood}) => {
  const [foods, setFoods] = useState([]);
  const [category, setCategory] = useState("All"); 
  useEffect(() => {
    fetch('/public/menu.json')
      .then(res => res.json())
      .then(data => setFoods(data));
  }, []);
  const filteredFoods = 
   category === "All"
      ? foods
      : foods.filter((item) => item.category === category);

  return (
    <div className="px-6 py-12">
      
      {/* Heading */}
      <div className="text-center  mb-16">
        <h2 data-aos="zoom-out-down" data-aos-duration="1000" className="text-3xl mx-auto w-2xs md:text-4xl text-center font-bold heading-font  text-red-600 py-1 rounded-2xl  border-t-2 border-b-2">
          Our Delicious Menu
        </h2>
          <p data-aos="zoom-out-up" className="text-yellow-400 text-lg md:text-xl mt-5">
          Experience the Best Flavors in Town
        </p>
        {/* category */}
        <div data-aos="zoom-out-up" className="flex justify-center gap-5 max-w-[400px] mx-auto mt-2 border-yellow-500   border-t-2 pt-3">
        <button onClick={()=> setCategory('All')} className={`btn shadow-none  rounded-xl ${category === "All" ? "bg-red-500 border-none text-white " : "border-2 border-red-500 text-red-500  bg-transparent"}`}>All</button>
        <button onClick={()=> setCategory('Burger')} className={`btn shadow-none rounded-xl  ${category === "Burger" ? "bg-red-500 border-none text-white " : "border-2 border-red-500 text-red-500  bg-transparent"}`}>Burger</button>
        <button onClick={()=> setCategory('Drink')} className={`btn shadow-none rounded-xl  ${category === "Drink" ? "bg-red-500 border-none text-white " : "border-2 border-red-500 text-red-500  bg-transparent"}`}>Drink</button>
        <button onClick={()=> setCategory('Dessert')} className={`btn shadow-none rounded-xl  ${category === "Dessert" ? "bg-red-500 border-none text-white  " : "border-2 border-red-500 text-red-500  bg-transparent"}`}>Dessert</button>
      </div>
      </div>
      

      {/* Food Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredFoods.map((item) => (
          <FoodCard key={item.id} item={item} setSelectedFood={setSelectedFood}/>
        ))}
      </div>
    </div>
  );
};

export default Menu;
