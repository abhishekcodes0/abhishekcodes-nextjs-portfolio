"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "@/app/components/Loader/Loader";
import { motion } from "framer-motion";
import { bebas } from "./fonts";
import Paragraph from "./components/Paragraph/Paragraph";

// gsap.registerPlugin(useGSAP);

export default function Home(props) {
  return (
    <main className="relative flex flex-col">
      <Loader />

      {/* hero section */}
      <section className="w-screen h-screen-48px relative">
        <div className="w-full h-full flex flex-col items-center justify-center relative">
          <motion.h1
            initial={{ scale: 0.5, y: 300, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 100 }}
            transition={{ delay: 3.6, ease: "easeInOut" }}
            className={
              "text-8xl text-black z-10 text-center " + bebas.className
            }
          >
            Crafting <br /> Digital <br /> Experiences
          </motion.h1>

          <motion.h2
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 100 }}
            transition={{ delay: 3.8, ease: "easeInOut" }}
            className="text-md text-gray-500 z-10 text-center font-semibold"
          >
            Combining Creativity and Technical Skill
            <br /> to Develop Impactful Digital Solutions for Over 4 Years
          </motion.h2>

          <motion.img
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 1.2, opacity: 0.5 }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            className="absolute bottom-20 left-1/2 translate-x-1/2 w-10"
            src="/scroll-icon.png"
          />
        </div>

        {/* floating blobs */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 100 }}
          transition={{ delay: 4, ease: "easeInOut" }}
          className="blob blob-1 text-white text-xs"
        >
          {"Hi, that's me"}
        </motion.div>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 100 }}
          transition={{ delay: 4, ease: "easeInOut" }}
          className="blob blob-2 text-white text-xs"
        >
          Me Coding
        </motion.div>

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 100 }}
          transition={{ delay: 4, ease: "easeInOut" }}
          className="blob blob-3 text-white text-xs"
        ></motion.div>

        {/* gradient circle */}
        <div className="gradient-background flex justify-center items-center">
          <svg
            width="800"
            height="800"
            viewBox="0 0 200 200"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-auto h-full artwork"
          >
            <rect width="200" height="200" fill="#ffffff"></rect>{" "}
            <circle
              id="blob-0"
              cx="100"
              cy="100"
              r="50"
              fill="rgb(255, 232, 128)"
              filter="url(#f0)"
              className=""
              style={{ "mix-blend-mode": "normal" }}
            ></circle>{" "}
            <defs>
              {" "}
              <filter
                id="f0"
                x="-25%"
                y="-25%"
                width="150%"
                height="150%"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feGaussianBlur
                  stdDeviation="24"
                  result="fx_foregroundBlur"
                ></feGaussianBlur>{" "}
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="5"
                  numOctaves="6"
                  stitchTiles="stitch"
                  result="noise"
                ></feTurbulence>{" "}
                <feDisplacementMap
                  in="fx_foregroundBlur"
                  in2="noise"
                  result="displacement"
                  scale="50"
                  xChannelSelector="R"
                  yChannelSelector="G"
                ></feDisplacementMap>{" "}
              </filter>
            </defs>{" "}
          </svg>
        </div>
      </section>

      <section className="w-screen p-48 bg-gray-100 h-screenflex justify-center items-center">
        <div
          className={
            "text-center text-6xl font-bold -mt-12 mb-12" +
            " " +
            bebas.className
          }
        >
          About Me
        </div>{" "}
        <Paragraph
          value="Hi there! I'm Abhishek Singh, a front-end wizard with over four years
          of experience in conjuring up sleek, responsive web applications using
          React, Tailwind CSS, and a sprinkle of JavaScript magic. I love
          transforming complex challenges into user-friendly digital delights.
          When I'm not crafting code, you can find me diving into the latest
          tech trends, contributing to open-source projects, or sharing my
          coding adventures on my blog. Let's create something awesome together!"
        />{" "}
      </section>

      <section className="w-screen h-screen bg-white flex justify-center items-center">
        <div
          className={
            "text-center text-6xl font-bold -mt-12 mb-12" +
            " " +
            bebas.className
          }
        >
          Skills
        </div>{" "}
      </section>
      <section className="w-screen h-screen bg-gray-100 flex justify-center items-center">
        <div
          className={
            "text-center text-6xl font-bold -mt-12 mb-12" +
            " " +
            bebas.className
          }
        >
          Work
        </div>{" "}
      </section>
      <section className="w-screen h-screen bg-white flex justify-center items-center">
        <div
          className={
            "text-center text-6xl font-bold -mt-12 mb-12" +
            " " +
            bebas.className
          }
        >
          Projects
        </div>{" "}
      </section>
      <section className="w-screen h-screen bg-gray-100 flex justify-center items-center">
        <div
          className={
            "text-center text-6xl font-bold -mt-12 mb-12" +
            " " +
            bebas.className
          }
        >
          Contact Me
        </div>{" "}
      </section>
    </main>
  );
}
