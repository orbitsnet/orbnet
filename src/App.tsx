import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import InternetPlans from "./pages/InternetPlans";
import CableTV from "./pages/CableTV";
import BundleOffers from "./pages/BundleOffers";
import Coverage from "./pages/Coverage";
import About from "./pages/About";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import { PrivacyPolicy, TermsConditions, RefundPolicy, FairUsage, CookiePolicy, Disclaimer } from "./pages/Legal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/internet-plans" element={<InternetPlans />} />
          <Route path="/cable-tv" element={<CableTV />} />
          <Route path="/bundles" element={<BundleOffers />} />
          <Route path="/coverage" element={<Coverage />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/fair-usage" element={<FairUsage />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
