import React from "react";

const CheckoutModal = ({ isOpen, onClose, total }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#181818] p-6 rounded-2xl w-96 text-center shadow-lg shadow-red-500">
        <h2 className="text-2xl font-bold text-green-400 mb-3">
          Payment Successful!
        </h2>
        <p className="text-yellow-400 text-xl mb-2">Total: {total} BDT</p>
        <p className="text-gray-300 mb-6">Enjoy your food 🍔🍕🍟</p>
        <button
          onClick={onClose}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CheckoutModal;
