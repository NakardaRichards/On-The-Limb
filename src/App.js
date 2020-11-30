import React from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Masthead from "./components/Masthead";
import Services from "./components/Services";
import Trainers from "./components/Trainers";
import Workouts from "./components/Workouts";
import Footer from "./components/Footer";
import Recommendations from "./components/Recommendations";
import TopNavbar from "./components/TopNavbar";

function App() {
  return (
    <section>
      <TopNavbar />
      <Masthead />
      <Services />
      <Workouts />
      <About />
      <Trainers />
      <Recommendations />
      <Contact />
      <Footer />
    </section>
  );
}

export default App;
