import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          BiKart
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-700 hover:text-indigo-600 transition">
            Home
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-indigo-600 transition">
            Products
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-indigo-600 transition">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition">
            Contact
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <div className="relative cursor-pointer">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition" />
            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full">
              2
            </span>
          </div>
          <User className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition cursor-pointer" />

          {/* Mobile Menu */}
          <Menu
            onClick={() => setOpen(!open)}
            className="w-6 h-6 text-gray-700 md:hidden cursor-pointer"
          />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          <Link to="/" className="block text-gray-700 hover:text-indigo-600">
            Home
          </Link>
          <Link to="/products" className="block text-gray-700 hover:text-indigo-600">
            Products
          </Link>
          <Link to="/about" className="block text-gray-700 hover:text-indigo-600">
            About
          </Link>
          <Link to="/contact" className="block text-gray-700 hover:text-indigo-600">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
