import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import AddMedicine from "./pages/AddMedicine";
import GiveAway from "./pages/GiveAway";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/add" element={<AddMedicine />} />
        <Route path="/give-away" element={<GiveAway />} />
      </Routes>
    </BrowserRouter>
  );
}