import { FaStar } from "react-icons/fa6";

const FoodCard = ({ item }) => {
  return (
    <div className="bg-[#181818] rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
      {/* Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col justify-between h-[220px]">
        <div>
          <h2 className="text-white font-bold text-xl mb-2">{item.name}</h2>
          <p className="text-gray-300 text-sm mb-2">{item.description}</p>
        </div>

        <div className="flex items-center justify-between mt-2">
          {/* Price */}
          <span className="text-yellow-400 font-semibold text-lg">
            {item.price} BDT
          </span>

          {/* Rating */}
          <div className="">
          <p className="text-amber-500 flex justify-center ">  {item.rating}<FaStar  className="text-xl ml-1.5"/></p>
          </div>
        </div>

        {/* Order Button */}
        <button className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg transition duration-300">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
