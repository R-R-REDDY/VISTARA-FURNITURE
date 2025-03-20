import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-5 grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">VISTARA FURNITURES</h2>
          <p className="text-gray-400">
            High-quality furniture for your dream home. Comfort and style combined.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Shop</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-5">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-gray-500">
        &copy; {new Date().getFullYear()} VISTARA FURNITURES. All rights reserved.
      </div>
    </footer>
    </>
  );
};

export default Footer;


