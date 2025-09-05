

const CartItems = () => {
    return (
          <div className="px-6 py-12 bg-[#181818] min-h-screen text-white">
      {/* Cart Items Section */}
      <div className="space-y-6 max-w-3xl mx-auto">
        {/* Single Item */}
        <div className="flex items-center justify-between bg-[#202020] p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-4">
            <img
              src="https://i.ibb.co/0jGJ5sN/classic-beef-burger.jpg"
              alt="Classic Beef Burger"
              className="w-20 h-20 object-cover rounded-md"
            />
            <div>
              <h3 className="font-bold text-lg text-yellow-400">
                Classic Beef Burger
              </h3>
              <p className="text-sm text-gray-300">350 BDT</p>
            </div>
          </div>

          {/* Quantity & Remove */}
          <div className="flex items-center gap-3">
            <button className="bg-red-600 px-2 py-1 rounded">-</button>
            <span>1</span>
            <button className="bg-red-600 px-2 py-1 rounded">+</button>
            <button className="ml-4 text-red-500 font-bold">✕</button>
          </div>
        </div>
      </div>

      {/* Cart Summary */}
      <div className="max-w-3xl mx-auto mt-10 bg-[#202020] p-6 rounded-lg shadow-md">
        <div className="flex justify-between text-lg mb-3">
          <span>Subtotal</span>
          <span>710 BDT</span>
        </div>
        <div className="flex justify-between text-lg mb-3">
          <span>Delivery</span>
          <span className="text-green-400">Free</span>
        </div>
        <div className="flex justify-between text-xl font-bold text-yellow-400 mb-6">
          <span>Total</span>
          <span>710 BDT</span>
        </div>
        <button className="w-full bg-gradient-to-r from-red-600 to-yellow-500 py-3 rounded-lg font-bold text-white hover:scale-105 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
    );
};

export default CartItems;