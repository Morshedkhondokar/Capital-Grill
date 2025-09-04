import React from "react";
import { MapPin, Phone, Mail, Clock, Star, Heart, ChefHat } from "lucide-react";

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const locations = [
    { area: "Dhanmondi", address: "Road 27, House 45" },
    { area: "Gulshan", address: "Avenue 11, Plot 23" },
    { area: "Uttara", address: "Sector 7, Road 12" },
  ];

  return (
    <footer className="bg-[#181818] ">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-4xl">🍔</div>
              <div>
                <h3 className="text-2xl font-bold text-red-500 tracking-wider heading-font">
                  CAPITAL GRILL
                </h3>
                <p className="text-xs text-yellow-400 font-semibold tracking-wide">
                  Dhaka's Best Burgers
                </p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Premium quality burgers made with fresh ingredients and authentic
              taste. Serving Dhaka since 2020 with love and passion.
            </p>

            {/* Rating */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-gray-300 text-sm">
                4.8/5 (2,340+ Reviews)
              </span>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition duration-300 transform hover:scale-110"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition duration-300 transform hover:scale-110"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition duration-300 transform hover:scale-110"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition duration-300 transform hover:scale-110"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-red-500 mt-6 mb-2 tracking-wide heading-font">
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300 text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300 text-sm"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300 text-sm"
                >
                  About Us
                </a>
              </li>
               
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-yellow-400 transition duration-300 text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-bold text-red-500 mt-6 mb-2 tracking-wide heading-font">
              OUR SERVICES
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <ChefHat size={14} className="text-yellow-400" />
                <span className="text-gray-300 text-sm">
                  Dine In Restaurant
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <ChefHat size={14} className="text-yellow-400" />
                <span className="text-gray-300 text-sm">Home Delivery</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChefHat size={14} className="text-yellow-400" />
                <span className="text-gray-300 text-sm">Takeaway Orders</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChefHat size={14} className="text-yellow-400" />
                <span className="text-gray-300 text-sm">Catering Service</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChefHat size={14} className="text-yellow-400" />
                <span className="text-gray-300 text-sm">Party Orders</span>
              </li>
              <li className="flex items-center space-x-2">
                <ChefHat size={14} className="text-yellow-400" />
                <span className="text-gray-300 text-sm">Corporate Meals</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-red-500 mt-6 mb-2   heading-font">
              CONTACT INFO
            </h3>

            <div className="flex flex-col md:flex-row justify-center lg:-ml-10  w-[350px]">
              {/* Locations */}
              <div className="space-y-4 mb-6 ">
                {locations.map((location, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <MapPin
                      size={16}
                      className="text-red-500 mt-1 flex-shrink-0"
                    />
                    <div>
                      <p className="text-white font-semibold text-sm">
                        {location.area}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {location.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Phone */}
              <div>
                <div className="flex  space-x-3 mb-4 ">
                  <Phone size={16} className="text-red-500" />
                  <div>
                    <p className="text-white text-sm font-semibold">
                      +880 1711-123456
                    </p>
                    <p className="text-gray-400 text-xs">24/7 Order Hotline</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex  space-x-3 mb-6">
                  <Mail size={16} className="text-red-500" />
                  <div>
                    <p className="text-white text-sm">info@capitalgrill.bd</p>
                    <p className="text-gray-400 text-xs">Customer Support</p>
                  </div>
                </div>
                {/* Hours */}
                <div className="flex items-start space-x-3">
                  <Clock size={16} className="text-red-500 mt-1" />
                  <div>
                    <p className="text-white text-sm font-semibold">
                      Opening Hours
                    </p>
                    <p className="text-gray-400 text-xs">
                      Daily: 11:00 AM - 12:00 AM
                    </p>
                    <p className="text-yellow-400 text-xs font-semibold">
                      Free Delivery Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="border-t border-red-900 mt-12 pt-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3
              className="text-2xl font-bold text-red-500 mb-4 tracking-wide heading-font"
             
            >
              GET SPECIAL OFFERS & UPDATES
            </h3>
            <p
              className="text-gray-400 mb-6 text-sm"
            >
              Subscribe to our newsletter and get 20% off on your first order!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3  border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition duration-300"
               
              />
              <button
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-bold transition duration-300 transform hover:scale-105 tracking-wide"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div> */}
      </div>

      {/* Bottom Footer */}
      <div className=" border-t border-red-900">
        <div className="flex justify-center py-4 items-center space-x-2">
          <p
            className="text-gray-400 text-sm"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            © {currentYear} Capital Grill. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
