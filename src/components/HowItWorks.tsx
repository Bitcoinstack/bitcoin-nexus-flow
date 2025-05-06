
import React from 'react';

const HowItWorks = () => {
  return (
    <section 
      id="how-it-works"
      className="py-20 bg-gradient-to-br from-black to-orange-900/30 relative overflow-hidden"
    >
      {/* Bitcoin texture background */}
      <div className="absolute inset-0 bg-texture opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient shimmer">How BTCstack Works</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our technology seamlessly integrates multiple Bitcoin Layer 2 solutions to provide optimal performance
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-0.5 bg-bitcoin/30"></div>

          {/* Step 1 */}
          <div className="mb-20 md:mb-32 relative">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 order-2 md:order-1">
                <div className="bg-black/40 backdrop-blur p-8 rounded-xl border border-bitcoin/20 animate-fade-in">
                  <h3 className="text-2xl font-bold mb-4 text-bitcoin">Connect Your Wallet</h3>
                  <p className="text-white/70 mb-4">
                    Simply connect your Bitcoin wallet to BTCstack's secure interface. We support all major wallets with seamless, user-friendly integration.
                  </p>
                  <p className="text-white/70">
                    Our connection protocol uses advanced zero-knowledge proofs to ensure your private keys never leave your device.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center order-1 md:order-2">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-bitcoin flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-bitcoin/30 animate-pulse-orange">
                  1
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-20 md:mb-32 relative">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 flex justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-bitcoin flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-bitcoin/30 animate-pulse-orange">
                  2
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                <div className="bg-black/40 backdrop-blur p-8 rounded-xl border border-bitcoin/20 animate-fade-in">
                  <h3 className="text-2xl font-bold mb-4 text-bitcoin">Select Your Transaction</h3>
                  <p className="text-white/70 mb-4">
                    Choose whether you want to send Bitcoin, swap between assets, or participate in yield-generating activities.
                  </p>
                  <p className="text-white/70">
                    Our intuitive interface makes it simple to select exactly what you need, while our AI provides recommendations based on your preferences and current market conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-20 md:mb-32 relative">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 order-2 md:order-1">
                <div className="bg-black/40 backdrop-blur p-8 rounded-xl border border-bitcoin/20 animate-fade-in">
                  <h3 className="text-2xl font-bold mb-4 text-bitcoin">Smart Routing Technology</h3>
                  <p className="text-white/70 mb-4">
                    Our algorithm instantly analyzes all available Layer 2 options including Rootstock, Liquid, and Lightning Network to determine the optimal path for your transaction.
                  </p>
                  <p className="text-white/70">
                    We consider factors like fees, speed, security requirements, and current network congestion to route your transaction through the most efficient channel.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center order-1 md:order-2">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-bitcoin flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-bitcoin/30 animate-pulse-orange">
                  3
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 flex justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-bitcoin flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-bitcoin/30 animate-pulse-orange">
                  4
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-black/40 backdrop-blur p-8 rounded-xl border border-bitcoin/20 animate-fade-in">
                  <h3 className="text-2xl font-bold mb-4 text-bitcoin">Execute With Confidence</h3>
                  <p className="text-white/70 mb-4">
                    Review the selected path and confirm your transaction. Our quantum-resistant security measures ensure your transaction is protected at every step.
                  </p>
                  <p className="text-white/70">
                    Once confirmed, BTCstack handles all the complex cross-layer interactions, atomic swaps, and technical details - you just enjoy the results!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
