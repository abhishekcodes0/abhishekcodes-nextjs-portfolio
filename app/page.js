"use client";
import React from "react";

import Loader from "@/app/components/Loader/Loader";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <Loader />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Projects />
      <Contact />
    </main>
  );
}
