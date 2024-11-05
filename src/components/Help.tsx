"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { HoverEffect } from './ui/card-hover-effect';

const Help = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto px-8 mt-14"
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          My Approach to Coaching
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          I don't give you the answers – I help you discover them. My coaching focuses on understanding where you are now and mapping out the most efficient way to get to your goals, whether personal or professional.
        </p>
      </div>
      <HoverEffect items={projects} />
    </motion.div>
  );
};

export const projects = [
  {
    title: "🎯 Personalized Guidance",
    description:
      "Tailored to your unique needs, personality, and goals. We create a customized roadmap that aligns with who you are and where you want to go.",
    link: "#",
  },
  {
    title: "🧠 Emotional Intelligence",
    description:
      "Deep emotional analysis to help you understand yourself better. Develop greater self-awareness and learn to navigate complex feelings with confidence.",
    link: "#",
  },
  {
    title: "⚡ Hands-On & Practical",
    description:
      "Solutions and pathways that are actionable, efficient, and effective. Get concrete steps and practical tools you can implement right away.",
    link: "#",
  }
];


export default Help;