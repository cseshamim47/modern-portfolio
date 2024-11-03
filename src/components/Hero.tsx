"use client";
import React from "react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { motion } from "framer-motion";

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
          <div className="text-white text-6xl">
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
            delay: 0.5 // Delay until first motion.div appears
          }}
        >
        <div className="flex justify-between space-x-6 w-full py-4 px-20 ">
          <div className=" space-y-6 hover:bg-background/40">
            <h2 className="text-center text-4xl font-bold">Personal</h2>
            <div className="text-xl space-y-2 font-medium">
              <div>
                <h3>✔️ Self-Discovery & Growth 🧠</h3>
                <p className="text-base pl-8 font-normal">
                  Explore your true potential and develop self-awareness.
                </p>
              </div>
              <div>
                <h3>✔️ Goal Setting & Motivation 🎯</h3>
                <p className="text-base pl-8 font-normal">
                  Set and achieve meaningful personal goals.
                </p>
              </div>
              <div>
                <h3>✔️ Emotional Intelligence 💡</h3>
                <p className="text-base pl-8 font-normal">Improve understanding and management of emotions.</p>
              </div>
              <div>
                <h3>✔️ Confidence Building 🚀</h3>
                <p className="text-base pl-8 font-normal">Boost self-esteem and handle challenges with confidence.</p>
              </div>
              <div>
                <h3>✔️ Work-Life Balance ⚖️</h3>
                <p className="text-base pl-8 font-normal">Strategies to create a balanced and fulfilling lifestyle.</p>
              </div>
            </div>
          </div>
          <div className="w-1 h-inherit bg-border"></div>
          <div className="space-y-6 hover:bg-background/40">
            <h2 className="text-center text-4xl font-bold">Business</h2>
            <div className="text-xl space-y-2 font-medium">
              <div>
                <h3>✔️ Productivity & Efficiency ⏳</h3>
                <p className="text-base pl-8 font-normal">
                Optimize workflows and maximize time management. 
                </p>
              </div>
              <div>
              <h3>✔️ Entrepreneurial Guidance 📈</h3>
              <p className="text-base pl-8 font-normal">Support for launching, scaling, or pivoting businesses.</p>
              </div>
             <div>
             <h3>✔️ Career Advancement 📋</h3>
             <p className="text-base pl-8 font-normal">Identify strengths and advance professionally.</p>
             </div>
              <div>
              <h3>✔️ Strategic Planning 📈</h3>
              <p className="text-base pl-8 font-normal">Develop a clear roadmap to achieve your business goals.</p>
              </div>
              <div>
              <h3>✔️ Leadership Skill 🏆</h3>
              <p className="text-base pl-8 font-normal">Learn to lead, motivate, and inspire teams effectively.</p>
              </div>
            </div>
          </div>
        </div>
        </motion.div>

        <div className="flex justify-center mt-8 mb-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Start Your Journey Today
          </motion.button>
        </div>

        <div className=" dark-shade w-full h-8"></div>
      </HeroHighlight>
  );
};

export default Hero;
