"use client";
import React from "react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative ">
      <HeroHighlight>
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

      <div className="w-full absolute top-14 left-1/2 -translate-x-1/2 space-y-10 pointer-events-none space-y-20">
        <div className="flex flex-col gap-2 text-8xl font-bold tracking-wide text-center">
          <span>
            <Highlight className="text-black dark:text-white">Oymor</Highlight>
          </span>
          <div>Coaching</div>
        </div>

        <div className="flex justify-between w-1/2 mx-auto">
          <div className=" space-y-6">
            <h2 className="text-center text-6xl font-bold">Personal</h2>
            <div className="text-2xl space-y-2 font-medium">
              <p>✔️ Self-Discovery & Growth 🧠</p>
              <p>✔️ Goal Setting & Motivation 🎯</p>
              <p>✔️ Emotional Intelligence 💡</p>
              <p>✔️ Confidence Building 🚀</p>
              <p>✔️ Work-Life Balance ⚖️</p>
            </div>
          </div>
          <div className="w-1 h-inherit bg-border"></div>
          <div className="space-y-6">
            <h2 className="text-center text-6xl font-bold">Business</h2>
            <div className="text-2xl space-y-2 font-medium">
              <p>✔️ Productivity & Efficiency ⏳</p>
              <p>✔️ Entrepreneurial Guidance 📈</p>
              <p>✔️ Career Advancement 📋</p>
              <p>✔️ Strategic Planning 📈</p>
              <p>✔️ Leadership Skill 🏆</p>
            </div>
          </div>
        </div>
      </div>
      <div>shamim</div>
    </div>
  );
};

export default Hero;
