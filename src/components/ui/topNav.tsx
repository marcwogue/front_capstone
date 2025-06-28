import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/logo.jpg'; 

const TopNav: React.FC = () => {
  return (
    <nav className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex-1">
          <NavLink to="/" className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="Little Lemon Logo" className="h-8 mr-2" />
            Little Lemon
          </NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 hidden md:flex">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/reserve">Reservations</NavLink></li>
            <li><NavLink to="/order-online">Order Online</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </ul>
          {/* Mobile dropdown / drawer button */}
          <div className="md:hidden">
            <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            {/* DaisyUI Drawer (requires App.tsx to have a Drawer structure) */}
            {/* For simplicity here, we'll just show the button. For a full drawer, check DaisyUI docs. */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;