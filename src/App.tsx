import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Recipes from "./pages/Recipes";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Gift from "./pages/Gift";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/account/Login";
import Register from "./pages/account/Register";
import Account from "./pages/account/Account";
import BasketPage from "./pages/Basket";
// Import Office Pages
import { OfficeHome } from "./pages/office/OfficeHome";
import { OrderOffice } from "./pages/office/OrderOffice";
import { OfficeSuccess } from "./pages/office/OfficeSuccess";
import { OfficeDashboard } from "./pages/office/OfficeDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/baskets" element={<BasketPage />} />
          
          {/* Office Routes */}
          <Route path="/office" element={<OfficeHome />} />
          <Route path="/office/order" element={<OrderOffice />} />
          <Route path="/office/success" element={<OfficeSuccess />} />
          <Route path="/office/dashboard" element={<OfficeDashboard />} />
          <Route path="/office/contact" element={<Contact />} />
          <Route path="/office/faq" element={<About />} /> {/* You can create a separate FAQ page */}
          <Route path="/office/demo" element={<Contact />} />
          <Route path="/office/manage" element={<OfficeDashboard />} />

          {/* Account Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/*" element={<Account />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;