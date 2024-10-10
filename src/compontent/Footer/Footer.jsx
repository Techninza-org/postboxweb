import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Privacy from "../Term/Privacy";
import TermCon from "../Term/TermCon";
import Footer2 from "./Footer2";
const Footer = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Footer2 />} />
          <Route path="/termCon" element={<TermCon />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Footer;
