
import React, { useState } from 'react';
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, TrendingDown, Check, Info } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
  DialogDescription
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  RadioGroup,
  RadioGroupItem
} from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const YieldOptimizerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
      <DashboardNavbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Yield Optimizer</h1>
          <p className="text-gray-400 mb-8">Maximize your Bitcoin returns across Layer 2 networks</p>
          
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10 mb-8">
            <h2 className="text-xl font-semibold mb-4">Portfolio Optimization</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-black/50 p-4 rounded-lg border border-white/10">
                <h3 className="text-gray-400 text-sm">Current APY</h3>
                <p className="text-2xl font-bold">3.2%</p>
              </div>
              <div className="bg-black/50 p-4 rounded-lg border border-white/10">
                <h3 className="text-gray-400 text-sm">Optimized APY</h3>
                <p className="text-2xl font-bold text-green-400">6.8%</p>
              </div>
              <div className="bg-black/50 p-4 rounded-lg border border-white/10">
                <h3 className="text-gray-400 text-sm">Potential Gain</h3>
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-green-400 mr-1" />
                  <p className="text-2xl font-bold text-green-400">+112%</p>
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-bitcoin hover:bg-bitcoin-dark text-white">
              Optimize Now
            </Button>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="all">All Networks</TabsTrigger>
              <TabsTrigger value="lightning">Lightning</TabsTrigger>
              <TabsTrigger value="liquid">Liquid</TabsTrigger>
              <TabsTrigger value="rootstock">Rootstock</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4">
              <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Best Yield Opportunities</h2>
                  <Button variant="outline" size="sm" className="border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white">
                    Compare All
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {/* Top opportunities across all networks */}
                  <YieldCard 
                    name="rBTC/DOC LP" 
                    provider="RSK Swap" 
                    network="Rootstock"
                    apy={7.5} 
                    risk="High"
                    recommended={true}
                    details="The rBTC/DOC LP on RSK Swap is a liquidity pair between Bitcoin on Rootstock (rBTC) and Dollar On Chain (DOC). By providing liquidity, you earn trading fees from people swapping between these assets."
                  />
                  
                  <YieldCard 
                    name="L-BTC/USDT LP" 
                    provider="Liquid DEX" 
                    network="Liquid"
                    apy={5.2} 
                    risk="Medium"
                    recommended={true}
                    details="The L-BTC/USDT LP on Liquid DEX allows you to earn trading fees by providing liquidity between Liquid Bitcoin (L-BTC) and Tether (USDT)."
                  />
                  
                  <YieldCard 
                    name="rBTC Lending" 
                    provider="Sovryn" 
                    network="Rootstock"
                    apy={4.2} 
                    risk="Medium"
                    recommended={false}
                    details="Lend your rBTC on Sovryn and earn interest from borrowers. This is a relatively low-risk yield opportunity on the Rootstock network."
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="lightning" className="space-y-4">
              <YieldCard 
                name="Lightning Pool" 
                provider="Lightning Labs" 
                network="Lightning"
                apy={2.5} 
                risk="Low"
                recommended={true}
                details="Lightning Pool allows you to earn yield by providing liquidity to Lightning Network channels, enabling faster Bitcoin transfers."
              />
            </TabsContent>
            
            <TabsContent value="liquid" className="space-y-4">
              <YieldCard 
                name="L-BTC/USDT LP" 
                provider="Liquid DEX" 
                network="Liquid"
                apy={5.2} 
                risk="Medium"
                recommended={true}
                details="The L-BTC/USDT LP on Liquid DEX allows you to earn trading fees by providing liquidity between Liquid Bitcoin (L-BTC) and Tether (USDT)."
              />
              <YieldCard 
                name="L-BTC Staking" 
                provider="Liquid Network" 
                network="Liquid"
                apy={3.8} 
                risk="Medium"
                recommended={false}
                details="Stake your L-BTC on the Liquid Network to earn passive yield. This is a relatively secure way to earn on your Liquid Bitcoin holdings."
              />
            </TabsContent>
            
            <TabsContent value="rootstock" className="space-y-4">
              <YieldCard 
                name="rBTC/DOC LP" 
                provider="RSK Swap" 
                network="Rootstock"
                apy={7.5} 
                risk="High"
                recommended={true}
                details="The rBTC/DOC LP on RSK Swap is a liquidity pair between Bitcoin on Rootstock (rBTC) and Dollar On Chain (DOC). By providing liquidity, you earn trading fees from people swapping between these assets."
              />
              <YieldCard 
                name="rBTC Lending" 
                provider="Sovryn" 
                network="Rootstock"
                apy={4.2} 
                risk="Medium"
                recommended={false}
                details="Lend your rBTC on Sovryn and earn interest from borrowers. This is a relatively low-risk yield opportunity on the Rootstock network."
              />
              <YieldCard 
                name="Money on Chain" 
                provider="MOC" 
                network="Rootstock"
                apy={2.8} 
                risk="Low"
                recommended={false}
                details="Money on Chain provides a platform for earning yield on your rBTC through their decentralized finance products on the Rootstock network."
              />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

