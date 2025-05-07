
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
          
          // Add staggered animation to child text elements
          if (entry.target.classList.contains('staggered-animation')) {
            const children = entry.target.querySelectorAll('.stagger-item');
            children.forEach((child, index) => {
              if (child instanceof HTMLElement) {
                child.style.animationDelay = `${index * 0.1}s`;
                child.classList.add('visible');
              }
            });
          }
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });
    
    // Split text into individual words for word-by-word animation
    document.querySelectorAll('.split-words').forEach(element => {
      const text = element.textContent || '';
      const words = text.split(' ');
      
      element.textContent = '';
      
      words.forEach((word, index) => {
        const span = document.createElement('span');
        span.className = 'animated-word';
        span.textContent = word + ' ';
        if (span instanceof HTMLElement) {
          span.style.animationDelay = `${index * 0.1}s`;
        }
        element.appendChild(span);
      });
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
