import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmergencyHomePage from "../pages/Home.jsx";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmergencyHomePage />} />
        <Route path="/home" element={<EmergencyHomePage />} />
      </Routes>
    </Router>
  );
}
