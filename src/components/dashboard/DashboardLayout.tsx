
import React from 'react';
import DashboardNavbar from './DashboardNavbar';
import BalanceSummary from './BalanceSummary';
import TransactionHistory from './TransactionHistory';
import YieldOpportunities from './YieldOpportunities';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
      <DashboardNavbar />
      
      <main className="container mx-auto px-4 py-4 sm:py-8">
        <div className="flex flex-col gap-4 sm:gap-8 max-w-7xl mx-auto">
          
          {/* Balance Summary */}
          <BalanceSummary />
          
          {/* Main Dashboard Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
            <TransactionHistory />
            <YieldOpportunities />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
