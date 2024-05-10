"use client";
import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "@/components/Loader";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const container = useRef();
  // useGSAP(
  //   () => {
  //     gsap.to(".logo", {
  //       x: 100,
  //       rotation: 360,
  //       scrollTrigger: {
  //         trigger: ".logo",
  //         start: "bottom bottom",
  //         end: "top 20%",
  //         scrub: 0.5,
  //         markers: true,
  //       },
  //     });
  //   },
  //   { scope: container }
  // );

  return (
    <main className="w-screen min-h-screen" ref={container}>
      <Loader />
    </main>
  );
}
