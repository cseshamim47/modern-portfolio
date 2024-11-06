"use client";
import React from "react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Link from "next/link";
import scrollToContact from "./Utility/ScrollToContact";
import { FaCheck } from "react-icons/fa6";

const Hero = () => {
  return (
    <HeroHighlight className="w-[100vw]">
      <motion.div
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
        className="space-y-3 text-center mb-10"
      >
        <div className="text-white text-6xl font-bold">
          <Highlight>Oymor</Highlight>
        </div>
        <div className="text-white text-6xl">Coaching</div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
          delay: 0.5, // Delay until first motion.div appears
        }}
      >
        <div className="flex flex-col text-center md:text-left items-center md:items-stretch gap-8 md:gap-0 md:flex-row md:justify-between md:space-x-6 w-full py-4 px-4 md:px-6 lg:px-20 max-w-7xl mx-auto">
          <div className=" space-y-6 hover:bg-background/40">
            <h2 className="text-center text-4xl font-bold">Personal</h2>
            <div className="text-xl space-y-2 font-medium">
              <div>
                <div className="flex gap-2 items-center justify-center md:justify-start">
                  <FaCheck className="text-green-400 text-2xl" />
                  <h3>Self-Discovery & Growth 🧠</h3>
                </div>
                <p className="text-base pl-8 font-normal">
                  Explore your true potential and develop self-awareness.
                </p>
              </div>
              <div>
                <div className="flex gap-2 items-center justify-center md:justify-start">
                  <FaCheck className="text-green-400 text-2xl" />
                  <h3>Goal Setting & Motivation 🎯</h3>
                </div>
                <p className="text-base pl-8 font-normal">
                  Set and achieve meaningful personal goals.
                </p>
              </div>
              <div>
                <div className="flex gap-2 items-center justify-center md:justify-start">
                  <FaCheck className="text-green-400 text-2xl" />
                  <h3>Emotional Intelligence 💡</h3>
                </div>
                <p className="text-base pl-8 font-normal">
                  Improve understanding and management of emotions.
                </p>
              </div>
              <div>
                <div className="flex gap-2 items-center justify-center md:justify-start">
                  <FaCheck className="text-green-400 text-2xl" />
                  <h3>Confidence Building 🚀</h3>
                </div>
                <p className="text-base pl-8 font-normal">
                  Boost self-esteem and handle challenges with confidence.
                </p>
              </div>
              <div>
                <div className="flex gap-2 items-center justify-center md:justify-start">
                  <FaCheck className="text-green-400 text-2xl" />
                  <h3>Work-Life Balance ⚖️</h3>
                </div>
                <p className="text-base pl-8 font-normal">
                  Strategies to create a balanced and fulfilling lifestyle.
                </p>
              </div>
            </div>
          </div>

          <div className="w-[80vw] h-1 md:w-1 md:h-auto bg-green-200"></div>

          <div className="space-y-6 hover:bg-background/40">
            <h2 className="text-center text-4xl font-bold">Business</h2>
            <div className="text-xl space-y-2 font-medium">
              <div>
                <div className="flex gap-2 items-center justify-center md:justify-start">
                  <FaCheck className="text-green-400 text-2xl" />
                  <h3>Productivity & Efficiency ⏳</h3>
                </div>
                <p className="text-base pl-8 font-normal">
                  Optimize workflows and maximize time management.
                </p>
              </div>
              <div>
                <div className="flex gap-2 items-center justify-center md:justify-start">
                  <FaCheck className="text-green-400 text-2xl" />
                  <h3>Entrepreneurial Guidance 📈</h3>
                </div>
                <p className="text-base pl-8 font-normal">
                  Support for launching, scaling, or pivoting businesses.
                </p>
              </div>
              <div>
                <div className="flex gap-2 items-center justify-center md:justify-start">
                  <FaCheck className="text-green-400 text-2xl" />
                  <h3>Career Advancement 📋</h3>
                </div>
                <p className="text-base pl-8 font-normal">
                  Identify strengths and advance professionally.
                </p>
              </div>
              <div>
                <div className="flex gap-2 items-center justify-center md:justify-start">
                  <FaCheck className="text-green-400 text-2xl" />
                  <h3>Strategic Planning 📈</h3>
                </div>
                <p className="text-base pl-8 font-normal">
                  Develop a clear roadmap to achieve your business goals.
                </p>
              </div>
              <div>
                <div className="flex gap-2 items-center justify-center md:justify-start">
                  <FaCheck className="text-green-400 text-2xl" />
                  <h3>Leadership Skill 🏆</h3>
                </div>
                <p className="text-base pl-8 font-normal">
                  Learn to lead, motivate, and inspire teams effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex justify-center my-10"
      >
        <HoverBorderGradient
          containerClassName="rounded-xl"
          as="button"
          className="dark:bg-background bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <Link
            href="/#contact"
            className="text-center font-bold"
            onClick={scrollToContact}
          >
            Get Started with a Free Session
          </Link>
        </HoverBorderGradient>
      </motion.div>

      {/* <div className="w-full h-20 bg-red-200/20"></div> */}
      <div className="w-full h-20 bg-gradient-to-t from-background/95  to-transparent"></div>
    </HeroHighlight>
  );
};

export default Hero;
