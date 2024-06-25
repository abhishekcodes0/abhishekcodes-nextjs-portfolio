import React from "react";
import { bebas } from "../fonts";

const Projects = () => {
  return (
    <section className="w-screen h-screen bg-white flex flex-col justify-center items-center">
      <div
        className={
          "text-center text-6xl font-bold mt-12 mb-12" + " " + bebas.className
        }
      >
        Projects
      </div>{" "}
    </section>
  );
};

export default Projects;
