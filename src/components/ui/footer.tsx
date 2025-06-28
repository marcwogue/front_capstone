import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpg'; // Réutilisez le logo

const Footer: React.FC = () => {
  return (
    <footer className="footer p-10 bg-base-300 text-base-content mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Copyright */}
        <aside className="col-span-full md:col-span-1 flex flex-col items-start md:items-center">
          <img src={logo} alt="Little Lemon Logo" className="h-16 mb-2" />
          <p className="text-sm">Little Lemon Restaurant.<br />Providing delicious food since 2023</p>
          <p className="text-sm mt-4">© 2023 Little Lemon. All rights reserved.</p>
        </aside>

        {/* Doormat Navigation */}
        <nav className="flex flex-col gap-2">
          <header className="footer-title">Doormat Navigation</header>
          <NavLink to="/" className="link link-hover">Home</NavLink>
          <NavLink to="/about" className="link link-hover">About</NavLink>
          <NavLink to="/menu" className="link link-hover">Menu</NavLink>
          <NavLink to="/reserve" className="link link-hover">Reservations</NavLink>
          <NavLink to="/order-online" className="link link-hover">Order Online</NavLink>
          <NavLink to="/login" className="link link-hover">Login</NavLink>
        </nav>

        {/* Contact */}
        <nav className="flex flex-col gap-2">
          <header className="footer-title">Contact</header>
          <a href="#" className="link link-hover">123 Main Street, Chicago, IL 60601</a>
          <a href="tel:+1234567890" className="link link-hover">(123) 456-7890</a>
          <a href="mailto:info@littlelemon.com" className="link link-hover">info@littlelemon.com</a>
        </nav>

        {/* Social Media Links */}
        <nav className="flex flex-col gap-2">
          <header className="footer-title">Social Media Links</header>
          {/* Remplacez par de vraies icônes ou des liens */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="link link-hover">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="link link-hover">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="link link-hover">Twitter</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;