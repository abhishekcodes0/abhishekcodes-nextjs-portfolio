"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const Paragraph = ({ value }) => {
  const elem = useRef(null);
  const { scrollYProgress } = useScroll({
    target: elem,
    offset: ["start 0.9", "start 0"],
  });

  const words = value.split(" ").filter((itr) => itr != "");
  return (
    <p
      ref={elem}
      className="text-3xl md:text-5xl font-bold flex justify-center flex-wrap relative"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="mr-[12px] mt-[6px] md:mt-[12px] relative">
      <span className="absolute opacity-[0.2]">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export default Paragraph;
