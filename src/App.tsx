import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Analytics } from "./pages/Analytics";
import { Revenue } from "./pages/Revenue";
import { CRM } from "./pages/CRM";
import { PageNotFound } from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/revenue" element={<Revenue />} />
        <Route path="/crm" element={<CRM />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
