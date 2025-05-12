
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { Bitcoin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type LockPeriod = "3weeks" | "6weeks" | "3months";

interface StakedAmount {
  amount: number;
  lockPeriod: LockPeriod;
}

const YieldOpportunities = () => {
  const { toast } = useToast();
  const [isStakeModalOpen, setIsStakeModalOpen] = useState(false);
  const [stakingAmount, setStakingAmount] = useState("");
  const [selectedLockPeriod, setSelectedLockPeriod] = useState<LockPeriod>("3weeks");
  const [stakedAmounts, setStakedAmounts] = useState<StakedAmount[]>([]);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  
  const handleStake = () => {
    if (!stakingAmount || parseFloat(stakingAmount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount to stake.",
        variant: "destructive"
      });
      return;
    }
    
    const newStakedAmount: StakedAmount = {
      amount: parseFloat(stakingAmount),
      lockPeriod: selectedLockPeriod
    };
    
    setStakedAmounts([...stakedAmounts, newStakedAmount]);
    
    toast({
      title: "Staking successful",
      description: `You have staked ${stakingAmount} BTC for ${selectedLockPeriod === "3weeks" ? "3 weeks" : selectedLockPeriod === "6weeks" ? "6 weeks" : "3 months"}.`
    });
    
    setStakingAmount("");
    setIsStakeModalOpen(false);
  };
  
  const calculateTotalStaked = () => {
    return stakedAmounts.reduce((total, item) => total + item.amount, 0);
  };
  
  const handleUnstake = () => {
    if (stakedAmounts.length === 0) {
      toast({
        title: "No staked amounts",
        description: "You don't have any staked BTC to unstake.",
        variant: "destructive"
      });
      return;
    }
    
    const lastStakedAmount = stakedAmounts[stakedAmounts.length - 1];
    const newStakedAmounts = [...stakedAmounts];
    newStakedAmounts.pop();
    
    setStakedAmounts(newStakedAmounts);
    
    toast({
      title: "Unstaking successful",
      description: `You have unstaked ${lastStakedAmount.amount} BTC.`
    });
  };

  return (
    <div className="bg-gray-800/40 backdrop-blur-md rounded-xl border border-gray-700 p-4 sm:p-6 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg sm:text-xl font-bold text-white">Yield Opportunities</h3>
        <Button 
          variant="outline" 
          className="text-xs sm:text-sm border-bitcoin text-bitcoin hover:text-white hover:bg-bitcoin"
          onClick={() => toast({
            title: "Refreshing opportunities...",
            description: "Finding the best yield opportunities for you."
          })}
        >
          Refresh
        </Button>
      </div>
      
      {/* BTC Staking Card */}
      <div className="bg-gray-700/30 rounded-lg p-4 mb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-bitcoin/20 p-2 rounded-full">
            <Bitcoin className="h-6 w-6 text-bitcoin" />
          </div>
          <div>
            <h4 className="font-semibold text-white">BTC Staking</h4>
            <p className="text-sm text-gray-300">Earn 5.2% APY</p>
          </div>
          <div className="bg-green-500/10 text-green-500 text-xs px-2 py-1 rounded ml-auto">
            Low Risk
          </div>
        </div>
        
        {/* Staked amount display */}
        {calculateTotalStaked() > 0 && (
          <div className="mb-3 bg-gray-800/50 rounded p-3">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-300">Total Staked:</span>
              <span className="text-white font-medium">{calculateTotalStaked()} BTC</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400">Lock Period:</span>
              <span className="text-gray-300">
                {stakedAmounts[stakedAmounts.length - 1].lockPeriod === "3weeks" ? "3 Weeks" : 
                 stakedAmounts[stakedAmounts.length - 1].lockPeriod === "6weeks" ? "6 Weeks" : "3 Months"}
              </span>
            </div>
          </div>
        )}
        
        <div className="flex gap-2">
          <Dialog open={isStakeModalOpen} onOpenChange={setIsStakeModalOpen}>
            <DialogTrigger asChild>
              <Button className="flex-1 bg-bitcoin hover:bg-bitcoin/90">Stake BTC</Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-800 text-white border-gray-700">
              <DialogHeader>
                <DialogTitle>Stake BTC</DialogTitle>
                <DialogDescription className="text-gray-300">
                  Enter the amount of BTC you want to stake and choose a lock period to earn 5.2% APY.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Amount</label>
                  <div className="flex items-center">
                    <Input
                      type="number"
                      value={stakingAmount}
                      onChange={(e) => setStakingAmount(e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                      placeholder="0.0"
                    />
                    <span className="ml-2">BTC</span>
                  </div>
                  <p className="text-xs text-gray-400">Balance: 0.42 BTC</p>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Lock Period</label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button
                      variant={selectedLockPeriod === "3weeks" ? "default" : "outline"}
                      className={selectedLockPeriod === "3weeks" ? "bg-bitcoin" : "border-gray-600 text-gray-300"}
                      onClick={() => setSelectedLockPeriod("3weeks")}
                    >
                      3 Weeks
                    </Button>
                    <Button
                      variant={selectedLockPeriod === "6weeks" ? "default" : "outline"}
                      className={selectedLockPeriod === "6weeks" ? "bg-bitcoin" : "border-gray-600 text-gray-300"}
                      onClick={() => setSelectedLockPeriod("6weeks")}
                    >
                      6 Weeks
                    </Button>
                    <Button
                      variant={selectedLockPeriod === "3months" ? "default" : "outline"}
                      className={selectedLockPeriod === "3months" ? "bg-bitcoin" : "border-gray-600 text-gray-300"}
                      onClick={() => setSelectedLockPeriod("3months")}
                    >
                      3 Months
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <Button
                  variant="ghost"
                  onClick={() => setIsStakeModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-bitcoin hover:bg-bitcoin/90"
                  onClick={handleStake}
                >
                  Stake
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          
          <Button 
            variant="outline" 
            className="flex-1 border-gray-600"
            onClick={handleUnstake}
          >
            Unstake
          </Button>
        </div>
      </div>
      
      {/* rBTC/DOC LP Card */}
      <div className="bg-gray-700/30 rounded-lg p-4 mb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-bitcoin/20 p-2 rounded-full">
            <Bitcoin className="h-6 w-6 text-bitcoin" />
          </div>
          <div>
            <h4 className="font-semibold text-white">rBTC/DOC LP</h4>
            <p className="text-sm text-gray-300">Earn 12.8% APY</p>
          </div>
          <div className="bg-yellow-500/10 text-yellow-500 text-xs px-2 py-1 rounded ml-auto">
            Medium Risk
          </div>
        </div>
        
        <div className="flex gap-2">
          <Dialog open={isStakeModalOpen} onOpenChange={setIsStakeModalOpen}>
            <DialogTrigger asChild>
              <Button className="flex-1 bg-bitcoin hover:bg-bitcoin/90">Stake LP</Button>
            </DialogTrigger>
          </Dialog>
          
          <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="flex-1 border-gray-600 hover:bg-orange-500/20 hover:text-orange-500 hover:border-orange-500/40"
              >
                Details
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-800 text-white border-gray-700">
              <DialogHeader>
                <DialogTitle>rBTC/DOC LP Details</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-white">About this opportunity</h4>
                  <p className="text-sm text-gray-300">
                    The rBTC/DOC liquidity pool allows you to earn fees from traders who swap between rBTC and DOC tokens. 
                    By providing liquidity, you'll earn 0.3% of all trading fees proportional to your share of the pool, 
                    plus additional yield farming rewards.
                  </p>
                </div>
                
                <div className="bg-gray-700/50 rounded-lg p-3 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">APY:</span>
                    <span className="text-white font-medium">12.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Total Value Locked:</span>
                    <span className="text-white font-medium">$4.2M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Daily Volume:</span>
                    <span className="text-white font-medium">$245K</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-white">Risk Assessment</h4>
                  <p className="text-sm text-gray-300">
                    Medium risk due to potential impermanent loss if token prices diverge significantly. 
                    Smart contract risk is minimized through multiple audits and battle-tested code.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  className="bg-bitcoin hover:bg-bitcoin/90"
                  onClick={() => {
                    setIsDetailsOpen(false);
                    setIsStakeModalOpen(true);
                  }}
                >
                  Stake Now
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      {/* ETH/BTC Pool Card */}
      <div className="bg-gray-700/30 rounded-lg p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-bitcoin/20 p-2 rounded-full">
            <Bitcoin className="h-6 w-6 text-bitcoin" />
          </div>
          <div>
            <h4 className="font-semibold text-white">ETH/BTC Pool</h4>
            <p className="text-sm text-gray-300">Earn 8.5% APY</p>
          </div>
          <div className="bg-yellow-500/10 text-yellow-500 text-xs px-2 py-1 rounded ml-auto">
            Medium Risk
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button className="flex-1 bg-bitcoin hover:bg-bitcoin/90">Stake LP</Button>
          <Button 
            variant="outline" 
            className="flex-1 border-gray-600 hover:bg-orange-500/20 hover:text-orange-500 hover:border-orange-500/40"
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default YieldOpportunities;
