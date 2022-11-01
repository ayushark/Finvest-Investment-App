import React from "react";
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <header className="text-gray-600 body-font bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" >
        <NavLink to="/"  className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-700 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-2xl font-bold text-black ">Finvest</span>
    </NavLink>
          
        </NavLink>
        <nav className="md:ml-auto flex flex-wrap items-center  justify-center">

          { <NavLink to="/home" className="mr-5 text-black font-semibold hover:text-blue-400">Home</NavLink>}
          <NavLink to="#" className="mr-5 text-black font-semibold hover:text-blue-400">About</NavLink>
          <NavLink to="#" className="mr-5 text-black font-semibold hover:text-blue-400">Contact</NavLink>
        </nav>
      </div>
    </header>
 
  );
};

export default Navbar;
