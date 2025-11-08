import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full px-8 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-white/30 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-end space-x-6 text-sm font-medium">
        <Link
          to="/"
          className="relative text-white hover:text-gray-800 transition group"
        >
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-800 transition-all group-hover:w-full"></span>
        </Link>

        <Link
          to="/about"
          className="relative text-white hover:text-gray-800 transition group"
        >
          About
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-800 transition-all group-hover:w-full"></span>
        </Link>

        <Link
          to="/contact"
          className="relative text-white hover:text-gray-800 transition group"
        >
          Contact
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-800 transition-all group-hover:w-full"></span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
