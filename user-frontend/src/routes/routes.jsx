import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmergencyHomePage from "../pages/Home.jsx";
import RequestHelpForm from "@/pages/RequestHelpForm.jsx";
import TrackRequest from "@/pages/dasboard.jsx";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmergencyHomePage />} />
        <Route path="/reguest-help" element={<RequestHelpForm />} />
        <Route path="/track-request" element={<TrackRequest />} />
      </Routes>
    </Router>
  );
}
