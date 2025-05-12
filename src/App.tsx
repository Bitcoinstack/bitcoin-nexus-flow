
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import YieldOptimizerPage from "./pages/YieldOptimizerPage";
import NotFound from "./pages/NotFound";
import SwapPage from "./pages/SwapPage";
import BridgePage from "./pages/BridgePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/yield-optimizer" element={<YieldOptimizerPage />} />
          <Route path="/dashboard/swap" element={<SwapPage />} />
          <Route path="/dashboard/bridge" element={<BridgePage />} />
          {/* Redirect missing routes to 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
