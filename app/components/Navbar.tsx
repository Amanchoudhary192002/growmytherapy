'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-800">Dr. Serena Blake</div>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#services" className="hover:text-blue-600">Services</a></li>
          <li><a href="#faq" className="hover:text-blue-600">FAQ</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>

      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 text-gray-700 font-medium bg-white shadow">
          <li><a href="#" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#services" onClick={toggleMenu}>Services</a></li>
          <li><a href="#faq" onClick={toggleMenu}>FAQ</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      )}
    </header>
  );
}