// Form schema for staking
const stakeFormSchema = z.object({
  amount: z
    .string()
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, {
      message: "Amount must be a positive number",
    }),
  lockPeriod: z.enum(["3weeks", "6weeks", "3months"], {
    required_error: "Please select a lock period",
  }),
});

type StakeFormValues = z.infer<typeof stakeFormSchema>;

interface YieldCardProps {
  name: string;
  provider: string;
  network: string;
  apy: number;
  risk: string;
  recommended: boolean;
  details: string;
}

const YieldCard = ({ name, provider, network, apy, risk, recommended, details }: YieldCardProps) => {
  const { toast } = useToast();
  const [isStaked, setIsStaked] = useState(false);
  const [stakedAmount, setStakedAmount] = useState<number | null>(null);
  const [selectedLockPeriod, setSelectedLockPeriod] = useState<string | null>(null);
  const [openStakeDialog, setOpenStakeDialog] = useState(false);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  // Initialize form with react-hook-form
  const form = useForm<StakeFormValues>({
    resolver: zodResolver(stakeFormSchema),
    defaultValues: {
      amount: "",
      lockPeriod: "3weeks"
    },
  });

  const handleStake = () => {
    if (isStaked) {
      // Handle unstake
      setIsStaked(false);
      setStakedAmount(null);
      setSelectedLockPeriod(null);
      toast({
        title: `Unstaked from ${name}`,
        description: "Your funds have been returned to your wallet",
        variant: "default",
      });
    } else {
      // Open stake dialog
      setOpenStakeDialog(true);
    }
  };

  const onSubmitStakeForm = (values: StakeFormValues) => {
    const amount = parseFloat(values.amount);
    const lockPeriod = values.lockPeriod;
    
    setIsStaked(true);
    setStakedAmount(amount);
    setSelectedLockPeriod(lockPeriod);
    setOpenStakeDialog(false);
    
    toast({
      title: `Successfully staked in ${name}`,
      description: `Your stake of ${amount} BTC is now earning ${apy}% APY for ${getLockPeriodLabel(lockPeriod)}`,
      variant: "default",
    });
  };

  const getLockPeriodLabel = (lockPeriod: string) => {
    switch (lockPeriod) {
      case "3weeks": return "3 Weeks";
      case "6weeks": return "6 Weeks";
      case "3months": return "3 Months";
      default: return lockPeriod;
    }
  };

  return (
    <div className="bg-black/50 rounded-lg p-5 border border-white/5 hover:border-bitcoin/30 transition-all">
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-white">{name}</h3>
            {recommended && (
              <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full flex items-center">
                <Check className="h-3 w-3 mr-1" /> Recommended
              </span>
            )}
          </div>
          <p className="text-sm text-gray-400">{provider} • {network}</p>
        </div>
        <div className="flex items-center bg-bitcoin/10 text-bitcoin px-3 py-1 rounded-full">
          <TrendingUp className="h-3 w-3 mr-1" />
          <span className="font-medium">{apy}% APY</span>
        </div>
      </div>
      
      <div className="flex justify-between mt-4">
        <div className="text-sm">
          <p className="text-gray-400">Risk Level</p>
          <div className="flex items-center mt-1">
            <div className={`h-2 w-2 rounded-full ${risk === 'Low' ? 'bg-green-400' : risk === 'Medium' ? 'bg-yellow-400' : 'bg-red-400'} mr-2`}></div>
            <span>{risk}</span>
          </div>
        </div>
        
        {isStaked && stakedAmount && (
          <div className="text-sm mr-auto ml-6">
            <p className="text-gray-400">Staked</p>
            <p className="font-medium">{stakedAmount} BTC • {selectedLockPeriod && getLockPeriodLabel(selectedLockPeriod)}</p>
          </div>
        )}
        
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="border-white/20 hover:border-bitcoin hover:text-bitcoin text-white"
            onClick={() => setOpenDetailsDialog(true)}
          >
            Details
          </Button>
          <Button 
            size="sm" 
            className={isStaked 
              ? "bg-gray-700 hover:bg-gray-600 text-white" 
              : "bg-bitcoin hover:bg-bitcoin-dark text-white"
            }
            onClick={handleStake}
          >
            {isStaked ? "Unstake" : "Stake"}
          </Button>
        </div>
      </div>

      {/* Staking Dialog */}
      <Dialog open={openStakeDialog} onOpenChange={setOpenStakeDialog}>
        <DialogContent className="bg-black/90 border border-white/10">
          <DialogHeader>
            <DialogTitle className="text-white">{name} - Stake BTC</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmitStakeForm)} className="space-y-4">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Amount (BTC)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Min: 0.01 BTC"
                        {...field}
                        className="bg-black/50 border-white/20 text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lockPeriod"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-white">Lock Period</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <div className="bg-black/50 border border-white/10 p-3 rounded-md">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="3weeks" id="r1" className="text-bitcoin border-white/50" />
                            <Label htmlFor="r1" className="text-white">3 Weeks</Label>
                          </div>
                        </div>
                        <div className="bg-black/50 border border-white/10 p-3 rounded-md">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="6weeks" id="r2" className="text-bitcoin border-white/50" />
                            <Label htmlFor="r2" className="text-white">6 Weeks</Label>
                          </div>
                        </div>
                        <div className="bg-black/50 border border-white/10 p-3 rounded-md">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="3months" id="r3" className="text-bitcoin border-white/50" />
                            <Label htmlFor="r3" className="text-white">3 Months</Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline" className="border-white/20 text-white">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit" className="bg-bitcoin hover:bg-bitcoin-dark text-white">
                  Stake
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Details Dialog */}
      <Dialog open={openDetailsDialog} onOpenChange={setOpenDetailsDialog}>
        <DialogContent className="bg-black/90 border border-white/10">
          <DialogHeader>
            <DialogTitle className="text-white">{name} - Details</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-2">
            <div>
              <h4 className="text-sm font-medium text-gray-400">Provider</h4>
              <p className="text-white">{provider}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-400">Network</h4>
              <p className="text-white">{network}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-400">APY</h4>
              <p className="text-white text-lg font-semibold text-bitcoin">{apy}%</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-400">Risk Level</h4>
              <div className="flex items-center mt-1">
                <div className={`h-2 w-2 rounded-full ${risk === 'Low' ? 'bg-green-400' : risk === 'Medium' ? 'bg-yellow-400' : 'bg-red-400'} mr-2`}></div>
                <span className="text-white">{risk}</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-400">Description</h4>
              <p className="text-white">{details}</p>
            </div>
          </div>
          
          <DialogFooter>
            <DialogClose asChild>
              <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default YieldOptimizerPage;
