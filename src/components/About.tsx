
import React, { useRef } from 'react';
import { Shield, Rocket, TrendingUp } from 'lucide-react';
 
const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-orange-900/20 to-black relative overflow-hidden"
    >
      {/* Bitcoin texture background */}
      <div className="absolute inset-0 bg-texture opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient shimmer">About BTCstack</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A revolutionary platform built to optimize your Bitcoin experience across multiple Layer 2 networks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-black/30 backdrop-blur p-8 rounded-xl border border-bitcoin/20 hover:border-bitcoin/40 transition-all hover:-translate-y-1 group">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-bitcoin/10 rounded-full flex items-center justify-center group-hover:bg-bitcoin/20 transition-all">
                <Shield className="h-8 w-8 text-bitcoin" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-bitcoin animate-pulse-orange">Quantum Resistant Security</h3>
            <p className="text-white/70">
              Our protocol implements quantum-resistant algorithms and zero-knowledge proofs to create an unprecedented layer of 
              security for your Bitcoin transactions, future-proofing your assets against emerging threats.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-black/30 backdrop-blur p-8 rounded-xl border border-bitcoin/20 hover:border-bitcoin/40 transition-all hover:-translate-y-1 group">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-bitcoin/10 rounded-full flex items-center justify-center group-hover:bg-bitcoin/20 transition-all">
                <Rocket className="h-8 w-8 text-bitcoin" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-bitcoin animate-pulse-orange">Real-time Layer 2 Switching</h3>
            <p className="text-white/70">
              Seamlessly switch between Rootstock, Liquid, Lightning, and other Bitcoin Layer 2 solutions in real-time. Our 
              intelligent routing optimizes for lowest fees, fastest confirmation times, and best overall performance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-black/30 backdrop-blur p-8 rounded-xl border border-bitcoin/20 hover:border-bitcoin/40 transition-all hover:-translate-y-1 group">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-bitcoin/10 rounded-full flex items-center justify-center group-hover:bg-bitcoin/20 transition-all">
                <TrendingUp className="h-8 w-8 text-bitcoin" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-bitcoin animate-pulse-orange">Bitcoin Yield Aggregator</h3>
            <p className="text-white/70">
              Automatically optimize your Bitcoin holdings through Layer 2 DeFi protocols, ETFs, and stablecoin swaps to 
              generate the highest possible yields, all managed through a single unified interface.
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-black/40 backdrop-blur p-8 rounded-xl border border-bitcoin/20">
          <h3 className="text-2xl font-bold mb-4 text-center text-white">Why Choose BTCstack?</h3>
          <ul className="space-y-4 text-white/80">
            <li className="flex items-start">
              <span className="text-bitcoin mr-2">→</span> 
              <span>Single interface to access all major Bitcoin Layer 2 solutions</span>
            </li>
            <li className="flex items-start">
              <span className="text-bitcoin mr-2">→</span>
              <span>Advanced security that exceeds industry standards with quantum resistance</span>
            </li>
            <li className="flex items-start">
              <span className="text-bitcoin mr-2">→</span>
              <span>Optimized routing for lowest fees and fastest transaction speeds</span>
            </li>
            <li className="flex items-start">
              <span className="text-bitcoin mr-2">→</span>
              <span>Yield optimization strategies that maximize your Bitcoin returns</span>
            </li>
            <li className="flex items-start">
              <span className="text-bitcoin mr-2">→</span>
              <span>Developer-friendly ecosystem with comprehensive APIs and documentation</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
