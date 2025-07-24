import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Make sure to install lucide-react or use any icon library

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      <header className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/Logo.jpg"
            alt="Sharp Gbs Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="font-bold text-xl">Sharp Gbs</div>
        </Link>

        {/* Hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-neutral-500">
            Home
          </Link>
          <Link to="/about" className="hover:text-neutral-500">
            About Us
          </Link>

          <div className="relative group">
            <Link to="/services" className="cursor-pointer hover:text-neutral-500">Services</Link>
            <div
              className="absolute left-0 mt-2 w-56 bg-gray-700 p-2 rounded shadow-lg z-10
                  invisible opacity-0 group-hover:visible group-hover:opacity-100
                  transition-all duration-200"
            >
              <Link
                to="/services/bookKeeping"
                className="block px-2 py-1 hover:bg-gray-600"
              >
                Bookkeeping
              </Link>
              <Link
                to="/services/wordpressManagement"
                className="block px-2 py-1 hover:bg-gray-600"
              >
                WordPress Management
              </Link>
              <Link
                to="/services/dataAnalysis"
                className="block px-2 py-1 hover:bg-gray-600"
              >
                Data Analysis
              </Link>
              <Link
                to="/services/contentWriting"
                className="block px-2 py-1 hover:bg-gray-600"
              >
                Content Writing
              </Link>
              <Link
                to="/services/consultingServices"
                className="block px-2 py-1 hover:bg-gray-600"
              >
                Consulting Services
              </Link>
            </div>
          </div>

          <Link to="/contact" className="hover:text-neutral-500">
            Contact
          </Link>
          <Link to="/privacy" className="hover:text-neutral-500">
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-neutral-500">
            Terms
          </Link>
        </nav>
        <div
          className={`absolute top-full left-0 w-full bg-gray-800 md:hidden overflow-hidden transition-all duration-300 ease-in-out z-10
    ${
      menuOpen ? "max-h-[1000px] py-3 px-4 flex flex-col gap-2" : "max-h-0 px-4"
    }
  `}
        >
          <Link
            to="/"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>

          <Link
            to="/services"
            className="hover:underline"
            onClick={() => {
              setServicesOpen(!servicesOpen);
            }}
          >
            Services
          </Link>
          {servicesOpen && (
            <div className="pl-4 flex flex-col gap-1">
              <Link
                to="/services/bookKeeping"
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Bookkeeping
              </Link>
              <Link
                to="/services/wordpressManagement"
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                WordPress Management
              </Link>
              <Link
                to="/services/dataAnalysis"
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Data Analysis
              </Link>
              <Link
                to="/services/contentWriting"
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Content Writing
              </Link>
              <Link
                to="/services/consultingServices"
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Consulting Services
              </Link>
            </div>
          )}
          <Link
            to="/contact"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/privacy"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className="hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            Terms
          </Link>
        </div>
      </header>

      {/* Marquee Section */}
      <div className="px-6 py-2 max-w-5xl mx-auto leading-relaxed">
        <marquee>
          <p className="my-4 text-2xl font-semibold ">Welcome to Sharp Gbs</p>
        </marquee>
      </div>
    </>
  );
}

export default Header;
