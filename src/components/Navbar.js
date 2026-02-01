// import NavLinks from "@/constants/navlinks";
// import { HOME_ROUTE } from "@/constants/routes";
// import React from "react";

// const Navbar = () => {
//   return (
//     <div className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
//       <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-3 md:px-6 lg:flex-nowrap lg:gap-8 lg:px-8">
//         <a href={HOME_ROUTE}>
//           <div className="flex items-center gap-2 text-xl font-bold text-gray-900 transition-colors hover:text-blue-600 md:text-2xl">
//             <img className="w-auto h-10" src="JobPortal.png" alt="Job Portal Logo" />
//             <span className="font-bold">Job Portal</span>
//           </div>
//         </a>

//         <ul className="order-3 flex w-full flex-wrap items-center justify-center gap-4 md:gap-6 lg:order-2 lg:w-auto lg:flex-1">
//           {NavLinks.map((navlink, index) => (
//             <li key={navlink.route || index}>
//               <a
//                 href={navlink.route}
//                 className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 md:text-base"
//               >
//                 {navlink.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <div className="order-2 flex gap-4 justify-center items-center lg:order-3">
//           <button className="font-semibold hover:text-teal-400 px-3 py-2 cursor-pointer transition-all duration-300">
//             Login
//           </button>
//           <button className="font-semibold bg-teal-400 px-3 py-2 rounded-md cursor-pointer hover:bg-teal-500 transition-all duration-300">
//             Register
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import NavLinks from "@/constants/navlinks";
import { HOME_ROUTE } from "@/constants/routes";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full  bg-black text-white shadow-sm">
      <div className="container mx-auto px-4 py-3 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href={HOME_ROUTE}>
            <div className="flex items-center gap-2 text-xl font-bold  transition-colors hover:text-blue-600 md:text-2xl">
              <img className="w-auto h-8 md:h-10" src="JobPortal.png" alt="Job Portal Logo" />
              <span className="font-bold">Job Portal</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            {NavLinks.map((navlink, index) => (
              <li key={navlink.route || index}>
                <a
                  href={navlink.route}
                  className="text-base font-medium  transition-colors hover:text-teal-500"
                >
                  {navlink.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex gap-4 items-center">
            <button className="font-semibold hover:text-teal-400 px-4 py-2 cursor-pointer transition-all duration-300">
              Login
            </button>
            <button className="font-semibold bg-teal-400 px-4 py-2 rounded-md cursor-pointer hover:bg-teal-500 transition-all duration-300 text-white">
              Register
            </button>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col items-center justify-center gap-1.5 rounded-md p-2 text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {/* Mobile Navigation Links */}
          <ul className="flex flex-col gap-1 py-4 border-t border-gray-200 mt-3">
            {NavLinks.map((navlink, index) => (
              <li key={navlink.route || index}>
                <a
                  href={navlink.route}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-md px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-teal-500"
                >
                  {navlink.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Auth Buttons */}
          <div className="flex flex-col gap-3 pb-4">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="w-full font-semibold border border-gray-300 px-4 py-3 rounded-md cursor-pointer hover:bg-gray-50 transition-all duration-300"
            >
              Login
            </button>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="w-full font-semibold bg-teal-400 px-4 py-3 rounded-md cursor-pointer hover:bg-teal-500 transition-all duration-300 text-white"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// responsive ///////////////////

// import NavLinks from "@/constants/navlinks";
// import { HOME_ROUTE } from "@/constants/routes";

// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
//       <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-3 md:px-6 lg:flex-nowrap lg:gap-8 lg:px-8">
//         {/* Logo */}
//         <a
//           href={HOME_ROUTE}
//           className="flex-shrink-0 text-xl font-bold text-gray-900 transition-colors hover:text-blue-600 md:text-2xl"
//         >
//           Job Portal
//         </a>

//         {/* Navigation Links */}
//         <ul className="order-3 flex w-full flex-wrap items-center justify-center gap-4 md:gap-6 lg:order-2 lg:w-auto lg:flex-1">
//           {NavLinks.map((navlink, index) => (
//             <li key={navlink.href}>
//               <a
//                 href={navlink.href}
//                 className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 md:text-base"
//               >
//                 {navlink.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Auth Buttons */}
//         <div className="order-2 flex flex-shrink-0 items-center gap-2 md:gap-3 lg:order-3">
//           <a
//             href="/login"
//             className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 md:px-4 md:py-2 md:text-base"
//           >
//             Login
//           </a>
//           <a
//             href="/register"
//             className="rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition-all hover:bg-blue-700 md:px-4 md:py-2 md:text-base"
//           >
//             Register
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
