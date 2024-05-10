"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// gsap.registerPlugin(useGSAP);

const Loader = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <h1
        id="loaderText"
        className="text-6xl font-semibold overflow-hidden pt-10 mt-[-2.5rem]"
      >
        {"Abhishek.Codes".split("").map((item, index) => {
          return (
            <motion.span
              className="inline-block"
              animate={{ y: 0 }}
              initial={{ y: 150 }}
              key={index}
              transition={{ delay: 0.1 + index / 20 }}
            >
              {item}
            </motion.span>
          );
        })}
      </h1>
    </div>
  );
};

export default Loader;
