
import React from 'react';
import { TrendingUp } from 'lucide-react';

const BalanceSummary = () => {
  // Simplified data without network specifics
  const balance = 2.42; // Total BTC balance
  const yield_amount = 0.057; // Total yield
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {/* Total Balance Card */}
      <div className="bg-gradient-to-br from-bitcoin/20 to-black p-4 sm:p-6 rounded-xl border border-white/10 flex flex-col relative overflow-hidden group">
        <h3 className="text-gray-400 mb-1 text-sm font-medium">Total Balance</h3>
        <div className="flex items-end gap-2">
          <span className="text-2xl sm:text-3xl font-bold text-white">{balance.toFixed(4)}</span>
          <span className="text-bitcoin">BTC</span>
        </div>
        <div className="mt-3 sm:mt-4 text-sm text-gray-400">
          <span>≈ ${(balance * 55000).toLocaleString()}</span>
        </div>
        
        {/* Hover information */}
        <div className="absolute inset-0 bg-bitcoin/10 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 sm:p-6">
          <div className="bg-black/80 p-3 rounded-lg backdrop-blur-sm border border-white/10">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-gray-400">Fee</p>
                <p className="font-medium text-white">Medium</p>
              </div>
              <div>
                <p className="text-gray-400">Speed</p>
                <p className="font-medium text-white">Minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Available Balance Card */}
      <div className="bg-black/40 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/10 flex flex-col">
        <h3 className="text-gray-400 mb-1 text-sm font-medium">Available Balance</h3>
        <div className="flex items-end gap-2">
          <span className="text-2xl sm:text-3xl font-bold text-white">{(balance * 0.9).toFixed(4)}</span>
          <span className="text-bitcoin">BTC</span>
        </div>
        <div className="mt-3 sm:mt-4 text-sm text-gray-400">
          <span>10% reserved for fees</span>
        </div>
      </div>

      {/* Yield Card */}
      <div className="bg-black/40 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/10 flex flex-col">
        <h3 className="text-gray-400 mb-1 text-sm font-medium">Total Yield</h3>
        <div className="flex items-end gap-2">
          <span className="text-2xl sm:text-3xl font-bold text-white">{yield_amount.toFixed(4)}</span>
          <span className="text-bitcoin">BTC</span>
        </div>
        <div className="mt-3 sm:mt-4 flex items-center text-sm text-green-400">
          <TrendingUp className="h-4 w-4 mr-1" />
          <span>3.2% AVG APR</span>
        </div>
      </div>
    </div>
  );
};

export default BalanceSummary;
