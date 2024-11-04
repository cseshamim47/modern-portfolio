"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

import AboutMeTitle from './AboutMeTitle';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import Link from 'next/link';

const AboutMe = () => {
  const { scrollYProgress } = useScroll();
  const titleY = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  
  const textX = useTransform(scrollYProgress, [0.1, 0.3], [-100, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  
  const imageX = useTransform(scrollYProgress, [0.2, 0.4], [100, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  const buttonY = useTransform(scrollYProgress, [0.3, 0.5], [50, 0]);
  const buttonOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  return (
    <div className="min-h-screen relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="text-center mb-16"
        >
          <AboutMeTitle />
        </motion.div>

        <div className="absolute top-20 left-0 mx-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              style={{ x: textX, opacity: textOpacity }}
              className="text-white"
            >
              <motion.div
                whileHover="hover"
                initial="initial"
                className="relative"
              >
                <motion.div
                  variants={{
                    initial: { opacity: 0, scale: 0.95 },
                    hover: { opacity: 0.1, scale: 1 },
                  }}
                  className="absolute inset-0 bg-white rounded-lg"
                  transition={{ duration: 0.2 }}
                />
                <p className="text-lg leading-relaxed relative z-10 hover:cursor-pointer p-3">
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
                    initial: { opacity: 0, scale: 0.95 },
                    hover: { opacity: 0.1, scale: 1 },
                  }}
                  className="absolute inset-0 bg-white rounded-lg"
                  transition={{ duration: 0.2 }}
                />
                <p className="text-lg leading-relaxed relative z-10 hover:cursor-pointer p-3">
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
                    initial: { opacity: 0, scale: 0.95 },
                    hover: { opacity: 0.1, scale: 1 },
                  }}
                  className="absolute inset-0 bg-white rounded-lg"
                  transition={{ duration: 0.2 }}
                />
                <p className="text-lg leading-relaxed relative z-10 hover:cursor-pointer p-3">
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
                    initial: { opacity: 0, scale: 0.95 },
                    hover: { opacity: 0.1, scale: 1 },
                  }}
                  className="absolute inset-0 bg-white rounded-lg"
                  transition={{ duration: 0.2 }}
                />
                <p className="text-lg leading-relaxed relative z-10 hover:cursor-pointer p-3">
                  Beyond coaching, I&apos;m a hands-on problem solver. From
                  electricity, mechanics, and plumbing to various sports –
                  basketball, tennis, soccer, horseback riding, and more –
                  I&apos;ve tackled it all. I&apos;m also a fan of cars and have
                  explored numerous business models.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              style={{ x: imageX, opacity: imageOpacity }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/multi.jpg"
                alt="Jonas coaching"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
          <motion.div 
            style={{ y: buttonY, opacity: buttonOpacity }}
            className="flex justify-center mt-20"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-background bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <Link href="https://vanhastel.com/skills" className="text-center">See My Full Skill Set</Link>
            </HoverBorderGradient>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;