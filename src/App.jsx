import React from 'react'
import './App.css'
import { useState } from 'react';


import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Contact from './components/contact';
import Quote from './components/quote';
import ServiceDetail from './components/service-detail';
import AboutUs from './components/about';
import GetAQuote from './components/quote';

// Main App component
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home navigateTo={navigateTo} />;
      case 'contact':
        return <Contact navigateTo={navigateTo} />;
      case 'service-detail':
        return <ServiceDetail navigateTo={navigateTo} />;
      case 'about':
        return <AboutUs navigateTo={navigateTo} />;
      case 'quote':
        return <GetAQuote navigateTo={navigateTo} />;
      default:
        return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="w-full text-gray-800 font-sans antialiased">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} navigateTo={navigateTo} />
      <main className="mt-24">
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  );
}


