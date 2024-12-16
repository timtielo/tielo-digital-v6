import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from './Link';
import { ConsultButton } from './common/ConsultButton';
import { motion } from 'framer-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/logo/tdlogosmall.svg" 
              alt="TD Logo" 
              className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary">
              Tielo Digital
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/diensten">Diensten</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
            <ConsultButton>
              Gratis analyse
            </ConsultButton>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Sluit menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4"
          >
            <nav className="flex flex-col space-y-4 px-4">
              <Link href="/diensten">Diensten</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
              <ConsultButton>
                Gratis analyse
              </ConsultButton>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}