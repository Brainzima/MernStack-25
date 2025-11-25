import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const {cart} = useContext(CartContext)

  return (
    <>
      <header className="w-full bg-gradient-to-r from-blue-500 via-blue-800 to-blue-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV5wT5R7vumVlrrcVIzxKqoqNYtNmpJqwMIQ&s"
              alt="Logo"
              className="w-10 h-10 rounded-md shadow-md"
            />
            <h1 className="text-2xl font-bold tracking-wide">Amazon</h1>
          </div>

          <nav className="hidden md:flex">
            <ul className="flex gap-8 text-sm font-medium items-center">

              <li className="flex items-center gap-1">
                <i className="fa-solid fa-house text-lg"></i>
                <Link to="/" className="hover:text-gray-200 transition-colors">Home</Link>
              </li>

              <li className="flex items-center gap-1">
                <i className="fa-solid fa-user text-lg"></i>
                <Link to="/about" className="hover:text-gray-200 transition-colors">About</Link>
              </li>

              <li className="flex items-center gap-1">
                <i className="fa-solid fa-box-open text-lg"></i>
                <Link to="/products" className="hover:text-gray-200 transition-colors">Products</Link>
              </li>

              <li className="flex items-center gap-1">
                <i className="fa-solid fa-envelope text-lg"></i>
                <Link to="/contact" className="hover:text-gray-200 transition-colors">Contact</Link>
              </li>

              <li className="flex items-center gap-1">
                <i className="fa-solid fa-cart-shopping text-lg"></i>
                <Link to="/cart" className="hover:text-gray-200 transition-colors">Cart [{cart.length}]</Link>
              </li>

            </ul>
          </nav>

          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-blue-900 py-4 px-5 border-t border-blue-700 transition-all">
            <ul className="flex flex-col gap-4 text-sm font-medium">

              <li className="flex items-center gap-2">
                <i className="fa-solid fa-house text-lg"></i>
                <Link to="/" onClick={() => setOpen(false)}>Home</Link>
              </li>

              <li className="flex items-center gap-2">
                <i className="fa-solid fa-user text-lg"></i>
                <Link to="/about" onClick={() => setOpen(false)}>About</Link>
              </li>

              <li className="flex items-center gap-2">
                <i className="fa-solid fa-box-open text-lg"></i>
                <Link to="/products" onClick={() => setOpen(false)}>Products</Link>
              </li>

              <li className="flex items-center gap-2">
                <i className="fa-solid fa-envelope text-lg"></i>
                <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
              </li>

              <li className="flex items-center gap-2">
                <i className="fa-solid fa-cart-shopping text-lg"></i>
                <Link to="/cart" onClick={() => setOpen(false)}>Cart [0]</Link>
              </li>

            </ul>
          </div>
        )}
      </header>
    </>
  );
}
