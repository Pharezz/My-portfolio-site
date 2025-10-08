import React from "react";
import Header from "./components/Header";
import Hero from "./sections/Hero"
import Projects from "./sections/Projects";
import Skills from "./sections/Stacks";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      {/* Header section*/}
      <Header />

      {/* Hero section */}
      <Hero/>

      {/* Projects section */}
      <Projects />

      {/* About section */}
      <About />

      {/* Skills section */}
      <Skills />

      {/* Contact section */}
      <Contact/>

      {/* Footer */}
      <Footer/>
    </>
  );
};

export default App;
