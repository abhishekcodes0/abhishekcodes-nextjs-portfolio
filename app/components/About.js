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
      <Paragraph value="Hi there! I'm Abhishek Singh, a front-end wizard with over four years of experience in conjuring up sleek, responsive web applications using React, Tailwind CSS, and a sprinkle of JavaScript magic. I love transforming complex challenges into user-friendly digital delights. When I'm not crafting code, you can find me sharing my coding adventures on my blog. Let's create something awesome together!" />{" "}
    </section>
  );
};

export default About;
