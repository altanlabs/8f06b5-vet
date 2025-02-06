import { DatabaseProvider } from "@altanlabs/database";
import { ThemeProvider } from "@/theme/theme-provider";
import Layout from "./layout";
import { Toaster } from "@/components/ui/sonner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./pages";
import NotFound from "./pages/NotFound";

const config = {
  API_BASE_URL: "https://api.altan.ai/galaxia/hook/mSXDoZ",
  SAMPLE_TABLES: {
    service_areas: "5c525420-b94a-4fb1-9370-8784f53cc663",
    veterinary_services: "4748d2d3-b1f7-463e-a533-b637f199fc16",
    appointments: "2119d8da-ba87-4389-a310-a0d41132e354",
    pets: "2347dfa4-19cd-4fb4-bcc7-375bb121f92e",
    clients: "95bdcce8-8fb2-400b-9a4b-abdebabd89d3",
    veterinarian_availability: "6a2812b6-49e8-49e9-a9b8-9cf4515969fe"
  }
};

function App() {
  return (
    <DatabaseProvider config={config}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<IndexPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          <Toaster />
        </Router>
      </ThemeProvider>
    </DatabaseProvider>
  );
}

export default App;