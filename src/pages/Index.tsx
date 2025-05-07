
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import HowItWorks from '@/components/HowItWorks';
import Ecosystem from '@/components/Ecosystem';
import Business from '@/components/Business';
import Documentation from '@/components/Documentation';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Animation for text elements that come into view
    const animatedElements = document.querySelectorAll('.animate-text');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      animatedElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Ecosystem />
      <Business />
      <Documentation />
      <Footer />
    </div>
  );
};

export default Index;
