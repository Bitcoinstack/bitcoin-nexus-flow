
import React from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp } from 'lucide-react';

interface YieldOpportunitiesProps {
  activeNetwork: 'lightning' | 'liquid' | 'rootstock';
}

interface YieldOption {
  id: string;
  name: string;
  provider: string;
  apy: number;
  minAmount: number;
  risk: 'Low' | 'Medium' | 'High';
  lockPeriod: string;
}

const YieldOpportunities = ({ activeNetwork }: YieldOpportunitiesProps) => {
  // Mock yield options for each network
  const yieldOptions: Record<string, YieldOption[]> = {
    lightning: [
      { id: 'y1', name: 'Lightning Pool', provider: 'Lightning Labs', apy: 2.5, minAmount: 0.01, risk: 'Low', lockPeriod: 'No lock' },
    ],
    liquid: [
      { id: 'y2', name: 'L-BTC Staking', provider: 'Liquid Network', apy: 3.8, minAmount: 0.1, risk: 'Medium', lockPeriod: '30 days' },
      { id: 'y3', name: 'L-BTC/USDT LP', provider: 'Liquid DEX', apy: 5.2, minAmount: 0.05, risk: 'Medium', lockPeriod: 'No lock' },
    ],
    rootstock: [
      { id: 'y4', name: 'rBTC Lending', provider: 'Sovryn', apy: 4.2, minAmount: 0.01, risk: 'Medium', lockPeriod: 'No lock' },
      { id: 'y5', name: 'rBTC/DOC LP', provider: 'RSK Swap', apy: 7.5, minAmount: 0.05, risk: 'High', lockPeriod: 'No lock' },
      { id: 'y6', name: 'Money on Chain', provider: 'MOC', apy: 2.8, minAmount: 0.001, risk: 'Low', lockPeriod: 'No lock' },
    ]
  };

  const opportunities = yieldOptions[activeNetwork] || [];

  return (
    <div className="bg-black/40 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/10 flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg sm:text-xl font-bold">Yield Opportunities</h3>
        <Button variant="outline" size="sm" className="border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white text-xs">
          Optimize Yield
        </Button>
      </div>
      
      <div className="space-y-4">
        {opportunities.length > 0 ? (
          opportunities.map((option) => (
            <div key={option.id} className="bg-black/50 rounded-lg p-3 sm:p-4 border border-white/5 hover:border-bitcoin/30 transition-all">
              <div className="flex justify-between items-start flex-wrap sm:flex-nowrap gap-2">
                <div>
                  <h4 className="font-medium text-white">{option.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-400">Provider: {option.provider}</p>
                </div>
                <div className="flex items-center bg-bitcoin/10 text-bitcoin px-3 py-1 rounded-full text-xs sm:text-sm">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span className="font-medium">{option.apy}% APY</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3 text-xs sm:text-sm">
                <div>
                  <p className="text-gray-400">Min Amount</p>
                  <p className="font-medium">{option.minAmount} BTC</p>
                </div>
                <div>
                  <p className="text-gray-400">Risk Level</p>
                  <p className="font-medium">{option.risk}</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-gray-400">Lock Period</p>
                  <p className="font-medium">{option.lockPeriod}</p>
                </div>
              </div>
              
              <div className="flex justify-end mt-3">
                <Button size="sm" className="bg-bitcoin hover:bg-bitcoin-dark text-white text-xs">
                  Stake BTC
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-gray-400">
            No yield opportunities available on {activeNetwork} network
          </div>
        )}
      </div>
    </div>
  );
};

export default YieldOpportunities;
