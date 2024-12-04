import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Sprout, Info, Phone, LogOut } from 'lucide-react';
import { useUserStore } from '../store/userStore';

export const Navbar = () => {
  const { logout } = useUserStore();

  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">AgriGuide</Link>
        <div className="flex gap-6">
          <Link to="/" className="flex items-center gap-2 hover:text-green-200">
            <Home size={20} />
            <span>Home</span>
          </Link>
          <Link to="/basic-crops" className="flex items-center gap-2 hover:text-green-200">
            <Sprout size={20} />
            <span>Basic Crops</span>
          </Link>
          <Link to="/about" className="flex items-center gap-2 hover:text-green-200">
            <Info size={20} />
            <span>About</span>
          </Link>
          <Link to="/contact" className="flex items-center gap-2 hover:text-green-200">
            <Phone size={20} />
            <span>Contact</span>
          </Link>
          <button
            onClick={logout}
            className="flex items-center gap-2 hover:text-green-200"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};