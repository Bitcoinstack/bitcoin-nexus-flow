
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Bitcoin } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-orange-950 text-white">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-md border-b border-bitcoin/20 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Bitcoin className="h-6 w-6 text-bitcoin" />
            <span className="text-xl font-bold text-gradient">BTCstack</span>
          </Link>
          <Link to="/">
            <Button variant="outline" className="border-bitcoin/50 text-bitcoin hover:bg-bitcoin hover:text-white">
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Dashboard Coming Soon</h1>
          <div className="my-12 relative">
            <div className="w-32 h-32 mx-auto bg-bitcoin/20 rounded-full flex items-center justify-center animate-pulse">
              <Bitcoin className="w-16 h-16 text-bitcoin animate-pulse-orange" />
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex items-center justify-center">
              <div className="w-40 h-40 border-2 border-bitcoin/30 rounded-full animate-pulse opacity-70"></div>
            </div>
          </div>
          <p className="text-xl text-white/80 mb-8">
            We're currently building the ultimate Bitcoin Layer 2 aggregator dashboard. 
            Join our waitlist to get early access to BTCstack's revolutionary platform.
          </p>

          <div className="bg-black/30 backdrop-blur p-8 rounded-xl border border-bitcoin/20 mb-8">
            <h3 className="text-xl font-bold mb-4">Features Coming Soon:</h3>
            <ul className="space-y-2 text-left">
              <li className="flex items-center">
                <span className="text-bitcoin mr-2">→</span>
                <span>Seamless switching between Rootstock, Liquid, and Lightning</span>
              </li>
              <li className="flex items-center">
                <span className="text-bitcoin mr-2">→</span>
                <span>Quantum-resistant transaction security</span>
              </li>
              <li className="flex items-center">
                <span className="text-bitcoin mr-2">→</span>
                <span>Automated yield optimization across Layer 2 networks</span>
              </li>
              <li className="flex items-center">
                <span className="text-bitcoin mr-2">→</span>
                <span>Real-time fee and performance comparisons</span>
              </li>
              <li className="flex items-center">
                <span className="text-bitcoin mr-2">→</span>
                <span>Comprehensive portfolio analytics</span>
              </li>
            </ul>
          </div>

          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email for early access"
                className="flex-grow bg-white/10 border border-bitcoin/30 px-4 py-2 rounded-lg sm:rounded-r-none outline-none text-white placeholder:text-white/50"
              />
              <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white font-bold sm:rounded-l-none">
                Join Waitlist
              </Button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-bitcoin/20 py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} BTCstack. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
