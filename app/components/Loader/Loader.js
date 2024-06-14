"use client";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, slideUp } from "./anim";
import { bebas } from "@/app/fonts";

export default function Index() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [loading, setLoading] = useState(true);
  const [barWidth, setBarWidth] = useState(0);
  const [progressVisible, setProgressVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setDimension({ width: window.innerWidth, height: window.innerHeight });
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgressVisible(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (progressVisible) {
      // progress bar width
      if (barWidth < 100) {
        const interval = setInterval(() => {
          setBarWidth((prev) => prev + 5);
        }, 100);

        return () => clearInterval(interval);
      }
    }
  }, [barWidth, progressVisible]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          variants={slideUp}
          initial="initial"
          exit="exit"
          className={styles.introduction + " " + "bg-black hide-scrollbar"}
        >
          {dimension.width > 0 && (
            <>
              <div
                className={
                  "flex flex-col justify-center items-center " + bebas.className
                }
              >
                <h1
                  id="loaderText"
                  className="text-6xl text-white z-10 font-semibold overflow-hidden pt-10 mt-[-2.5rem]"
                >
                  {"Abhishek.Codes".split("").map((item, index) => {
                    return (
                      <motion.span
                        className="inline-block"
                        animate={{ y: 0 }}
                        initial={{ y: 100 }}
                        key={index}
                        transition={{ delay: index / 25 }}
                      >
                        {item}
                      </motion.span>
                    );
                  })}
                </h1>
                {progressVisible && (
                  <div className="bg-black z-10 w-80 h-1 content-none mt-1 transition-all ease-in-out">
                    <div
                      className="inline-block h-1 rounded overflow-hidden z-20 bg-white text-transparent transition-all ease-in-out"
                      style={{ width: barWidth + "%" }}
                    ></div>
                  </div>
                )}
              </div>
              <svg>
                <motion.path
                  className="fill-black"
                  variants={curve}
                  initial="initial"
                  exit="exit"
                ></motion.path>
              </svg>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
