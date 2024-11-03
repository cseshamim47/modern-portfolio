"use client";
import React from "react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative">
      <HeroHighlight >
        <div className="hidden"></div>
        {/* <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          With insomnia, nothing&apos;s real. Everything is far away. Everything
          is a{" "}
          <Highlight className="text-black dark:text-white">
            Oymor
          </Highlight>
        </motion.h1> */}
      </HeroHighlight>

      <div className="border w-full absolute top-14 left-1/2 -translate-x-1/2 space-y-10 pointer-events-none">
        <div className="flex flex-col gap-2 text-8xl font-bold tracking-wide text-center">
          <span>
            <Highlight className="text-black dark:text-white">Oymor</Highlight>
          </span>
          <div>Coaching</div>
        </div>

        <div className="flex justify-between mx-20">
          <div className="border-r w-1/2">
            <h2 className="text-center text-6xl">Personal</h2>
          </div>
          <div className="w-1/2">
            <h2 className="text-center text-6xl">Business</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
