
import React from 'react';
import { Button } from '@/components/ui/button';

const Ecosystem = () => {
  return (
    <section 
      id="ecosystem"
      className="py-20 bg-gradient-to-br from-orange-900/20 to-black relative overflow-hidden"
    >
      {/* Bitcoin texture background */}
      <div className="absolute inset-0 bg-texture opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient shimmer">Developer Ecosystem</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Build the future of Bitcoin Layer 2 applications with our comprehensive tools and APIs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Left Column - API Documentation */}
          <div className="bg-black/30 backdrop-blur p-8 rounded-xl border border-bitcoin/20">
            <h3 className="text-2xl font-bold mb-6 text-bitcoin">Comprehensive APIs</h3>

            <div className="mb-8">
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <p className="font-mono text-sm text-green-400 mb-2">// Example API request for smart routing</p>
                <pre className="text-white/80 whitespace-pre-wrap font-mono text-sm overflow-auto">
{`const response = await btcstack.route({
  from: 'bitcoin',
  to: 'lightning',
  amount: 0.01,
  options: {
    prioritize: 'speed'
  }
});`}
                </pre>
              </div>
              <p className="text-white/70">
                Our well-documented APIs give you the power to integrate BTCstack's smart routing capabilities directly into your applications.
                Access multiple Layer 2 networks through a single, unified interface.
              </p>
            </div>

            <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white font-bold">
              Explore API Docs
            </Button>
          </div>

          {/* Right Column - SDK & Plugins */}
          <div className="bg-black/30 backdrop-blur p-8 rounded-xl border border-bitcoin/20">
            <h3 className="text-2xl font-bold mb-6 text-bitcoin">SDKs & Plugins</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {['JavaScript', 'Python', 'Rust', 'Go'].map((lang) => (
                <div key={lang} className="bg-black/40 p-4 rounded-lg border border-bitcoin/10 flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-bitcoin"></div>
                  <span className="text-white">{lang}</span>
                </div>
              ))}
            </div>
            <p className="text-white/70 mb-8">
              Integrate BTCstack into your applications with our easy-to-use SDKs available in multiple programming languages.
              Our plugins work seamlessly with popular development frameworks.
            </p>
            <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white font-bold">
              Download SDKs
            </Button>
          </div>
        </div>

        {/* Developer Showcase */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-8 text-center text-white">Build On BTCstack</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/40 backdrop-blur p-6 rounded-xl border border-bitcoin/10 hover:border-bitcoin/40 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-bitcoin group-hover:scale-105 transition-transform">Cross-Layer DeFi Apps</h4>
              <p className="text-white/70">
                Create DeFi applications that seamlessly operate across multiple Bitcoin Layer 2 solutions, maximizing liquidity and user options.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur p-6 rounded-xl border border-bitcoin/10 hover:border-bitcoin/40 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-bitcoin group-hover:scale-105 transition-transform">Payment Solutions</h4>
              <p className="text-white/70">
                Integrate optimal Bitcoin payment routing into your commerce platforms with automatic fee optimization and instant settlements.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur p-6 rounded-xl border border-bitcoin/10 hover:border-bitcoin/40 transition-all group">
              <h4 className="text-xl font-bold mb-3 text-bitcoin group-hover:scale-105 transition-transform">Yield Optimization</h4>
              <p className="text-white/70">
                Build sophisticated yield aggregation strategies leveraging BTCstack's cross-layer capabilities and security features.
              </p>
            </div>
          </div>
        </div>

        {/* Developer CTA */}
        <div className="mt-16 text-center">
          <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white font-bold py-6 px-8 rounded-xl text-xl">
            Join Developer Program
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
