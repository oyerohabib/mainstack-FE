import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Analytics } from "./pages/Analytics";
import { Revenue } from "./pages/Revenue";
import { CRM } from "./pages/CRM";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/revenue" element={<Revenue />} />
        <Route path="/crm" element={<CRM />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
