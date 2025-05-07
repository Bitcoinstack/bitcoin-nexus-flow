
import React, { useRef, useEffect } from 'react';
import { Shield, Rocket, TrendingUp } from 'lucide-react';
 
const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textElements = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    // Animation for text elements
    if (sectionRef.current) {
      textElements.current = sectionRef.current.querySelectorAll('.animate-text');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Add typing effect for paragraphs
            if (entry.target.classList.contains('typing-container')) {
              const paragraphs = entry.target.querySelectorAll('p');
              paragraphs.forEach((p, index) => {
                if (p instanceof HTMLElement) {
                  p.style.opacity = '1';
                  p.style.transform = 'translateY(0)';
                  p.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
                }
              });
            }
          }
        });
      }, { threshold: 0.1 });
      
      textElements.current.forEach(el => {
        observer.observe(el);
      });
      
      // Create floating Bitcoin circles
      const createBitcoinCircles = () => {
        const container = document.querySelector('.bitcoin-bg-circles');
        if (!container) return;
        
        for (let i = 0; i < 8; i++) {
          const circle = document.createElement('div');
          circle.className = 'bitcoin-bg-circle';
          
          // Random size between 50px and 200px
          const size = Math.random() * 150 + 50;
          circle.style.width = `${size}px`;
          circle.style.height = `${size}px`;
          
          // Random position
          circle.style.left = `${Math.random() * 100}%`;
          circle.style.top = `${Math.random() * 100}%`;
          
          // Random animation delay
          circle.style.animationDelay = `${Math.random() * 5}s`;
          
          container.appendChild(circle);
        }
      };
      
      createBitcoinCircles();
      
      return () => {
        if (textElements.current) {
          textElements.current.forEach(el => {
            observer.unobserve(el);
          });
        }
      };
    }
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Bitcoin-themed animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black bg-opacity-80 z-10"></div>
        <div className="absolute inset-0 bitcoin-pattern z-5"></div>
        <div className="bitcoin-bg-circles absolute inset-0 z-0"></div>
        <div className="bitcoin-network-lines absolute inset-0 z-5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient shimmer animate-text reveal-text">About BTCstack</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto animate-text fade-in-up split-words">
            A revolutionary platform built to optimize your Bitcoin experience across multiple Layer 2 networks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-black/30 backdrop-blur p-8 rounded-xl border border-bitcoin/20 hover:border-bitcoin/40 transition-all hover:-translate-y-1 group animate-text slide-in-left">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-bitcoin/10 rounded-full flex items-center justify-center group-hover:bg-bitcoin/20 transition-all">
                <Shield className="h-8 w-8 text-bitcoin" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-bitcoin animate-pulse-orange">Quantum Resistant Security</h3>
            <div className="typing-container animate-text">
              <p className="text-white/70" style={{ opacity: 0, transform: 'translateY(10px)' }}>
                Our protocol implements quantum-resistant algorithms and zero-knowledge proofs to create an unprecedented layer of 
                security for your Bitcoin transactions.
              </p>
              <p className="text-white/70 mt-2" style={{ opacity: 0, transform: 'translateY(10px)' }}>
                Future-proof your assets against emerging threats with our advanced security measures.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-black/30 backdrop-blur p-8 rounded-xl border border-bitcoin/20 hover:border-bitcoin/40 transition-all hover:-translate-y-1 group animate-text slide-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-bitcoin/10 rounded-full flex items-center justify-center group-hover:bg-bitcoin/20 transition-all">
                <Rocket className="h-8 w-8 text-bitcoin" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-bitcoin animate-pulse-orange">Real-time Layer 2 Switching</h3>
            <div className="typing-container animate-text">
              <p className="text-white/70" style={{ opacity: 0, transform: 'translateY(10px)' }}>
                Seamlessly switch between Rootstock, Liquid, Lightning, and other Bitcoin Layer 2 solutions in real-time.
              </p>
              <p className="text-white/70 mt-2" style={{ opacity: 0, transform: 'translateY(10px)' }}>
                Our intelligent routing optimizes for lowest fees, fastest confirmation times, and best overall performance.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-black/30 backdrop-blur p-8 rounded-xl border border-bitcoin/20 hover:border-bitcoin/40 transition-all hover:-translate-y-1 group animate-text slide-in-right" style={{ animationDelay: "0.4s" }}>
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 bg-bitcoin/10 rounded-full flex items-center justify-center group-hover:bg-bitcoin/20 transition-all">
                <TrendingUp className="h-8 w-8 text-bitcoin" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-bitcoin animate-pulse-orange">Bitcoin Yield Aggregator</h3>
            <div className="typing-container animate-text">
              <p className="text-white/70" style={{ opacity: 0, transform: 'translateY(10px)' }}>
                Automatically optimize your Bitcoin holdings through Layer 2 DeFi protocols, ETFs, and stablecoin swaps.
              </p>
              <p className="text-white/70 mt-2" style={{ opacity: 0, transform: 'translateY(10px)' }}>
                Generate the highest possible yields, all managed through a single unified interface.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-black/40 backdrop-blur p-8 rounded-xl border border-bitcoin/20 animate-text wide-content-animate" style={{ animationDelay: "0.6s" }}>
          <h3 className="text-2xl font-bold mb-4 text-center text-white">Why Choose BTCstack?</h3>
          <ul className="space-y-4 text-white/80">
            <li className="flex items-start animate-text slide-in-right" style={{ animationDelay: "0.7s" }}>
              <span className="text-bitcoin mr-2">→</span> 
              <span className="split-words">Single interface to access all major Bitcoin Layer 2 solutions</span>
            </li>
            <li className="flex items-start animate-text slide-in-right" style={{ animationDelay: "0.8s" }}>
              <span className="text-bitcoin mr-2">→</span>
              <span className="split-words">Advanced security that exceeds industry standards with quantum resistance</span>
            </li>
            <li className="flex items-start animate-text slide-in-right" style={{ animationDelay: "0.9s" }}>
              <span className="text-bitcoin mr-2">→</span>
              <span className="split-words">Optimized routing for lowest fees and fastest transaction speeds</span>
            </li>
            <li className="flex items-start animate-text slide-in-right" style={{ animationDelay: "1.0s" }}>
              <span className="text-bitcoin mr-2">→</span>
              <span className="split-words">Yield optimization strategies that maximize your Bitcoin returns</span>
            </li>
            <li className="flex items-start animate-text slide-in-right" style={{ animationDelay: "1.1s" }}>
              <span className="text-bitcoin mr-2">→</span>
              <span className="split-words">Developer-friendly ecosystem with comprehensive APIs and documentation</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
