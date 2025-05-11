
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface YieldOption {
  id: string;
  name: string;
  provider: string;
  apy: number;
  minAmount: number;
  risk: 'Low' | 'Medium' | 'High';
  lockPeriod: string;
  staked: boolean;
}

const YieldOpportunities = () => {
  const { toast } = useToast();
  const [opportunities, setOpportunities] = useState<YieldOption[]>([
    { id: 'y1', name: 'BTC Staking', provider: 'Bitcoin Labs', apy: 2.5, minAmount: 0.01, risk: 'Low', lockPeriod: 'No lock', staked: false },
    { id: 'y2', name: 'BTC Lending', provider: 'Satoshi Finance', apy: 3.8, minAmount: 0.1, risk: 'Medium', lockPeriod: '30 days', staked: false },
    { id: 'y3', name: 'BTC/USDT LP', provider: 'Bitcoin DEX', apy: 5.2, minAmount: 0.05, risk: 'Medium', lockPeriod: 'No lock', staked: false },
    { id: 'y4', name: 'BTC Mining', provider: 'Hash Power', apy: 4.2, minAmount: 0.01, risk: 'Medium', lockPeriod: 'No lock', staked: false },
  ]);

  const handleStake = (id: string) => {
    setOpportunities(prevOpportunities => 
      prevOpportunities.map(opportunity => 
        opportunity.id === id 
          ? { ...opportunity, staked: !opportunity.staked } 
          : opportunity
      )
    );

    const opportunity = opportunities.find(opp => opp.id === id);
    if (opportunity) {
      if (!opportunity.staked) {
        toast({
          title: `Successfully staked in ${opportunity.name}`,
          description: `Your stake is now earning ${opportunity.apy}% APY`,
          variant: "default", // Changed from "success" to "default" to match allowed variants
        });
      } else {
        toast({
          title: `Unstaked from ${opportunity.name}`,
          description: "Your funds have been returned to your wallet",
          variant: "default",
        });
      }
    }
  };

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
                <Button 
                  size="sm" 
                  className={option.staked 
                    ? "bg-gray-700 hover:bg-gray-600 text-white text-xs" 
                    : "bg-bitcoin hover:bg-bitcoin-dark text-white text-xs"
                  }
                  onClick={() => handleStake(option.id)}
                >
                  {option.staked ? "Unstake" : "Stake BTC"}
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-gray-400">
            No yield opportunities available
          </div>
        )}
      </div>
    </div>
  );
};

export default YieldOpportunities;
