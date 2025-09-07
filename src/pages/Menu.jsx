import React, { useState } from "react";
import MenuBanner from "../components/Menu/MenuBanner";
import Menuitem from "../components/menu/MenuItems";
import FoodModal from "../components/Menu/FoodModal";
import { Toaster } from "react-hot-toast";


const Menu = () => {

    const [selectedFood, setSelectedFood] = useState(null)
    
  return (
    <div>
       <Toaster />
      <MenuBanner />
      <Menuitem setSelectedFood={setSelectedFood}/>
      <FoodModal selectedFood={selectedFood} setSelectedFood={setSelectedFood}/>
    </div>
  );
};

export default Menu;
