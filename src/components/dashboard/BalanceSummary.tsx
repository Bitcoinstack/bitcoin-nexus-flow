
import React from 'react';
import { TrendingUp } from 'lucide-react';

interface BalanceSummaryProps {
  activeNetwork: 'lightning' | 'liquid' | 'rootstock';
}

const BalanceSummary = ({ activeNetwork }: BalanceSummaryProps) => {
  // Mock data for each network
  const networkBalances = {
    lightning: { balance: 0.32, yield: 0, change: 0 },
    liquid: { balance: 1.25, yield: 0.015, change: 2.3 },
    rootstock: { balance: 0.85, yield: 0.042, change: 4.8 }
  };

  const totalBtc = Object.values(networkBalances).reduce((acc, curr) => acc + curr.balance, 0);
  const totalYield = Object.values(networkBalances).reduce((acc, curr) => acc + curr.yield, 0);
  
  const activeData = networkBalances[activeNetwork];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Total Balance Card */}
      <div className="bg-gradient-to-br from-bitcoin/20 to-black p-6 rounded-xl border border-white/10 flex flex-col">
        <h3 className="text-gray-400 mb-1 text-sm font-medium">Total Balance</h3>
        <div className="flex items-end gap-2">
          <span className="text-3xl font-bold text-white">{totalBtc.toFixed(4)}</span>
          <span className="text-bitcoin">BTC</span>
        </div>
        <div className="mt-4 text-sm text-gray-400">
          <span>≈ ${(totalBtc * 55000).toLocaleString()}</span>
        </div>
      </div>

      {/* Active Network Card */}
      <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10 flex flex-col">
        <h3 className="text-gray-400 mb-1 text-sm font-medium">{activeNetwork.charAt(0).toUpperCase() + activeNetwork.slice(1)} Balance</h3>
        <div className="flex items-end gap-2">
          <span className="text-3xl font-bold text-white">{activeData.balance.toFixed(4)}</span>
          <span className="text-bitcoin">BTC</span>
        </div>
        <div className="mt-4 text-sm text-gray-400">
          <span>{activeData.change > 0 ? '+' : ''}{activeData.change}% this week</span>
        </div>
      </div>

      {/* Yield Card */}
      <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10 flex flex-col">
        <h3 className="text-gray-400 mb-1 text-sm font-medium">Total Yield</h3>
        <div className="flex items-end gap-2">
          <span className="text-3xl font-bold text-white">{totalYield.toFixed(4)}</span>
          <span className="text-bitcoin">BTC</span>
        </div>
        <div className="mt-4 flex items-center text-sm text-green-400">
          <TrendingUp className="h-4 w-4 mr-1" />
          <span>3.2% AVG APR</span>
        </div>
      </div>
    </div>
  );
};

export default BalanceSummary;
