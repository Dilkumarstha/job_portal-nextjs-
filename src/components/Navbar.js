import React from "react";

const Navbar = () => {
  return (
    <div className=" text-white shadow-md shadow-black/30">
      <div className="container mx-auto py-7 px-20 flex justify-between items-center">
        <div className="flex gap-3 text-3xl">
          <img src="logo.png" />
          <span className="font-bold ">Job</span>
        </div>
        <ul className="flex gap-6 justify-center items-center">

    <a href="/"><li className="font-semibold hover:text-teal-400 transition-all duration-300 curosr-pointer">Home</li></a>
    <a href="/"><li className="font-semibold hover:text-teal-400 transition-all duration-300 curosr-pointer">Contact</li></a>
    <a href="/"><li className="font-semibold hover:text-teal-400 transition-all duration-300 curosr-pointer">Service</li></a>
    <a href="/"><li className="font-semibold hover:text-teal-400 transition-all duration-300 curosr-pointer">About</li></a>
            </ul>

            <div className="flex gap-4 justify-center items-center">
                <button className="font-semibold hover:text-teal-400 px-3 py-2 cursor-pointer  transition-all duration-300">Login</button>
                <button className="font-semibold bg-teal-400 px-3 py-2 rounded-md cursor-pointer hover:bg-teal-500 transition-all duration-300">Register</button>
            </div>
      </div>
    </div>
  );
};

export default Navbar;
