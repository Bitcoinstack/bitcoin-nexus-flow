
import React from 'react';
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, TrendingDown, Check } from 'lucide-react';

const YieldOptimizerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
      <DashboardNavbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Yield Optimizer</h1>
          <p className="text-gray-400 mb-8">Maximize your Bitcoin returns across Layer 2 networks</p>
          
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10 mb-8">
            <h2 className="text-xl font-semibold mb-4">Portfolio Optimization</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-black/50 p-4 rounded-lg border border-white/10">
                <h3 className="text-gray-400 text-sm">Current APY</h3>
                <p className="text-2xl font-bold">3.2%</p>
              </div>
              <div className="bg-black/50 p-4 rounded-lg border border-white/10">
                <h3 className="text-gray-400 text-sm">Optimized APY</h3>
                <p className="text-2xl font-bold text-green-400">6.8%</p>
              </div>
              <div className="bg-black/50 p-4 rounded-lg border border-white/10">
                <h3 className="text-gray-400 text-sm">Potential Gain</h3>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-green-400 mr-1" />
                  <p className="text-2xl font-bold text-green-400">+112%</p>
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-bitcoin hover:bg-bitcoin-dark text-white">
              Optimize Now
            </Button>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="all">All Networks</TabsTrigger>
              <TabsTrigger value="lightning">Lightning</TabsTrigger>
              <TabsTrigger value="liquid">Liquid</TabsTrigger>
              <TabsTrigger value="rootstock">Rootstock</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4">
              <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Best Yield Opportunities</h2>
                  <Button variant="outline" size="sm" className="border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white">
                    Compare All
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {/* Top opportunities across all networks */}
                  <YieldCard 
                    name="rBTC/DOC LP" 
                    provider="RSK Swap" 
                    network="Rootstock"
                    apy={7.5} 
                    risk="High"
                    recommended={true}
                  />
                  
                  <YieldCard 
                    name="L-BTC/USDT LP" 
                    provider="Liquid DEX" 
                    network="Liquid"
                    apy={5.2} 
                    risk="Medium"
                    recommended={true}
                  />
                  
                  <YieldCard 
                    name="rBTC Lending" 
                    provider="Sovryn" 
                    network="Rootstock"
                    apy={4.2} 
                    risk="Medium"
                    recommended={false}
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="lightning" className="space-y-4">
              <YieldCard 
                name="Lightning Pool" 
                provider="Lightning Labs" 
                network="Lightning"
                apy={2.5} 
                risk="Low"
                recommended={true}
              />
            </TabsContent>
            
            <TabsContent value="liquid" className="space-y-4">
              <YieldCard 
                name="L-BTC/USDT LP" 
                provider="Liquid DEX" 
                network="Liquid"
                apy={5.2} 
                risk="Medium"
                recommended={true}
              />
              <YieldCard 
                name="L-BTC Staking" 
                provider="Liquid Network" 
                network="Liquid"
                apy={3.8} 
                risk="Medium"
                recommended={false}
              />
            </TabsContent>
            
            <TabsContent value="rootstock" className="space-y-4">
              <YieldCard 
                name="rBTC/DOC LP" 
                provider="RSK Swap" 
                network="Rootstock"
                apy={7.5} 
                risk="High"
                recommended={true}
              />
              <YieldCard 
                name="rBTC Lending" 
                provider="Sovryn" 
                network="Rootstock"
                apy={4.2} 
                risk="Medium"
                recommended={false}
              />
              <YieldCard 
                name="Money on Chain" 
                provider="MOC" 
                network="Rootstock"
                apy={2.8} 
                risk="Low"
                recommended={false}
              />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

interface YieldCardProps {
  name: string;
  provider: string;
  network: string;
  apy: number;
  risk: string;
  recommended: boolean;
}

const YieldCard = ({ name, provider, network, apy, risk, recommended }: YieldCardProps) => {
  return (
    <div className="bg-black/50 rounded-lg p-5 border border-white/5 hover:border-bitcoin/30 transition-all">
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-white">{name}</h3>
            {recommended && (
              <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full flex items-center">
                <Check className="h-3 w-3 mr-1" /> Recommended
              </span>
            )}
          </div>
          <p className="text-sm text-gray-400">{provider} • {network}</p>
        </div>
        <div className="flex items-center bg-bitcoin/10 text-bitcoin px-3 py-1 rounded-full">
          <TrendingUp className="h-3 w-3 mr-1" />
          <span className="font-medium">{apy}% APY</span>
        </div>
      </div>
      
      <div className="flex justify-between mt-4">
        <div className="text-sm">
          <p className="text-gray-400">Risk Level</p>
          <div className="flex items-center mt-1">
            <div className={`h-2 w-2 rounded-full ${risk === 'Low' ? 'bg-green-400' : risk === 'Medium' ? 'bg-yellow-400' : 'bg-red-400'} mr-2`}></div>
            <span>{risk}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="border-white/20 hover:border-white text-white">
            Details
          </Button>
          <Button size="sm" className="bg-bitcoin hover:bg-bitcoin-dark text-white">
            Stake
          </Button>
        </div>
      </div>
    </div>
  );
};

export default YieldOptimizerPage;
