
import React, { useState } from 'react';
import { Bitcoin, ArrowRightLeft, ChevronDown, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';

type Network = {
  id: string;
  name: string;
  icon: React.ElementType;
  symbol: string;
};

const BridgePage = () => {
  const [amount, setAmount] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSourceNetworkOpen, setIsSourceNetworkOpen] = useState<boolean>(false);
  const [isDestNetworkOpen, setIsDestNetworkOpen] = useState<boolean>(false);
  
  const [sourceNetwork, setSourceNetwork] = useState<Network>({
    id: 'btc',
    name: 'Bitcoin Network',
    icon: Bitcoin,
    symbol: 'BTC',
  });
  
  const [destNetwork, setDestNetwork] = useState<Network>({
    id: 'eth',
    name: 'Ethereum Network',
    icon: Bitcoin,
    symbol: 'ETH',
  });
  
  const { toast } = useToast();
  
  const networks: Network[] = [
    {
      id: 'btc',
      name: 'Bitcoin Network',
      icon: Bitcoin,
      symbol: 'BTC',
    },
    {
      id: 'eth',
      name: 'Ethereum Network',
      icon: Bitcoin,
      symbol: 'ETH',
    },
    {
      id: 'bnb',
      name: 'Binance Smart Chain',
      icon: Bitcoin,
      symbol: 'BNB',
    },
  ];

  const switchNetworks = () => {
    const temp = sourceNetwork;
    setSourceNetwork(destNetwork);
    setDestNetwork(temp);
  };

  const handleBridge = () => {
    if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount to bridge.",
        variant: "destructive",
      });
      return;
    }

    if (parseFloat(amount) > 10) { // Mock limit check
      toast({
        title: "Exceeds limit",
        description: `Maximum bridge amount is 10 ${sourceNetwork.symbol}.`,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate network delay
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Bridge initiated!",
        description: `Bridging ${amount} ${sourceNetwork.symbol} from ${sourceNetwork.name} to ${destNetwork.name}. This may take 10-30 minutes to complete.`,
      });
      
      // Reset form
      setAmount('');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
      <DashboardNavbar />
      
      <main className="container mx-auto px-4 py-8 max-w-md">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-5 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Bridge</h1>
            <Bitcoin className="h-6 w-6 text-bitcoin" />
          </div>
          
          {/* Source Network Selection */}
          <div className="mb-6">
            <Label htmlFor="source-network" className="block text-sm text-gray-300 mb-2">From</Label>
            <Dialog open={isSourceNetworkOpen} onOpenChange={setIsSourceNetworkOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full bg-gray-700/50 border-gray-600 hover:bg-gray-700 text-white justify-start h-14"
                  id="source-network"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-600 p-2 rounded-full">
                      <sourceNetwork.icon className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">{sourceNetwork.name}</div>
                      <div className="text-xs text-gray-300">{sourceNetwork.symbol}</div>
                    </div>
                  </div>
                  <ChevronDown className="h-4 w-4 ml-auto" />
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-800 border-gray-700 text-white p-0">
                <Command className="bg-transparent border-none">
                  <CommandInput placeholder="Search networks..." className="border-b border-gray-700" />
                  <CommandList>
                    <CommandEmpty>No network found.</CommandEmpty>
                    <CommandGroup>
                      {networks.map((network) => (
                        <CommandItem
                          key={network.id}
                          onSelect={() => {
                            setSourceNetwork(network);
                            setIsSourceNetworkOpen(false);
                          }}
                          className="flex items-center gap-3 py-3 cursor-pointer hover:bg-gray-700"
                        >
                          <div className="bg-gray-600 p-2 rounded-full">
                            <network.icon className="h-5 w-5" />
                          </div>
                          <div className="text-left">
                            <div className="font-medium">{network.name}</div>
                            <div className="text-xs text-gray-300">{network.symbol}</div>
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </DialogContent>
            </Dialog>
          </div>
          
          {/* Switch Direction Button */}
          <div className="flex justify-center -my-2 relative z-10 mb-4">
            <Button
              variant="outline"
              size="icon"
              onClick={switchNetworks}
              className="h-10 w-10 rounded-full bg-gray-700 border-gray-600 hover:bg-gray-600"
            >
              <ArrowRightLeft className="h-4 w-4 text-bitcoin" />
            </Button>
          </div>
          
          {/* Destination Network Selection */}
          <div className="mb-6">
            <Label htmlFor="dest-network" className="block text-sm text-gray-300 mb-2">To</Label>
            <Dialog open={isDestNetworkOpen} onOpenChange={setIsDestNetworkOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full bg-gray-700/50 border-gray-600 hover:bg-gray-700 text-white justify-start h-14"
                  id="dest-network"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-600 p-2 rounded-full">
                      <destNetwork.icon className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium">{destNetwork.name}</div>
                      <div className="text-xs text-gray-300">{destNetwork.symbol}</div>
                    </div>
                  </div>
                  <ChevronDown className="h-4 w-4 ml-auto" />
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-800 border-gray-700 text-white p-0">
                <Command className="bg-transparent border-none">
                  <CommandInput placeholder="Search networks..." className="border-b border-gray-700" />
                  <CommandList>
                    <CommandEmpty>No network found.</CommandEmpty>
                    <CommandGroup>
                      {networks
                        .filter(network => network.id !== sourceNetwork.id)
                        .map((network) => (
                        <CommandItem
                          key={network.id}
                          onSelect={() => {
                            setDestNetwork(network);
                            setIsDestNetworkOpen(false);
                          }}
                          className="flex items-center gap-3 py-3 cursor-pointer hover:bg-gray-700"
                        >
                          <div className="bg-gray-600 p-2 rounded-full">
                            <network.icon className="h-5 w-5" />
                          </div>
                          <div className="text-left">
                            <div className="font-medium">{network.name}</div>
                            <div className="text-xs text-gray-300">{network.symbol}</div>
                          </div>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </DialogContent>
            </Dialog>
          </div>
          
          {/* Amount */}
          <div className="mb-6">
            <Label htmlFor="amount" className="block text-sm text-gray-300 mb-2">Amount</Label>
            <div className="bg-gray-700/50 rounded-lg p-4 flex items-center gap-3">
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="bg-transparent border-none text-xl font-bold text-white focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <div className="flex items-center gap-2 min-w-[80px]">
                <sourceNetwork.icon className="h-5 w-5" />
                <span>{sourceNetwork.symbol}</span>
              </div>
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-300">
              <span>Bridge Fee: 0.0005 {sourceNetwork.symbol}</span>
              <span>Balance: 0.42 {sourceNetwork.symbol}</span>
            </div>
          </div>
          
          {/* Bridge Details */}
          <div className="bg-gray-700/30 rounded-lg p-4 mb-6 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Estimated Time</span>
              <span className="text-white">10-30 minutes</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Recipient Address</span>
              <span className="text-white">0x12...A8B9</span>
            </div>
          </div>
          
          <Button
            className="w-full bg-bitcoin hover:bg-bitcoin/90 text-white font-bold py-6"
            onClick={handleBridge}
            disabled={!amount || parseFloat(amount) <= 0 || isLoading}
          >
            {isLoading ? "Processing..." : "Bridge"}
          </Button>
        </div>
      </main>
    </div>
  );
};

export default BridgePage;
