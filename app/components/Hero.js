import React from "react";
import { bebas } from "../fonts";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="w-screen h-screen-48px relative px-4 md:px-0">
      <div className="w-full h-full flex flex-col items-center justify-center relative">
        <motion.h1
          initial={{ scale: 0.5, y: 300, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 100 }}
          transition={{ delay: 3.6, ease: "easeInOut" }}
          className={
            "text-7xl md:text-8xl text-black z-10 text-center " +
            bebas.className
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
          <br /> to Develop Impactful Digital Solutions for 5+ Years
        </motion.h2>
      </div>
      <motion.div
        className="flex -mt-32 justify-center"
        initial={{ scale: 0.5, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 100 }}
        transition={{ delay: 3.6, ease: "easeInOut" }}
      >
        <motion.img
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1.2, opacity: 0.5 }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          className="w-10"
          src="/scroll-icon.png"
        />
      </motion.div>

      {/* floating blobs */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 100 }}
        transition={{ delay: 4, ease: "easeInOut" }}
        className="blob blob-1 text-white text-xs"
      ><p style={{marginTop:'100px'}}>

        {"Hi, that's me"}
      </p>
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
      <div className="gradient-background flex justify-center items-center hero-gradient">
        <svg
          //   width="800"
          //   height="800"
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
  );
};

export default Hero;
