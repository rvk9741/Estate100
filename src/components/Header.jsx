import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-slate-200 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
          <Link to="/">
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap cursor-pointer">
              <span className="text-slate-500">Estate</span>
              <span className="text-slate-700">100</span>
            </h1>
          </Link>
          <form className="bg-slate-100 p-3 rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none focus:outline-none w-24 sm:w-64"
            />
            <FaSearch className="text-slate-600 cursor-pointer" />
          </form>
          <ul className="flex gap-4 cursor-pointer">
            <Link to="/">
              <li className="hidden sm:inline">Home</li>
            </Link>
            <Link to="/about">
              <li className="hidden sm:inline">About</li>
            </Link>
            <Link to="/sign-in">
              <li>Login</li>
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
