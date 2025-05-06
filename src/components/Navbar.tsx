
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bitcoin, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-black/80 to-black/70 backdrop-blur-md z-50 px-4 py-3 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 animate-fade-in">
          <Bitcoin className="h-8 w-8 text-bitcoin" />
          <span className="text-2xl font-bold text-gradient">BTCstack</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
          <Link to="/dashboard">
            <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white font-bold transition-all">
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
    <Link to="/" className="animated-underline text-white hover:text-bitcoin transition-colors">
      Home
    </Link>
    <Link to="/#about" className="animated-underline text-white hover:text-bitcoin transition-colors">
      About
    </Link>
    <Link to="/#how-it-works" className="animated-underline text-white hover:text-bitcoin transition-colors">
      How It Works
    </Link>
    <Link to="/#ecosystem" className="animated-underline text-white hover:text-bitcoin transition-colors">
      Ecosystem
    </Link>
    <Link to="/#business" className="animated-underline text-white hover:text-bitcoin transition-colors">
      Business
    </Link>
    <Link to="/#documentation" className="animated-underline text-white hover:text-bitcoin transition-colors">
      Documentation
    </Link>
  </>
);

const NavLinksMobile = ({ setIsMenuOpen }: { setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) => (
  <>
    <Link to="/" className="text-white hover:text-bitcoin transition-colors" onClick={() => setIsMenuOpen(false)}>
      Home
    </Link>
    <Link to="/#about" className="text-white hover:text-bitcoin transition-colors" onClick={() => setIsMenuOpen(false)}>
      About
    </Link>
    <Link to="/#how-it-works" className="text-white hover:text-bitcoin transition-colors" onClick={() => setIsMenuOpen(false)}>
      How It Works
    </Link>
    <Link to="/#ecosystem" className="text-white hover:text-bitcoin transition-colors" onClick={() => setIsMenuOpen(false)}>
      Ecosystem
    </Link>
    <Link to="/#business" className="text-white hover:text-bitcoin transition-colors" onClick={() => setIsMenuOpen(false)}>
      Business
    </Link>
    <Link to="/#documentation" className="text-white hover:text-bitcoin transition-colors" onClick={() => setIsMenuOpen(false)}>
      Documentation
    </Link>
  </>
);

export default Navbar;
