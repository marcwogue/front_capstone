import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className=" grid grid-cols-2 gap-3 text-xl md:text-3xl bg-primary shadow p-4">
     <div className="py-10 md:py-32  col-span-1">
            <div className="flex items-start justify-between">

        {/* Center: Logo + Text */}
        <div className="flex flex-col items-start md:items-center text-center max-w-md mx-auto">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold capitalize text-warning">Little Lemon</span>
          </div>
          <span className="text-sm text-base-content">Chicago</span>
          <p className="mt-2 text-left md:text-center text-base text-base-content">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <NavLink to="/register" className="btn btn-secondary mt-3">
            Reserve a table
          </NavLink>
        </div>


        </div> 
      </div> 
      <img src="mains.jpg" alt="little" className="rounded-3xl " />
    </header>
  );
};

export default Header;
