import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SwipeLandingWidget from "./widget/swipe/SwipeLandingWidget";
import WebHostingWidget from "./widget/hosting/WebHostingWidget";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/swipe-landing" />} />
        <Route path="/swipe-landing" element={<SwipeLandingWidget />} />
        <Route path="/web-hosting" element={<WebHostingWidget />} />
      </Routes>
    </Router>
  );
}

export default App;
