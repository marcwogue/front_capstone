import React from "react";
import { NavLink } from "react-router-dom";
import { User, Calendar, Utensils } from "lucide-react";

const Layout: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-primary">Welcome back, John Doe!</h1>
        <p className="text-base-content">Here’s your dashboard overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card: View Reservations */}
        <NavLink to="/my-reservations" className="card bg-base-100 shadow hover:shadow-lg transition">
          <div className="card-body items-center text-center">
            <Calendar className="w-8 h-8 text-primary" />
            <h2 className="card-title">My Reservations</h2>
            <p>View and manage your table bookings.</p>
          </div>
        </NavLink>

        {/* Card: View Menu */}
        <NavLink to="/menu" className="card bg-base-100 shadow hover:shadow-lg transition">
          <div className="card-body items-center text-center">
            <Utensils className="w-8 h-8 text-primary" />
            <h2 className="card-title">Explore Menu</h2>
            <p>Discover our delicious Mediterranean dishes.</p>
          </div>
        </NavLink>

        {/* Card: Edit Profile */}
        <NavLink to="/profile" className="card bg-base-100 shadow hover:shadow-lg transition">
          <div className="card-body items-center text-center">
            <User className="w-8 h-8 text-primary" />
            <h2 className="card-title">My Profile</h2>
            <p>Update your personal information.</p>
          </div>
        </NavLink>
      </div>

      <div className="mt-8">
        <div className="card bg-base-200 shadow">
          <div className="card-body">
            <h2 className="card-title text-secondary">Account Details</h2>
            <p><strong>Email:</strong> johndoe@example.com</p>
            <p><strong>Member Since:</strong> January 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Layout
