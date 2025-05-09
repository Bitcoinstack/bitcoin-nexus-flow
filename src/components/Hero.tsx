
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Bitcoin } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (containerRef.current) {
        containerRef.current.style.backgroundPositionY = `${scrollY * 0.5}px`;
      }
    };

    // Text animation effect
    const animateText = () => {
      const textElements = document.querySelectorAll('.hero-text-animate');
      textElements.forEach((element, index) => {
        if (element instanceof HTMLElement) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
          element.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        }
      });
    };

    // Split text animation for character by character effect
    document.querySelectorAll('.split-letters').forEach(element => {
      const text = element.textContent || '';
      const letters = text.split('');
      
      element.textContent = '';
      
      letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.className = 'animated-letter';
        span.textContent = letter;
        if (span instanceof HTMLElement) {
          span.style.animationDelay = `${index * 0.05}s`;
        }
        element.appendChild(span);
      });
    });

    // Animate Bitcoin logo
    const animateBitcoinLogo = () => {
      const logo = document.querySelector('.btc-logo');
      if (logo instanceof HTMLElement) {
        logo.classList.add('animate-spin-slow');
      }
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(animateText, 300);
    setTimeout(animateBitcoinLogo, 500);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-texture"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23f7931a" fill-opacity="0.2" fill-rule="evenodd"/%3E%3C/svg%3E')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated Bitcoin Logo */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20">
        <Bitcoin className="w-[500px] h-[500px] text-bitcoin btc-logo animate-pulse-orange" />
      </div>

      {/* Animated patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-20 h-20 border-2 border-bitcoin/30 rounded-full animate-pulse-orange"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-bitcoin/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 border-2 border-bitcoin/20 rounded-full animate-pulse-orange" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12 text-center">
        <div className="flex items-center justify-center mb-4 gap-3">
          <Bitcoin className="h-12 w-12 text-bitcoin animate-spin-slow btc-logo-header" />
          <h1 className="text-5xl md:text-7xl font-bold text-white animate-fade-in">
            BTCstack
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-white mb-8 hero-text-animate" style={{ opacity: 0, transform: 'translateY(20px)' }}>
          The ultimate Bitcoin Layer 2 Aggregator Protocol
        </p>

        <div className="max-w-3xl mx-auto mb-12 bg-black/30 backdrop-blur-md p-6 rounded-xl animate-fade-in hero-text-animate" style={{ opacity: 0, transform: 'translateY(20px)', transitionDelay: '0.3s' }}>
          <p className="text-lg text-white mb-4 space-y-3">
            <span className="block mb-2">Seamlessly switch between Rootstock, Liquid, and Lightning for optimal fees and performance.</span>
            <span className="block">Experience quantum-resistant zero-knowledge security and maximize your Bitcoin yield.</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in hero-text-animate" style={{ opacity: 0, transform: 'translateY(20px)', transitionDelay: '0.6s' }}>
          <Link to="/dashboard">
            <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white font-bold py-6 px-8 rounded-xl text-xl transition-all hover:scale-105">
              Launch App
            </Button>
          </Link>
          <Link to="/#how-it-works">
            <Button variant="outline" className="border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white font-bold py-6 px-8 rounded-xl text-xl transition-all">
              Learn More
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 staggered-animation animate-text">
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl stagger-item" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            <h4 className="text-bitcoin text-lg font-semibold">Quantum Resistant</h4>
            <p className="text-white text-opacity-80">Future-proof security for all transactions</p>
          </div>
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl stagger-item" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            <h4 className="text-bitcoin text-lg font-semibold">Zero Knowledge</h4>
            <p className="text-white text-opacity-80">Enhanced privacy protection</p>
          </div>
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl stagger-item" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            <h4 className="text-bitcoin text-lg font-semibold">Yield Aggregator</h4>
            <p className="text-white text-opacity-80">Highest APRs across Layer 2 solutions</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
