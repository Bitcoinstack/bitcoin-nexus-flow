
import React from 'react';
import { Bitcoin, Lightning } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type NetworkType = 'lightning' | 'liquid' | 'rootstock';

interface NetworkSelectorProps {
  activeNetwork: NetworkType;
  setActiveNetwork: (network: NetworkType) => void;
}

const NetworkSelector = ({ activeNetwork, setActiveNetwork }: NetworkSelectorProps) => {
  const networks = [
    {
      id: 'lightning' as NetworkType,
      name: 'Lightning',
      icon: <Lightning className="h-5 w-5" />,
      color: 'text-yellow-400',
      fees: 'Very Low',
      speed: 'Instant',
      description: 'Fast payment channels with minimal fees'
    },
    {
      id: 'liquid' as NetworkType,
      name: 'Liquid',
      icon: <Bitcoin className="h-5 w-5" />,
      color: 'text-blue-400',
      fees: 'Low',
      speed: 'Minutes',
      description: 'Sidechains for confidential transactions'
    },
    {
      id: 'rootstock' as NetworkType,
      name: 'Rootstock',
      icon: <Bitcoin className="h-5 w-5" />,
      color: 'text-green-400',
      fees: 'Medium',
      speed: 'Minutes',
      description: 'Smart contracts and DeFi on Bitcoin'
    }
  ];

  return (
    <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10">
      <h2 className="text-2xl font-bold mb-6">Layer 2 Networks</h2>
      
      <ToggleGroup 
        type="single" 
        value={activeNetwork}
        onValueChange={(value) => {
          if (value) setActiveNetwork(value as NetworkType);
        }}
        className="flex flex-wrap gap-4 justify-center"
      >
        {networks.map((network) => (
          <ToggleGroupItem
            key={network.id}
            value={network.id}
            className={`
              network-selector flex flex-col items-center p-6 rounded-xl border border-white/10
              ${activeNetwork === network.id ? 'active-network' : 'hover:bg-white/5'}
              transition-all duration-200 w-full sm:w-auto
            `}
          >
            <div className={`p-3 rounded-full bg-white/5 mb-3 ${network.color}`}>
              {network.icon}
            </div>
            <h3 className="text-xl font-medium">{network.name}</h3>
            <p className="text-sm text-gray-400 mt-2">{network.description}</p>
            <div className="mt-4 flex gap-4 text-xs">
              <span className="px-2 py-1 bg-white/10 rounded-full">Fee: {network.fees}</span>
              <span className="px-2 py-1 bg-white/10 rounded-full">Speed: {network.speed}</span>
            </div>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
};

export default NetworkSelector;
