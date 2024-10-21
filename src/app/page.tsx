'use client';

import { ParticlesBackground } from "./components/ParticlesBackground";
import Grid from "./components/grid/Grid";
import { TextEffect } from "./components/TextEffect";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const Home = () => {

  return (
    <>
      <div className="min-h-screen flex justify-center items-center text-center">
        <ParticlesBackground />
        <header className="relative">
          <span className="uppercase tracking-widest text-xs text-center text-blue">welcome to my portfolio</span>
          <TextEffect
            words="Hello, World! I'm Hee Yup (Percy)."
          />
        </header>
      </div>
      <Grid />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
