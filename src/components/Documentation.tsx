
import React from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, BookText, Book } from 'lucide-react';

const Documentation = () => {
  return (
    <section 
      id="documentation"
      className="py-20 bg-gradient-to-br from-orange-900/20 to-black relative overflow-hidden"
    >
      {/* Bitcoin texture background */}
      <div className="absolute inset-0 bg-texture opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient shimmer">Documentation</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive guides and technical documentation for BTCstack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Getting Started */}
          <div className="bg-black/40 backdrop-blur p-8 rounded-xl border border-bitcoin/20 hover:border-bitcoin/30 transition-all group">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-bitcoin/10 rounded-full flex items-center justify-center group-hover:bg-bitcoin/20 transition-all">
                <Book className="h-8 w-8 text-bitcoin" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-bitcoin">Getting Started</h3>
            <ul className="space-y-3 mb-8">
              <li className="text-white/80 hover:text-white transition-colors cursor-pointer">
                → Introduction to BTCstack
              </li>
              <li className="text-white/80 hover:text-white transition-colors cursor-pointer">
                → Setting Up Your Wallet
              </li>
              <li className="text-white/80 hover:text-white transition-colors cursor-pointer">
                → First Transaction Guide
              </li>
              <li className="text-white/80 hover:text-white transition-colors cursor-pointer">
                → Security Best Practices
              </li>
            </ul>
            <Button className="w-full bg-bitcoin/20 hover:bg-bitcoin/30 text-bitcoin hover:text-white border border-bitcoin/50 transition-all">
              View Guides
            </Button>
          </div>

          {/* Technical Documentation */}
          <div className="bg-black/40 backdrop-blur p-8 rounded-xl border border-bitcoin/20 hover:border-bitcoin/30 transition-all group">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-bitcoin/10 rounded-full flex items-center justify-center group-hover:bg-bitcoin/20 transition-all">
                <BookOpen className="h-8 w-8 text-bitcoin" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-bitcoin">Technical Docs</h3>
            <ul className="space-y-3 mb-8">
              <li className="text-white/80 hover:text-white transition-colors cursor-pointer">
                → API Reference
              </li>
              <li className="text-white/80 hover:text-white transition-colors cursor-pointer">
                → Smart Routing Algorithm
              </li>
              <li className="text-white/80 hover:text-white transition-colors cursor-pointer">
                → Security Architecture
              </li>
              <li className="text-white/80 hover:text-white transition-colors cursor-pointer">
                → Integration Guides
              </li>
            </ul>
            <Button className="w-full bg-bitcoin/20 hover:bg-bitcoin/30 text-bitcoin hover:text-white border border-bitcoin/50 transition-all">
              Read Documentation
            </Button>
          </div>

          {/* Tutorials */}
          <div className="bg-black/40 backdrop-blur p-8 rounded-xl border border-bitcoin/20 hover:border-bitcoin/30 transition-all group">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-bitcoin/10 rounded-full flex items-center justify-center group-hover:bg-bitcoin/20 transition-all">
                <BookText className="h-8 w-8 text-bitcoin" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center text-bitcoin">Tutorials</h3>
            <ul className="space-y-3 mb-8">
              <li className="text-white/80 hover:text-white transition-colors cursor-pointer">
                → Yield Optimization Strategies
              </li>
              <li className="text-white/80 hover:text-white transition-colors cursor-pointer">
                → Cross-Layer Transactions
              </li>
              <li className="text-white/80 hover:text-white transition-colors cursor-pointer">
                → Building on BTCstack
              </li>
              <li className="text-white/80 hover:text-white transition-colors cursor-pointer">
                → Advanced Security Features
              </li>
            </ul>
            <Button className="w-full bg-bitcoin/20 hover:bg-bitcoin/30 text-bitcoin hover:text-white border border-bitcoin/50 transition-all">
              View Tutorials
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur p-8 rounded-xl border border-bitcoin/20 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-bitcoin">Frequently Asked Questions</h3>
          
          <div className="space-y-6">
            <div className="border-b border-bitcoin/20 pb-4">
              <h4 className="font-bold text-white mb-2">What Layer 2 solutions does BTCstack support?</h4>
              <p className="text-white/70">
                BTCstack currently supports Rootstock (RSK), Liquid Network, Lightning Network, and several other Bitcoin Layer 2 protocols. We're continuously adding support for emerging solutions.
              </p>
            </div>
            
            <div className="border-b border-bitcoin/20 pb-4">
              <h4 className="font-bold text-white mb-2">How does the quantum resistance feature work?</h4>
              <p className="text-white/70">
                Our quantum resistance is built on post-quantum cryptographic algorithms that secure your transactions against potential threats from quantum computing. These algorithms are implemented alongside traditional cryptography to ensure backward compatibility.
              </p>
            </div>
            
            <div className="border-b border-bitcoin/20 pb-4">
              <h4 className="font-bold text-white mb-2">What fees does BTCstack charge?</h4>
              <p className="text-white/70">
                BTCstack charges a small fee on transactions that is typically lower than what you would pay using any single Layer 2 solution directly, thanks to our optimal routing technology. For enterprise customers, we offer custom pricing plans.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-2">Is BTCstack open source?</h4>
              <p className="text-white/70">
                Core components of BTCstack are open source, allowing for community review and contributions. Our enterprise features and proprietary routing algorithms remain closed source to protect our competitive advantage.
              </p>
            </div>
          </div>
        </div>

        {/* Documentation CTA */}
        <div className="text-center">
          <p className="text-white/80 mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white font-bold">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
