import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ logo }) => {
  const location = useLocation();

  const navLinkStyle = (path) =>
    `px-4 py-2 rounded-lg text-sm font-semibold transition duration-200 ${
      location.pathname === path
        ? "bg-white/20 text-white"
        : "text-gray-200 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold tracking-wide">
          {logo || "📘 MyTodo"}
        </div>

        {/* Links */}
        <div className="flex space-x-6">
          <Link to="/" className={navLinkStyle("/")}>
            Home
          </Link>
          <Link to="/about" className={navLinkStyle("/about")}>
            About
          </Link>
          <Link to="/contact" className={navLinkStyle("/contact")}>
            Contact
          </Link>
          <Link to="/todoList" className={navLinkStyle("/contact")}>
            Todos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
