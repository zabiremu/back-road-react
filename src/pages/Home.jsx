import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Service from "../components/Service/Service";
import Tour from "../components/Tour/Tour";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Tour />
      <Footer />
    </div>
  );
};

export default Home;
