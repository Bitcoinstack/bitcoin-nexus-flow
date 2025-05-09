
import React from 'react';
import { Link } from 'react-router-dom';
import { Bitcoin, Settings, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DashboardNavbar = () => {
  return (
    <nav className="bg-black/90 backdrop-blur-sm border-b border-bitcoin/20 py-3 px-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/dashboard" className="flex items-center gap-2">
            <Bitcoin className="h-8 w-8 text-bitcoin animate-spin-slow" />
            <span className="text-2xl font-bold text-white">BTCstack</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/dashboard" className="text-white hover:text-bitcoin transition-colors">Dashboard</Link>
          <Link to="/dashboard/yield-optimizer" className="text-white hover:text-bitcoin transition-colors">Yield Optimizer</Link>
          <Link to="/dashboard/swap" className="text-white hover:text-bitcoin transition-colors">Swap</Link>
          <Link to="/dashboard/bridge" className="text-white hover:text-bitcoin transition-colors">Bridge</Link>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="border-bitcoin/50 text-bitcoin hover:bg-bitcoin/10">
            <Wallet className="w-4 h-4 mr-2" />
            0x12...A8B9
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
