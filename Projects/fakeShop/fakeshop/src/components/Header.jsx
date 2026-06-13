import React from "react";
import { Link } from "react-router-dom";
import { FaStore } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="bg-blue-500 flex justify-between p-3">
        <div className="flex gap-3 items-center">
          <FaStore className="text-2xl text-white" />
         <span className="text-white text-xl">
           Fake Store
         </span>
        </div>
        <div className="flex gap-4">
          <Link to={"/"} className="text-white hover:underline">
            Home
          </Link>
          <Link to={"/about"} className="text-white hover:underline">
            About
          </Link>
          <Link to={"/product"} className="text-white hover:underline">
            Product
          </Link>
          <Link to={"/contact-us"} className="text-white hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;