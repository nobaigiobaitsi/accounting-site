import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Brand / Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-brand-dark font-heading text-2xl">
              Alpha Consultants
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="text-neutral-dark hover:text-brand-dark font-medium">
              Home
            </a>
            <a href="#about" className="text-neutral-dark hover:text-brand-dark font-medium">
              About
            </a>
            <a href="#services" className="text-neutral-dark hover:text-brand-dark font-medium">
              Services
            </a>
            <a href="#contact" className="text-neutral-dark hover:text-brand-dark font-medium">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-dark focus:outline-none"
            >
              {isOpen ? (
                <span className="text-2xl">&#10005;</span> // X icon
              ) : (
                <span className="text-2xl">&#9776;</span> // Hamburger
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-md">
          <a href="#home" className="block text-neutral-dark hover:text-brand-dark font-medium">
            Home
          </a>
          <a href="#about" className="block text-neutral-dark hover:text-brand-dark font-medium">
            About
          </a>
          <a href="#services" className="block text-neutral-dark hover:text-brand-dark font-medium">
            Services
          </a>
          <a href="#contact" className="block text-neutral-dark hover:text-brand-dark font-medium">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
