import { useState,useContext } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import AuthContext from '../context/AuthContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useContext(AuthContext)

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className="font-semibold md:text-xl hover:text-yellow-300 transition-colors"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className="font-semibold md:text-xl hover:text-yellow-300 transition-colors"
        >
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/cart"
          className="font-semibold md:text-xl hover:text-yellow-300 transition-colors"
        >
          Cart
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className="font-semibold md:text-xl hover:text-yellow-300 transition-colors"
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="absolute px-2 py-3 flex justify-between items-center h-16 bg-transparent  top-0  w-full z-50 max-w-7xl ">
      {/* logo & bars */}
      <div className="flex gap-2 justify-center items-center">
        {/* menu bar */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoClose className="text-xl border" /> : <FaBars className="text-xl" />}
          </button>
        </div>
        {/* logo */}
        <h1 className="text-2xl md:text-5xl font-bold heading-font  text-red-500">
          🍔 Capital Grill
        </h1>
      </div>
      {/* nav Links */}
      <div className="hidden lg:block">
        <ul className="flex">{links}</ul>
      </div>
      {/* login */}
      <div>
        {
          user ? <div className="size-8 bg-amber-500 rounded-2xl"></div> : <Link to='/login'>
          <button className="btn bg-red-500 px-3 py-1 rounded-xl text-white border-none shadow-none">
          Login
        </button>
        </Link>
        }
      </div>
      {/* mobile nav links design */}
      <div
        className={`absolute top-16 left-0 bg-[#181818] w-1/2 p-2 rounded-br-2xl lg:hidden z-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col justify-center items-center space-y-3 ">
            {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
