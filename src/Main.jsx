import React from "react";
import Bottom from "./components/HomePage/Bottom";
import Footer from "./components/HomePage/Footer";
import Map from "./components/HomePage/Map";
import Navbar from "./components/HomePage/Navbar";
import Support from "./components/HomePage/Support";
import Wrapper from "./components/HomePage/Wrapper";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Support />
      <Wrapper />
      <Map />
      <Bottom />
      <Footer />
    </div>
  );
};

export default Main;
