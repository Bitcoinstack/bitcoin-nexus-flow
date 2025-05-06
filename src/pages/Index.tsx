
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import HowItWorks from '@/components/HowItWorks';
import Ecosystem from '@/components/Ecosystem';
import Business from '@/components/Business';
import Documentation from '@/components/Documentation';
import Footer from '@/components/Footer';

const Index = () => {
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
