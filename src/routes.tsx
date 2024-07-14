import { Route, Routes } from "react-router-dom";
import { CountryDetail } from "./app/CountryDetail";
import { Home } from "./app/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country" element={<CountryDetail />} />
    </Routes>
  );
}
