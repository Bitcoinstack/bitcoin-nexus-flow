
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  RadioGroup,
  RadioGroupItem
} from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

interface YieldOption {
  id: string;
  name: string;
  provider: string;
  apy: number;
  minAmount: number;
  risk: 'Low' | 'Medium' | 'High';
  lockPeriod: string;
  staked: boolean;
}

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

const YieldOpportunities = () => {
  const { toast } = useToast();
  const [opportunities, setOpportunities] = useState<YieldOption[]>([
    { id: 'y1', name: 'BTC Staking', provider: 'Bitcoin Labs', apy: 2.5, minAmount: 0.01, risk: 'Low', lockPeriod: 'No lock', staked: false },
    { id: 'y2', name: 'BTC Lending', provider: 'Satoshi Finance', apy: 3.8, minAmount: 0.1, risk: 'Medium', lockPeriod: '30 days', staked: false },
    { id: 'y3', name: 'BTC/USDT LP', provider: 'Bitcoin DEX', apy: 5.2, minAmount: 0.05, risk: 'Medium', lockPeriod: 'No lock', staked: false },
    { id: 'y4', name: 'BTC Mining', provider: 'Hash Power', apy: 4.2, minAmount: 0.01, risk: 'Medium', lockPeriod: 'No lock', staked: false },
  ]);
  const [openDialogId, setOpenDialogId] = useState<string | null>(null);
  const [stakedAmount, setStakedAmount] = useState<Record<string, number>>({});
  const [selectedLockPeriods, setSelectedLockPeriods] = useState<Record<string, string>>({});

  // Initialize form with react-hook-form
  const form = useForm<StakeFormValues>({
    resolver: zodResolver(stakeFormSchema),
    defaultValues: {
      amount: "",
      lockPeriod: "3weeks"
    },
  });

  const handleOpenDialog = (id: string) => {
    setOpenDialogId(id);
    // Reset form when opening dialog
    form.reset({
      amount: stakedAmount[id]?.toString() || "",
      lockPeriod: selectedLockPeriods[id] || "3weeks"
    });
  };

  const handleCloseDialog = () => {
    setOpenDialogId(null);
  };

  const handleStake = (id: string) => {
    // If already staked, open dialog for withdrawal
    if (opportunities.find(opp => opp.id === id)?.staked) {
      handleUnstake(id);
      return;
    }
    
    // If not staked, open dialog to stake
    handleOpenDialog(id);
  };

  const handleUnstake = (id: string) => {
    setOpportunities(prevOpportunities => 
      prevOpportunities.map(opportunity => 
        opportunity.id === id 
          ? { ...opportunity, staked: false } 
          : opportunity
      )
    );

    // Remove staked amount record
    const newStakedAmounts = { ...stakedAmount };
    delete newStakedAmounts[id];
    setStakedAmount(newStakedAmounts);

    // Remove lock period record
    const newLockPeriods = { ...selectedLockPeriods };
    delete newLockPeriods[id];
    setSelectedLockPeriods(newLockPeriods);

    const opportunity = opportunities.find(opp => opp.id === id);
    if (opportunity) {
      toast({
        title: `Unstaked from ${opportunity.name}`,
        description: "Your funds have been returned to your wallet",
        variant: "default",
      });
    }
  };

  const onSubmitStakeForm = (values: StakeFormValues) => {
    if (!openDialogId) return;

    const amount = parseFloat(values.amount);
    const lockPeriod = values.lockPeriod;
    const lockPeriodDisplay = lockPeriod === "3weeks" ? "3 Weeks" : lockPeriod === "6weeks" ? "6 Weeks" : "3 Months";
    
    // Update opportunities state
    setOpportunities(prevOpportunities => 
      prevOpportunities.map(opportunity => 
        opportunity.id === openDialogId 
          ? { ...opportunity, staked: true, lockPeriod: lockPeriodDisplay } 
          : opportunity
      )
    );

    // Store staked amount and lock period
    setStakedAmount(prev => ({ ...prev, [openDialogId]: amount }));
    setSelectedLockPeriods(prev => ({ ...prev, [openDialogId]: lockPeriod }));

    const opportunity = opportunities.find(opp => opp.id === openDialogId);
    if (opportunity) {
      toast({
        title: `Successfully staked in ${opportunity.name}`,
        description: `Your stake of ${amount} BTC is now earning ${opportunity.apy}% APY for ${lockPeriodDisplay}`,
        variant: "default",
      });
    }

    handleCloseDialog();
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
    <div className="bg-black/40 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/10 flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg sm:text-xl font-bold">Yield Opportunities</h3>
        <Button variant="outline" size="sm" className="border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white text-xs">
          Optimize Yield
        </Button>
      </div>
      
      <div className="space-y-4">
        {opportunities.length > 0 ? (
          opportunities.map((option) => (
            <div key={option.id} className="bg-black/50 rounded-lg p-3 sm:p-4 border border-white/5 hover:border-bitcoin/30 transition-all">
              <div className="flex justify-between items-start flex-wrap sm:flex-nowrap gap-2">
                <div>
                  <h4 className="font-medium text-white">{option.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-400">Provider: {option.provider}</p>
                </div>
                <div className="flex items-center bg-bitcoin/10 text-bitcoin px-3 py-1 rounded-full text-xs sm:text-sm">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  <span className="font-medium">{option.apy}% APY</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3 text-xs sm:text-sm">
                <div>
                  <p className="text-gray-400">Min Amount</p>
                  <p className="font-medium">{option.minAmount} BTC</p>
                </div>
                <div>
                  <p className="text-gray-400">Risk Level</p>
                  <p className="font-medium">{option.risk}</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-gray-400">Lock Period</p>
                  <p className="font-medium">
                    {option.staked && selectedLockPeriods[option.id] ? 
                      getLockPeriodLabel(selectedLockPeriods[option.id]) : 
                      option.lockPeriod}
                  </p>
                </div>
              </div>
              
              {option.staked && stakedAmount[option.id] && (
                <div className="mt-2">
                  <p className="text-gray-400 text-xs">Staked Amount</p>
                  <p className="font-medium text-sm">{stakedAmount[option.id]} BTC</p>
                </div>
              )}
              
              <div className="flex justify-end mt-3">
                <Button 
                  size="sm" 
                  className={option.staked 
                    ? "bg-gray-700 hover:bg-gray-600 text-white text-xs" 
                    : "bg-bitcoin hover:bg-bitcoin-dark text-white text-xs"
                  }
                  onClick={() => handleStake(option.id)}
                >
                  {option.staked ? "Unstake" : "Stake BTC"}
                </Button>
              </div>

              {/* Staking Dialog */}
              <Dialog open={openDialogId === option.id} onOpenChange={(open) => !open && handleCloseDialog()}>
                <DialogContent className="bg-black/90 border border-white/10">
                  <DialogHeader>
                    <DialogTitle className="text-white">{option.name} - Stake BTC</DialogTitle>
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
                                placeholder={`Min: ${option.minAmount} BTC`}
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
                                <Card className="bg-black/50 border border-white/10">
                                  <CardContent className="p-3">
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem value="3weeks" id="r1" className="text-bitcoin border-white/50" />
                                      <Label htmlFor="r1" className="text-white">3 Weeks</Label>
                                    </div>
                                  </CardContent>
                                </Card>
                                <Card className="bg-black/50 border border-white/10">
                                  <CardContent className="p-3">
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem value="6weeks" id="r2" className="text-bitcoin border-white/50" />
                                      <Label htmlFor="r2" className="text-white">6 Weeks</Label>
                                    </div>
                                  </CardContent>
                                </Card>
                                <Card className="bg-black/50 border border-white/10">
                                  <CardContent className="p-3">
                                    <div className="flex items-center space-x-2">
                                      <RadioGroupItem value="3months" id="r3" className="text-bitcoin border-white/50" />
                                      <Label htmlFor="r3" className="text-white">3 Months</Label>
                                    </div>
                                  </CardContent>
                                </Card>
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
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-gray-400">
            No yield opportunities available
          </div>
        )}
      </div>
    </div>
  );
};

export default YieldOpportunities;
