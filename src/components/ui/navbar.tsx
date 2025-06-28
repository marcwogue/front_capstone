import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../context/cardContext";

const Navbar: React.FC = () => {
    const {cart} = useCart()
  return (
    <div className="navbar bg-base-100 shadow">
      {/* Start: Logo + Burger */}
      <div className="navbar-start">
        {/* Mobile Burger */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/" className="text-base-content">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" className="text-base-content">
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className="text-base-content">
                Reserve
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-base-content">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 btn btn-ghost normal-case text-xl text-primary">
          <img src="/logo.jpg" alt="Logo" className="w-[10rem] h-[4rem]" />
        </NavLink>
      </div>

      {/* Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : "text-base-content"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : "text-base-content"
              }
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : "text-base-content"
              }
            >
              Reserve
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-primary font-semibold" : "text-base-content"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* End: Cart */}
      <div className="navbar-end">
        <NavLink to="/cart" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <ShoppingCart className="w-6 h-6 text-base-content" />
            <span className="badge badge-sm indicator-item bg-primary-content text-primary">
              {cart.length}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
