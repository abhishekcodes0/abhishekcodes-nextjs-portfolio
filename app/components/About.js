import React from "react";
import { bebas } from "../fonts";
import Paragraph from "./Paragraph/Paragraph";

const About = () => {
  return (
    <section
      className="w-screen min-h-screen p-4 pb-24 lg:p-48 md:pt-4 bg-gray-100 flex flex-col items-center relative"
      id="about"
    >
      <div
        className={
          "text-center text-6xl font-bold mt-12 mb-12" + " " + bebas.className
        }
      >
        About Me
      </div>{" "}
      <Paragraph value="Hello! I'm Abhishek Singh, a seasoned Full-Stack Developer with five years of experience in crafting sleek, responsive web applications tailored to user needs. Skilled in React, Tailwind CSS, Next.js, Node.js, Express, and MongoDB, I excel at turning complex challenges into user-friendly solutions. Beyond coding, I enjoy sharing insights and stories from my coding journey on my blog. Eager to collaborate and create something impactful together! Let’s connect and explore how we can drive innovation." />{" "}
    </section>
  );
};

export default About;
