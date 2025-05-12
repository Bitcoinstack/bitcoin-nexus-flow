
import React, { useState, useEffect } from 'react';
import { Bitcoin, ArrowRightLeft, ChevronDown, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';

type Token = {
  symbol: string;
  name: string;
  icon: React.ElementType;
  balance: number;
};

const SwapPage = () => {
  const [fromAmount, setFromAmount] = useState<string>('');
  const [toAmount, setToAmount] = useState<string>('');
  const [fromToken, setFromToken] = useState<Token>({
    symbol: 'BTC',
    name: 'Bitcoin',
    icon: Bitcoin,
    balance: 0.42,
  });
  const [toToken, setToToken] = useState<Token>({
    symbol: 'USDT',
    name: 'Tether',
    icon: Bitcoin,
    balance: 14350.75,
  });
  const [slippageTolerance, setSlippageTolerance] = useState<number>(0.5);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFromDropdownOpen, setIsFromDropdownOpen] = useState<boolean>(false);
  const [isToDropdownOpen, setIsToDropdownOpen] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  
  const { toast } = useToast();

  const tokens: Token[] = [
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      icon: Bitcoin,
      balance: 0.42,
    },
    {
      symbol: 'USDT',
      name: 'Tether',
      icon: Bitcoin,
      balance: 14350.75,
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      icon: Bitcoin,
      balance: 5.18,
    },
    {
      symbol: 'BNB',
      name: 'Binance Coin',
      icon: Bitcoin,
      balance: 10.75,
    },
  ];

  useEffect(() => {
    if (fromAmount && !isNaN(parseFloat(fromAmount))) {
      // Simple mock exchange rate
      let rate = 1;
      if (fromToken.symbol === 'BTC' && toToken.symbol === 'USDT') {
        rate = 41250;
      } else if (fromToken.symbol === 'BTC' && toToken.symbol === 'ETH') {
        rate = 15;
      } else if (fromToken.symbol === 'BTC' && toToken.symbol === 'BNB') {
        rate = 115;
      } else if (fromToken.symbol === 'USDT' && toToken.symbol === 'BTC') {
        rate = 0.000024;
      } else if (fromToken.symbol === 'ETH' && toToken.symbol === 'BTC') {
        rate = 0.067;
      } else if (fromToken.symbol === 'BNB' && toToken.symbol === 'BTC') {
        rate = 0.0087;
      }
      
      const calculatedAmount = parseFloat(fromAmount) * rate;
      setToAmount(calculatedAmount.toFixed(calculatedAmount < 0.1 ? 8 : 2));
    } else {
      setToAmount('');
    }
  }, [fromAmount, fromToken.symbol, toToken.symbol]);

  const handleSwap = () => {
    if (!fromAmount || isNaN(parseFloat(fromAmount)) || parseFloat(fromAmount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount to swap.",
        variant: "destructive",
      });
      return;
    }

    if (parseFloat(fromAmount) > fromToken.balance) {
      toast({
        title: "Insufficient balance",
        description: `You don't have enough ${fromToken.symbol} to complete this swap.`,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate network delay
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Swap successful!",
        description: `Swapped ${fromAmount} ${fromToken.symbol} to ${toAmount} ${toToken.symbol}`,
      });
      
      // Reset form
      setFromAmount('');
      setToAmount('');
    }, 1500);
  };

  const switchTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  const calculateFee = () => {
    if (!fromAmount || isNaN(parseFloat(fromAmount))) return 0;
    return parseFloat(fromAmount) * 0.0025; // 0.25% fee
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
      <DashboardNavbar />
      
      <main className="container mx-auto px-4 py-8 max-w-md">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-5 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Swap</h1>
            <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700/50">
                  <Settings className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-800 border-gray-700 text-white">
                <DialogHeader>
                  <DialogTitle>Swap Settings</DialogTitle>
                </DialogHeader>
                <div className="space-y-6 py-4">
                  <div>
                    <p className="mb-3 text-sm text-gray-300">Slippage Tolerance</p>
                    <div className="flex flex-wrap gap-2">
                      {[0.1, 0.5, 1.0, 3.0].map((tolerance) => (
                        <Button
                          key={tolerance}
                          variant={slippageTolerance === tolerance ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSlippageTolerance(tolerance)}
                          className={slippageTolerance === tolerance ? "bg-bitcoin text-white" : "text-gray-300"}
                        >
                          {tolerance}%
                        </Button>
                      ))}
                      <div className="flex items-center">
                        <Input
                          type="number"
                          value={slippageTolerance}
                          onChange={(e) => setSlippageTolerance(Number(e.target.value))}
                          className="w-20 h-9 bg-gray-700 border-gray-600 text-white"
                        />
                        <span className="ml-2">%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
          {/* From Token Section */}
          <div className="bg-gray-700/50 rounded-lg p-4 mb-2">
            <div className="flex justify-between mb-2">
              <p className="text-sm text-gray-300">From</p>
              <p className="text-sm text-gray-300">Balance: {fromToken.balance} {fromToken.symbol}</p>
            </div>
            
            <div className="flex items-center gap-2">
              <Dialog open={isFromDropdownOpen} onOpenChange={setIsFromDropdownOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="bg-gray-600/50 border-gray-500 hover:bg-gray-600 text-white gap-2 min-w-[130px]">
                    <fromToken.icon className="h-5 w-5" />
                    {fromToken.symbol}
                    <ChevronDown className="h-4 w-4 ml-auto" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-800 border-gray-700 text-white p-0">
                  <Command className="bg-transparent border-none">
                    <CommandInput placeholder="Search token..." className="border-b border-gray-700" />
                    <CommandList>
                      <CommandEmpty>No token found.</CommandEmpty>
                      <CommandGroup>
                        {tokens.map((token) => (
                          <CommandItem
                            key={token.symbol}
                            onSelect={() => {
                              setFromToken(token);
                              setIsFromDropdownOpen(false);
                            }}
                            className="flex items-center gap-2 py-3 cursor-pointer hover:bg-gray-700"
                          >
                            <token.icon className="h-6 w-6" />
                            <span>{token.symbol}</span>
                            <span className="text-gray-400 ml-2">- {token.name}</span>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </DialogContent>
              </Dialog>
              
              <Input
                type="number"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                placeholder="0.00"
                className="bg-transparent border-none text-xl font-bold text-white focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-300 hover:text-white hover:bg-transparent p-0"
                onClick={() => setFromAmount(fromToken.balance.toString())}
              >
                MAX
              </Button>
            </div>
          </div>
          
          {/* Swap Direction Button */}
          <div className="flex justify-center -my-2 relative z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={switchTokens}
              className="h-8 w-8 rounded-full bg-gray-700 border-gray-600 hover:bg-gray-600"
            >
              <ArrowRightLeft className="h-4 w-4 text-bitcoin" />
            </Button>
          </div>
          
          {/* To Token Section */}
          <div className="bg-gray-700/50 rounded-lg p-4 mt-1 mb-4">
            <div className="flex justify-between mb-2">
              <p className="text-sm text-gray-300">To</p>
              <p className="text-sm text-gray-300">Balance: {toToken.balance} {toToken.symbol}</p>
            </div>
            
            <div className="flex items-center gap-2">
              <Dialog open={isToDropdownOpen} onOpenChange={setIsToDropdownOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="bg-gray-600/50 border-gray-500 hover:bg-gray-600 text-white gap-2 min-w-[130px]">
                    <toToken.icon className="h-5 w-5" />
                    {toToken.symbol}
                    <ChevronDown className="h-4 w-4 ml-auto" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-800 border-gray-700 text-white p-0">
                  <Command className="bg-transparent border-none">
                    <CommandInput placeholder="Search token..." className="border-b border-gray-700" />
                    <CommandList>
                      <CommandEmpty>No token found.</CommandEmpty>
                      <CommandGroup>
                        {tokens
                          .filter(token => token.symbol !== fromToken.symbol)
                          .map((token) => (
                          <CommandItem
                            key={token.symbol}
                            onSelect={() => {
                              setToToken(token);
                              setIsToDropdownOpen(false);
                            }}
                            className="flex items-center gap-2 py-3 cursor-pointer hover:bg-gray-700"
                          >
                            <token.icon className="h-6 w-6" />
                            <span>{token.symbol}</span>
                            <span className="text-gray-400 ml-2">- {token.name}</span>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </DialogContent>
              </Dialog>
              
              <Input
                type="number"
                value={toAmount}
                readOnly
                className="bg-transparent border-none text-xl font-bold text-white focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="0.00"
              />
            </div>
          </div>
          
          {/* Swap Details */}
          {fromAmount && parseFloat(fromAmount) > 0 && (
            <div className="bg-gray-700/30 rounded-lg p-3 mb-4 text-sm text-gray-300 space-y-1">
              <div className="flex justify-between">
                <span>Exchange Rate:</span>
                <span>1 {fromToken.symbol} ≈ {(parseFloat(toAmount) / parseFloat(fromAmount)).toFixed(toToken.symbol === 'USDT' ? 2 : 6)} {toToken.symbol}</span>
              </div>
              <div className="flex justify-between">
                <span>Swap Fee (0.25%):</span>
                <span>{calculateFee().toFixed(8)} {fromToken.symbol}</span>
              </div>
              <div className="flex justify-between">
                <span>Slippage Tolerance:</span>
                <span>{slippageTolerance}%</span>
              </div>
              <div className="flex justify-between font-medium text-white">
                <span>Minimum Received:</span>
                <span>{(parseFloat(toAmount) * (1 - slippageTolerance / 100)).toFixed(toToken.symbol === 'USDT' ? 2 : 6)} {toToken.symbol}</span>
              </div>
            </div>
          )}
          
          <Button
            className="w-full bg-bitcoin hover:bg-bitcoin/90 text-white font-bold py-6"
            onClick={handleSwap}
            disabled={!fromAmount || parseFloat(fromAmount) <= 0 || isLoading}
          >
            {isLoading ? "Swapping..." : "Swap"}
          </Button>
        </div>
      </main>
    </div>
  );
};

export default SwapPage;
