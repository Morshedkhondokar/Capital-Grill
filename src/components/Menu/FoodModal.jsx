import { useContext } from "react";
import CartContext from "../../context/CartContext";

const FoodModal = ({ selectedFood,setSelectedFood}) => {
  const { setCartItems } = useContext(CartContext);

  const handleAddToCart = () => {
    setCartItems((prevItems) => {
      // checking
      const existingItem = prevItems.find(
        (item) => item.id === selectedFood.id
      );

      if (existingItem) {
        // if have this item
        return prevItems.map((item) =>
          item.id === selectedFood.id
            ? { ...item, quantity: item.quantity + selectedFood.quantity }
            : item
        );
      } else {
        // if don't heve this item. return new arr 
        return [...prevItems, selectedFood];
      }
    });
    // modal close
    document.getElementById("food_modal").close();
  };

  // Quantity increase
  const handleQuantityPlus = () => {
    setSelectedFood({ ...selectedFood, quantity: selectedFood.quantity + 1 });
  };

  // Quantity decrease 
  const handleQuantityMinus = () => {
    if (selectedFood.quantity > 1) {
      setSelectedFood({ ...selectedFood, quantity: selectedFood.quantity - 1 });
    }
  };
  return (
    <div>
      {/* modal */}
      <dialog id="food_modal" className="modal">
        <div className="modal-box bg-[#181818] ">
          {/* Close Button */}
          <form method="dialog">
            <button className="btn btn-ghost btn-circle absolute right-1 top-1.5 bg-red-600 text-xl font-bold">
              ✕
            </button>
          </form>

          {/* Food Image */}
          {selectedFood && (
            <img
              src={selectedFood.image}
              alt={selectedFood.name}
              className="w-full h-56  object-cover rounded-lg mb-4"
            />
          )}

          {/* Food Details */}
          <h3 className="font-bold text-xl text-red-500">
            {selectedFood?.name}
          </h3>
          <p className="text-gray-300 mt-2">{selectedFood?.description}</p>
          {/* price and quantity */}
          <div className="flex justify-between items-center">
            {/* priece */}
            <p className="text-yellow-400 font-semibold mt-3">
              Price: {selectedFood?.price} BDT
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={handleQuantityMinus}
                className="btn btn-sm bg-red-600  text-white text-2xl"
              >
                -
              </button>
              {selectedFood?.quantity}
              <button
                onClick={handleQuantityPlus}
                className="btn btn-sm bg-red-600 text-white text-2xl"
              >
                +
              </button>
            </div>
          </div>

          {/* add to cart || Confirm Button */}
          <button
            onClick={handleAddToCart}
            className="btn w-full mt-6 bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold"
          >
            Add to Cart
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default FoodModal;
