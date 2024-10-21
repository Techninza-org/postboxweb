import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TermCon from "./pages/Term/TermCon";
import Refundpolicy from "./pages/Term/Refundpolicy";
import Privacy from "./pages/Term/Privacy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/term" element={<TermCon />} />
        <Route path="/refundpolicy" element={<Refundpolicy />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;
