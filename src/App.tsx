
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import Prices from "./pages/Prices";
import Masters from "./pages/Masters";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Refrigerators from "./pages/Refrigerators";
import WashingMachines from "./pages/WashingMachines";
import Dishwashers from "./pages/Dishwashers";
import Microwaves from "./pages/Microwaves";
import Emergency from "./pages/Emergency";
import Diagnostics from "./pages/Diagnostics";
import SpareParts from "./pages/SpareParts";
import Maintenance from "./pages/Maintenance";
import Installation from "./pages/Installation";
import Consultation from "./pages/Consultation";
import Brands from "./pages/Brands";
import ServiceAreas from "./pages/ServiceAreas";
import Appointment from "./pages/Appointment";
import TechnicalSupport from "./pages/TechnicalSupport";
import RepairHistory from "./pages/RepairHistory";
import Calculator from "./pages/Calculator";
import Ovens from "./pages/Ovens";
import Cooktops from "./pages/Cooktops";
import SmallAppliances from "./pages/SmallAppliances";
import Testimonials from "./pages/Testimonials";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/masters" element={<Masters />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/refrigerators" element={<Refrigerators />} />
          <Route path="/washing-machines" element={<WashingMachines />} />
          <Route path="/dishwashers" element={<Dishwashers />} />
          <Route path="/microwaves" element={<Microwaves />} />
          <Route path="/ovens" element={<Ovens />} />
          <Route path="/cooktops" element={<Cooktops />} />
          <Route path="/small-appliances" element={<SmallAppliances />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/spare-parts" element={<SpareParts />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/support" element={<TechnicalSupport />} />
          <Route path="/history" element={<RepairHistory />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/testimonials" element={<Testimonials />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
