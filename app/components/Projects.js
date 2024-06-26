"use client";

import { bebas } from "../fonts";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const data = [
  {
    title: "NodeJs Blog APIs",
    description:
      "RESTful blog API with Node.js, Express, and MongoDB. Enabling secure CRUD operations and efficient content management.",
    tags: ["Node.Js", "Express", "MongoDB", "AwS EC2"],
    imageUrl: "/node-blog-api.jpg",
    url: "https://github.com/abhishekcodes0/abhishek-codes-node-blog",
  },
  {
    title: "NextJs Blog",
    description:
      "Next.js Blog, using static site generation and server-side rendering. The frontend is hosted on Firebase for fast performance.",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
    imageUrl: "/blogss.jpg",
    url: "https://abhishekcodes.com/blog/",
  },
  {
    title: "FullStack NextJs App",
    description:
      "Creating and managing dynamic prompts. Secure authentication via Context API, and server-side data fetching for real-time content updates.",
    tags: ["Next.js", "Tailwind"],
    imageUrl: "/prompt-engine.jpg",
    url: "https://prompt-engine-weld.vercel.app/",
  },
];

const Project = ({ title, description, tags, imageUrl, url }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <div className="bg-gray-100 max-w-[44rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          {url ? (
            <a href={url} target="_blank" className="flex items-start">
              <FaExternalLinkAlt className="mr-1 mt-2" />
              <h3 className="text-2xl font-semibold">{title}</h3>
            </a>
          ) : (
            <h3 className="text-2xl font-semibold">{title}</h3>
          )}
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <img
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="w-screen min-h-screen bg-white flex flex-col items-center pb-16">
      <div
        className={
          "text-center text-6xl font-bold mt-12 mb-12" + " " + bebas.className
        }
      >
        Projects
      </div>{" "}
      <div className="p-4">
        {data.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
