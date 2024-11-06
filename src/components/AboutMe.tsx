"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AboutMeTitle from './AboutMeTitle';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import Link from 'next/link';

const AboutMe = () => {
  return (
    <div className="relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative w-full h-20">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="absolute w-full"
          >
            <AboutMeTitle />
          </motion.div>
        </div>
        <div className="h-4 md:h-4"></div>

        <div className="left-0 mx-5 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl w-full md:hidden block mb-6"
              >
                <Image
                  src="/jonas.jpeg"
                  alt="Jonas coaching"
                  fill
                  className="object-cover w-full"
                  style={{ objectPosition: "100% 20%" }}
                  priority
                />
              </motion.div>

              <motion.div
                whileHover="hover"
                initial="initial"
                className="relative"
              >
                <motion.div
                  variants={{
                    initial: {
                      opacity: 0,
                      scale: 0.95,
                      borderRadius: "0.5rem",
                    },
                    hover: { opacity: 0.1, scale: 1, borderRadius: "0.5rem" },
                  }}
                  className="absolute inset-0 bg-white rounded-lg"
                  transition={{ duration: 0.2 }}
                />
                <p className="text-sm sm-max-md:text-base lg:text-lg leading-relaxed relative z-10 hover:cursor-pointer p-3">
                  I&apos;m Jonas – a multipotentialite and gifted coach with an
                  insatiable curiosity. With expertise in IT, yachting, diving,
                  and an exceptional ability to analyze emotions through my high
                  emotional intelligence, I&apos;ve mastered a wide range of
                  skills and fields.
                </p>
              </motion.div>

              <motion.div
                whileHover="hover"
                initial="initial"
                className="relative"
              >
                <motion.div
                  variants={{
                    initial: {
                      opacity: 0,
                      scale: 0.95,
                      borderRadius: "0.5rem",
                    },
                    hover: { opacity: 0.1, scale: 1, borderRadius: "0.5rem" },
                  }}
                  className="absolute inset-0 bg-white rounded-lg"
                  transition={{ duration: 0.2 }}
                />
                <p className="text-sm sm-max-md:text-base lg:text-lg leading-relaxed relative z-10 hover:cursor-pointer p-3">
                  I quickly absorb new information, and my interests span across
                  industries. This means I can help you in virtually any area
                  you need – whether it&apos;s career guidance, emotional
                  growth, or finding the next logical step in your life.
                </p>
              </motion.div>

              <motion.div
                whileHover="hover"
                initial="initial"
                className="relative"
              >
                <motion.div
                  variants={{
                    initial: {
                      opacity: 0,
                      scale: 0.95,
                      borderRadius: "0.5rem",
                    },
                    hover: { opacity: 0.1, scale: 1, borderRadius: "0.5rem" },
                  }}
                  className="absolute inset-0 bg-white rounded-lg"
                  transition={{ duration: 0.2 }}
                />
                <p className="text-sm sm-max-md:text-base lg:text-lg leading-relaxed relative z-10 hover:cursor-pointer p-3">
                  I excel at helping people understand themselves better. This
                  is something I&apos;ve done for many, and it&apos;s my passion
                  to continue empowering others.
                </p>
              </motion.div>

              <motion.div
                whileHover="hover"
                initial="initial"
                className="relative"
              >
                <motion.div
                  variants={{
                    initial: {
                      opacity: 0,
                      scale: 0.95,
                      borderRadius: "0.5rem",
                    },
                    hover: { opacity: 0.1, scale: 1, borderRadius: "0.5rem" },
                  }}
                  className="absolute inset-0 bg-white rounded-lg "
                  transition={{ duration: 0.2 }}
                />
                <p className="text-sm sm-max-md:text-base lg:text-lg leading-relaxed relative z-10 hover:cursor-pointer p-3">
                  Beyond coaching, I&apos;m a hands-on problem solver. From
                  electricity, mechanics, and plumbing to various sports –
                  basketball, tennis, soccer, horseback riding, and more –
                  I&apos;ve tackled it all. I&apos;m also a fan of cars and have
                  explored numerous business models.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square rounded-2xl shadow-2xl w-full md:block hidden overflow-hidden"
            >
              <Image
                src="/jonas.jpeg"
                alt="Jonas coaching"
                fill
                className="object-cover w-full rounded-2xl"
                style={{ objectPosition: "100% 20%" }}
                priority
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mt-12"
          >
            <HoverBorderGradient
              containerClassName="rounded-xl"
              as="button"
              className="dark:bg-background bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <Link href="https://vanhastel.com/skills" className="text-center">
                See My Full Skill Set
              </Link>
            </HoverBorderGradient>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;