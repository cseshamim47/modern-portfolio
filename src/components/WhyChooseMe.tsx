"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { HoverEffect } from './ui/card-hover-effect';
import { CardContainer, CardBody, CardItem } from './ui/3d-card';

const WhyChooseMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-8 mt-14 py-16 bg-gradient-to-b from-secondary to-background rounded-3xl"
    >
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-white">
          Why Choose Me?
        </h1>
        <div className="max-w-3xl mx-auto space-y-6 text-sm sm:text-base md:text-lg text-gray-300">
          <p>
            I'm not a psychologist, but my emotional intelligence is extremely high. I've helped many people through work-related and personal challenges by understanding and analyzing their emotions.
          </p>
          <p>
            I'm a support system for many – providing a balanced perspective, logical guidance, and an empathetic approach. My gifted mind and broad experience make me an ideal partner in navigating life's challenges.
          </p>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <CardContainer className="inter-var">
          <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] bg-white dark:bg-background dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[35rem] h-auto rounded-xl p-8 border">
            <CardItem
              translateZ="50"
              className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-600 dark:text-white mb-4"
            >
              Client Testimonial
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-lg italic dark:text-neutral-300"
            >
              "Working with this coach has been transformative. Their ability to understand complex emotions and provide clear guidance helped me navigate both personal and professional challenges. They have a unique gift for emotional intelligence that sets them apart."
            </CardItem>
            <CardItem
              translateZ="30"
              className="text-neutral-400 dark:text-neutral-400 text-sm mt-4"
            >
              - Sarah M., Executive Leader
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </motion.div>
  );
};

export default WhyChooseMe;