import {
  Truck, 
  Menu, X, 
} from 'lucide-react';
import React from 'react';

function Header({ isMenuOpen, setIsMenuOpen, navigateTo }) { // <-- Add navigateTo here
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleNavClick = (e, page) => {
    e.preventDefault();
    navigateTo(page);
    if (isMenuOpen) toggleMenu();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 shadow-md rounded-b-xl p-4 backdrop-blur">
      <div className="w-full flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src='/logo.png' alt="Logo" className="h-15 w-auto" />
          <span className="text-2xl font-bold text-gray-900"><span className="text-indigo-900">Logistics</span></span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <a href="#" onClick={e => handleNavClick(e, 'home')} className="text-indigo-900 hover:text-pink-500 transition-colors duration-200">Home</a>
          <a href="#" onClick={e => handleNavClick(e, 'service-detail')} className="text-indigo-900 hover:text-pink-500 transition-colors duration-200">Services</a>
          <a href="#" onClick={e => handleNavClick(e, 'quote')} className="text-indigo-900 hover:text-pink-500 transition-colors duration-200">Get a Quote</a>
          <a href="#" onClick={e => handleNavClick(e, 'about')} className="text-indigo-900 hover:text-pink-500 transition-colors duration-200">About Us</a>
          <a href="#" onClick={e => handleNavClick(e, 'contact')} className="text-indigo-900 hover:text-pink-500 transition-colors duration-200">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors duration-200">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden mt-4 bg-white p-4 rounded-b-xl shadow-lg`}>
        <nav className="flex flex-col space-y-4 text-lg">
          <a href="#" onClick={e => handleNavClick(e, 'Home')} className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">Home</a>
          <a href="#" onClick={e => handleNavClick(e, 'service-detail')} className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">Services</a>
          <a href="#" onClick={e => handleNavClick(e, 'quote')} className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">Get a Quote</a>
          <a href="#" onClick={e => handleNavClick(e, 'about')} className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">About Us</a>
          <a href="#" onClick={e => handleNavClick(e, 'contact')} className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;