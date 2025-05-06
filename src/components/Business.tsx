
import React from 'react';
import { Button } from '@/components/ui/button';
import { Bitcoin, Shield, TrendingUp } from 'lucide-react';

const Business = () => {
  return (
    <section 
      id="business"
      className="py-20 bg-gradient-to-br from-black to-orange-900/30 relative overflow-hidden"
    >
      {/* Bitcoin texture background */}
      <div className="absolute inset-0 bg-texture opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient shimmer">BTCstack for Business</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Enterprise-grade Bitcoin Layer 2 solutions for your organization
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold mb-6 text-bitcoin">Enterprise Solutions</h3>
            <p className="text-white/80 mb-6">
              BTCstack provides customized Bitcoin infrastructure for businesses of all sizes. Our enterprise solutions deliver:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-bitcoin mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80">Quantum-resistant security with custom security policies and corporate governance features</span>
              </li>
              <li className="flex items-start">
                <Bitcoin className="h-5 w-5 text-bitcoin mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80">Treasury management tools to optimize Bitcoin holdings across various Layer 2 solutions</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="h-5 w-5 text-bitcoin mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80">Advanced yield strategies tailored to your company's risk profile and liquidity needs</span>
              </li>
            </ul>
            <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white font-bold">
              Request Enterprise Demo
            </Button>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-bitcoin/20 rounded-full flex items-center justify-center animate-pulse">
                <Bitcoin className="w-32 h-32 md:w-40 md:h-40 text-bitcoin animate-pulse-orange" />
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="w-72 h-72 md:w-96 md:h-96 border-2 border-bitcoin/30 rounded-full animate-pulse opacity-70"></div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="w-80 h-80 md:w-[28rem] md:h-[28rem] border border-bitcoin/20 rounded-full animate-pulse opacity-50" style={{ animationDelay: '500ms' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center text-white">Business Use Cases</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/40 backdrop-blur p-6 rounded-xl border border-bitcoin/10 hover:border-bitcoin/40 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-bitcoin group-hover:scale-105 transition-transform">Corporate Treasury</h4>
              <p className="text-white/70">
                Optimize your company's Bitcoin holdings with automated Layer 2 strategies that balance security, liquidity, and yield.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur p-6 rounded-xl border border-bitcoin/10 hover:border-bitcoin/40 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-bitcoin group-hover:scale-105 transition-transform">Payment Processing</h4>
              <p className="text-white/70">
                Accept Bitcoin payments with the lowest fees and fastest settlement times through intelligent routing across Layer 2 networks.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur p-6 rounded-xl border border-bitcoin/10 hover:border-bitcoin/40 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-bitcoin group-hover:scale-105 transition-transform">Financial Services</h4>
              <p className="text-white/70">
                Build next-generation financial products leveraging Bitcoin Layer 2 capabilities with enterprise-grade security.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center text-white">Trusted By Industry Leaders</h3>
          
          <div className="bg-black/30 backdrop-blur-md p-8 rounded-xl border border-bitcoin/20">
            <div className="mb-8 text-center">
              <blockquote className="text-lg italic text-white mb-4">
                "BTCstack has revolutionized how we manage our Bitcoin treasury, allowing us to optimize for both security and yield across multiple Layer 2 solutions."
              </blockquote>
              <cite className="text-bitcoin">— Sarah Johnson, CFO at BlockTech Solutions</cite>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="bg-white/5 p-4 rounded-lg w-36 h-16 flex items-center justify-center">
                <span className="text-bitcoin font-bold">BLOCKTECH</span>
              </div>
              <div className="bg-white/5 p-4 rounded-lg w-36 h-16 flex items-center justify-center">
                <span className="text-bitcoin font-bold">SATOSHI INC</span>
              </div>
              <div className="bg-white/5 p-4 rounded-lg w-36 h-16 flex items-center justify-center">
                <span className="text-bitcoin font-bold">CRYPTO BANK</span>
              </div>
              <div className="bg-white/5 p-4 rounded-lg w-36 h-16 flex items-center justify-center">
                <span className="text-bitcoin font-bold">BTC GLOBAL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Business CTA */}
        <div className="text-center">
          <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white font-bold py-6 px-8 rounded-xl text-xl">
            Schedule a Business Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Business;
