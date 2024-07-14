import { Route, Routes } from "react-router-dom";
import Home from "./app/Home";
import CountryDetail from "./app/CountryDetail";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:countryCode" element={<CountryDetail />} />
    </Routes>
  );
}
