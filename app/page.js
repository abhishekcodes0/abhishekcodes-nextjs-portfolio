"use client";
import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "@/components/Loader";

gsap.registerPlugin(useGSAP);

export default function Home() {
  return (
    <main className="w-screen min-h-screen">
      <Loader />
    </main>
  );
}
