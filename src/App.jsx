import React from "react";

import Navbar from "./compontent/Navbar";
import Hero from "./compontent/Hero/Hero";
import { Banner, Banner1 } from "./compontent/Banner/Banner";
import { Content, Content1, Content2 } from "./compontent/main/Content";
import Footer from "./compontent/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <Content />
      <Content1 />
      <Content2 />
      <Banner1 />
      <Footer />
    </>
  );
}

export default App;
