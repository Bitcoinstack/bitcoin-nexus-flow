
import React from 'react';
import DashboardNavbar from './DashboardNavbar';
import NetworkSelector from './NetworkSelector';
import BalanceSummary from './BalanceSummary';
import TransactionHistory from './TransactionHistory';
import YieldOpportunities from './YieldOpportunities';

const DashboardLayout = () => {
  const [activeNetwork, setActiveNetwork] = React.useState<'lightning' | 'liquid' | 'rootstock'>('lightning');

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
      <DashboardNavbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8 max-w-7xl mx-auto">
          
          {/* Network Selector */}
          <NetworkSelector activeNetwork={activeNetwork} setActiveNetwork={setActiveNetwork} />
          
          {/* Balance Summary */}
          <BalanceSummary activeNetwork={activeNetwork} />
          
          {/* Main Dashboard Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TransactionHistory activeNetwork={activeNetwork} />
            <YieldOpportunities activeNetwork={activeNetwork} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
