import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaMinusCircle, FaPlusCircle, FaRunning } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Link } from "react-router";

const CartItems = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  // Quantity Increase
  const handleQuantityPlus = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleQuantityMinus = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove Item
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate Subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="px-6 py-12 md:py-20 text-white">
      {/* Cart Items Section */}
      {cartItems.length === 0 ? (
        <div className="text-center py-12 flex flex-col justify-center items-center">
          {/* Empty Cart Message */}
          <div className="text-gray-400 text-2xl mb-6 flex gap-2 ">
            Your cart is empty{" "}
            <p className="animate__animated animate__pulse animate__infinite">
              😔
            </p>
          </div>

          {/* Illustration */}
          <div className="max-w-[550px] max-h-96 mx-auto mb-6">
            <img
              className="w-full h-full object-contain"
              src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-svg-png-download-1800917.png"
              alt="Empty Cart"
            />
          </div>

          {/* Call to Action */}
          <p className="text-yellow-400 text-lg mb-4">
            Explore our delicious menu and add your favorite items!
          </p>
          <Link to='/menu'>
            <button className="bg-red-600 cursor-pointer flex gap-2 justify-center items-center hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 overflow-hidden">
            Go to Menu <FaRunning  className="text-xl"/>
          </button>
          </Link>
        </div>
      ) : (
        <div className="space-y-6 max-w-3xl mx-auto ">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="relative flex items-center justify-between bg-[#202020] p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <h3 className="font-bold text-[14px] md:text-xl text-yellow-400">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-300">{item.price} BDT</p>
                </div>
              </div>

              {/* Quantity & Remove */}
              <div className="flex items-center gap-3 bg-black rounded-2xl overflow-hidden mt-9 ">
                <button
                  onClick={() => handleQuantityMinus(item.id)}
                  className="bg-red-600 px-2 py-1 rounded cursor-pointer"
                >
                  {item.quantity === 1 ? (
                    <MdOutlineDeleteForever />
                  ) : (
                    <FaMinusCircle />
                  )}
                </button>
                {/* total quantity */}
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleQuantityPlus(item.id)}
                  className="bg-red-600 px-2 py-1 rounded cursor-pointer"
                >
                  <FaPlusCircle />
                </button>
              </div>
              {/* remove from cart */}
              <button
                onClick={() => handleRemoveItem(item.id)}
                className=" text-red-500 font-bold absolute top-2 right-2 cursor-pointer"
              >
                <IoCloseCircleSharp className="text-2xl" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Cart Summary */}
      {cartItems.length > 0 && (
        <div className="max-w-3xl mx-auto mt-10 bg-[#202020] p-6 rounded-lg shadow-md">
          <div className="flex justify-between text-lg mb-3">
            <span>Delivery</span>
            <span className="text-green-400">Free</span>
          </div>
          <div className="flex justify-between text-xl font-bold text-yellow-400 mb-6">
            <span>Total</span>
            <span>{subtotal} BDT</span>
          </div>
          <button className="cursor-pointer text-xl w-full bg-gradient-to-r from-red-600 to-yellow-500 py-3 rounded-lg font-bold text-white hover:scale-90 transition ease-in-out">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartItems;
