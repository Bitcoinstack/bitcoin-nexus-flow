
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bitcoin, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initialize text animation for nav links
    const navLinks = document.querySelectorAll('.nav-link span');
    navLinks.forEach((span, index) => {
      span.style.animationDelay = `${index * 0.1}s`;
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-gradient-to-r from-black/80 to-black/70 backdrop-blur-md z-50 px-4 py-3 md:px-8 transition-all duration-300 ${scrolled ? 'shadow-lg shadow-bitcoin/10' : ''}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 animate-fade-in">
          <Bitcoin className="h-8 w-8 text-bitcoin animate-pulse-orange" />
          <span className="text-2xl font-bold text-gradient typing-effect">BTCstack</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
          <Link to="/dashboard">
            <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white font-bold transition-all hover:scale-105">
              Launch App
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md py-4 px-4 animate-fade-in">
          <div className="flex flex-col gap-4">
            <NavLinksMobile setIsMenuOpen={setIsMenuOpen} />
            <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-bitcoin hover:bg-bitcoin-dark text-white font-bold transition-all">
                Launch App
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = () => (
  <>
    <Link to="/" className="nav-link animated-underline text-white hover:text-bitcoin transition-colors">
      <span className="word-animation">Home</span>
    </Link>
    <Link to="/#about" className="nav-link animated-underline text-white hover:text-bitcoin transition-colors">
      <span className="word-animation">About</span>
    </Link>
    <Link to="/#how-it-works" className="nav-link animated-underline text-white hover:text-bitcoin transition-colors">
      <span className="word-animation">How It Works</span>
    </Link>
    <Link to="/#ecosystem" className="nav-link animated-underline text-white hover:text-bitcoin transition-colors">
      <span className="word-animation">Ecosystem</span>
    </Link>
    <Link to="/#business" className="nav-link animated-underline text-white hover:text-bitcoin transition-colors">
      <span className="word-animation">Business</span>
    </Link>
    <Link to="/#documentation" className="nav-link animated-underline text-white hover:text-bitcoin transition-colors">
      <span className="word-animation">Documentation</span>
    </Link>
  </>
);

const NavLinksMobile = ({ setIsMenuOpen }: { setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) => (
  <>
    <Link to="/" className="text-white hover:text-bitcoin transition-colors" onClick={() => setIsMenuOpen(false)}>
      <span className="slide-in-left" style={{display: 'inline-block'}}>Home</span>
    </Link>
    <Link to="/#about" className="text-white hover:text-bitcoin transition-colors" onClick={() => setIsMenuOpen(false)}>
      <span className="slide-in-left" style={{display: 'inline-block', animationDelay: '0.1s'}}>About</span>
    </Link>
    <Link to="/#how-it-works" className="text-white hover:text-bitcoin transition-colors" onClick={() => setIsMenuOpen(false)}>
      <span className="slide-in-left" style={{display: 'inline-block', animationDelay: '0.2s'}}>How It Works</span>
    </Link>
    <Link to="/#ecosystem" className="text-white hover:text-bitcoin transition-colors" onClick={() => setIsMenuOpen(false)}>
      <span className="slide-in-left" style={{display: 'inline-block', animationDelay: '0.3s'}}>Ecosystem</span>
    </Link>
    <Link to="/#business" className="text-white hover:text-bitcoin transition-colors" onClick={() => setIsMenuOpen(false)}>
      <span className="slide-in-left" style={{display: 'inline-block', animationDelay: '0.4s'}}>Business</span>
    </Link>
    <Link to="/#documentation" className="text-white hover:text-bitcoin transition-colors" onClick={() => setIsMenuOpen(false)}>
      <span className="slide-in-left" style={{display: 'inline-block', animationDelay: '0.5s'}}>Documentation</span>
    </Link>
  </>
);

export default Navbar;
