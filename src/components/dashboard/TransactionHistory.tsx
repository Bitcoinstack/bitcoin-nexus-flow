
import React from 'react';
import { Check, Clock, TrendingDown, TrendingUp } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface TransactionHistoryProps {
  activeNetwork: 'lightning' | 'liquid' | 'rootstock';
}

interface Transaction {
  id: string;
  type: 'send' | 'receive' | 'swap';
  amount: number;
  date: string;
  status: 'confirmed' | 'pending';
  fee: string;
  confirmTime: string;
}

const TransactionHistory = ({ activeNetwork }: TransactionHistoryProps) => {
  // Mock transaction data for each network
  const mockTransactions: Record<string, Transaction[]> = {
    lightning: [
      { id: 'tx1', type: 'receive', amount: 0.05, date: '2025-05-08', status: 'confirmed', fee: '1 sat', confirmTime: 'Instant' },
      { id: 'tx2', type: 'send', amount: 0.02, date: '2025-05-07', status: 'confirmed', fee: '2 sat', confirmTime: 'Instant' },
      { id: 'tx3', type: 'receive', amount: 0.01, date: '2025-05-05', status: 'confirmed', fee: '1 sat', confirmTime: 'Instant' },
    ],
    liquid: [
      { id: 'tx4', type: 'swap', amount: 0.3, date: '2025-05-09', status: 'confirmed', fee: '0.00001 BTC', confirmTime: '2 min' },
      { id: 'tx5', type: 'send', amount: 0.12, date: '2025-05-06', status: 'confirmed', fee: '0.00002 BTC', confirmTime: '2 min' },
    ],
    rootstock: [
      { id: 'tx6', type: 'receive', amount: 0.5, date: '2025-05-09', status: 'confirmed', fee: '0.00004 BTC', confirmTime: '5 min' },
      { id: 'tx7', type: 'send', amount: 0.15, date: '2025-05-08', status: 'pending', fee: '0.00003 BTC', confirmTime: '~5 min' },
    ]
  };

  const transactions = mockTransactions[activeNetwork] || [];

  return (
    <div className="bg-black/40 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/10 flex flex-col h-full">
      <h3 className="text-lg sm:text-xl font-bold mb-4">Transaction History</h3>
      
      <div className="overflow-x-auto -mx-4 px-4">
        <Table>
          <TableHeader className="bg-black/40">
            <TableRow className="border-b border-white/10">
              <TableHead className="text-white">Type</TableHead>
              <TableHead className="text-white">Amount</TableHead>
              <TableHead className="text-white hidden sm:table-cell">Date</TableHead>
              <TableHead className="text-white">Status</TableHead>
              <TableHead className="text-white text-right hidden md:table-cell">Network Fee</TableHead>
              <TableHead className="text-white text-right hidden sm:table-cell">Confirm Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.length > 0 ? (
              transactions.map((tx) => (
                <TableRow key={tx.id} className="border-b border-white/5">
                  <TableCell className="py-3">
                    <div className="flex items-center gap-2">
                      {tx.type === 'receive' ? (
                        <TrendingUp className="h-4 w-4 text-green-400" />
                      ) : tx.type === 'send' ? (
                        <TrendingDown className="h-4 w-4 text-red-400" />
                      ) : (
                        <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      )}
                      <span className="capitalize">{tx.type}</span>
                    </div>
                  </TableCell>
                  <TableCell className={tx.type === 'receive' ? 'text-green-400' : 'text-red-400'}>
                    {tx.type === 'receive' ? '+' : '-'}{tx.amount} BTC
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">{tx.date}</TableCell>
                  <TableCell>
                    {tx.status === 'confirmed' ? (
                      <div className="flex items-center">
                        <Check className="h-4 w-4 text-green-400 mr-1" />
                        <span className="hidden sm:inline">Confirmed</span>
                        <span className="sm:hidden">✓</span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="hidden sm:inline">Pending</span>
                        <span className="sm:hidden">⌛</span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="text-right hidden md:table-cell">{tx.fee}</TableCell>
                  <TableCell className="text-right hidden sm:table-cell">{tx.confirmTime}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-6 text-gray-400">
                  No transactions found on {activeNetwork} network
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      <div className="flex justify-between items-center mt-4 text-xs sm:text-sm text-gray-400">
        <span>Showing {transactions.length} transactions</span>
        <div>
          <span className="text-bitcoin underline cursor-pointer hover:text-bitcoin-dark">View all</span>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
