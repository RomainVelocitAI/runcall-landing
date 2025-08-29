'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="/#"
            className="flex items-center cursor-pointer transition-transform hover:scale-105"
            aria-label="Retour à l'accueil"
          >
            <Image
              src="/logo-transparent.png"
              alt="Runcall"
              width={150}
              height={50}
              className="object-contain"
              priority
            />
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#solution" 
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-cyan-300'
              }`}
            >
              Notre Solution
            </a>
            <a 
              href="#process" 
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-cyan-300'
              }`}
            >
              Comment ça marche
            </a>
            <a 
              href="#pricing" 
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-cyan-300'
              }`}
            >
              Tarifs
            </a>
            <a 
              href="#contact-form" 
              className={`px-6 py-2 rounded-full font-semibold transition-all shadow-lg ${
                isScrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-cyan-500 text-white hover:bg-cyan-600'
              }`}
            >
              Démarrer
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className={`md:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;