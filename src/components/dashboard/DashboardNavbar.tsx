
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bitcoin, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DashboardNavbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

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
          <Link 
            to="/dashboard" 
            className={`transition-colors ${isActive('/dashboard') && !isActive('/dashboard/yield-optimizer') ? 'text-bitcoin' : 'text-white hover:text-bitcoin'}`}
          >
            Dashboard
          </Link>
          <Link 
            to="/dashboard/yield-optimizer" 
            className={`transition-colors ${isActive('/dashboard/yield-optimizer') ? 'text-bitcoin' : 'text-white hover:text-bitcoin'}`}
          >
            Yield Optimizer
          </Link>
          <Link to="/dashboard/swap" className="text-white hover:text-bitcoin transition-colors">
            Swap
          </Link>
          <Link to="/dashboard/bridge" className="text-white hover:text-bitcoin transition-colors">
            Bridge
          </Link>
        </div>
        
        <div className="flex items-center">
          <Button variant="outline" size="sm" className="border-bitcoin/50 text-bitcoin hover:bg-bitcoin/10">
            <LinkIcon className="w-4 h-4 mr-2" />
            Connect Wallet
          </Button>
        </div>
      </div>
      
      {/* Mobile navigation */}
      <div className="md:hidden flex overflow-x-auto gap-4 pt-3 pb-1 px-2 scrollbar-none">
        <Link 
          to="/dashboard" 
          className={`whitespace-nowrap px-3 py-1 rounded-full ${isActive('/dashboard') && !isActive('/dashboard/yield-optimizer') ? 'bg-bitcoin text-white' : 'text-white bg-black/50'}`}
        >
          Dashboard
        </Link>
        <Link 
          to="/dashboard/yield-optimizer" 
          className={`whitespace-nowrap px-3 py-1 rounded-full ${isActive('/dashboard/yield-optimizer') ? 'bg-bitcoin text-white' : 'text-white bg-black/50'}`}
        >
          Yield Optimizer
        </Link>
        <Link 
          to="/dashboard/swap" 
          className="whitespace-nowrap px-3 py-1 rounded-full text-white bg-black/50"
        >
          Swap
        </Link>
        <Link 
          to="/dashboard/bridge" 
          className="whitespace-nowrap px-3 py-1 rounded-full text-white bg-black/50"
        >
          Bridge
        </Link>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
