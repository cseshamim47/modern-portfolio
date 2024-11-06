"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { QuestionMarkCircledIcon } from '@radix-ui/react-icons';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import Link from 'next/link';
import scrollToContact from './Utility/ScrollToContact';

const questions = [
  "I don't know what my next step should be – how do I move forward?",
  "What direction should I take with my studies or career?", 
  "I want to start a business, but I don't know in which field.",
  "How do I find something I'm truly passionate about?",
  "How can I break out of the rut I'm in and start making real progress?",
  "What's the most efficient way to get from where I am now to where I want to be?",
  "I have too many interests – how do I choose the right one to focus on?",
  "I feel overwhelmed with decisions – how can I gain clarity?",
  "I don't know the next move in my business.",
  "I know what we need in our business but we don't know where to find it or how to get there."
];

const QuestionsAnswers = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="mx-4  mt-14 py-16"
    >
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-white">
          Questions I Can Help You Answer
        </h1>
        <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-300 mb-12">
          Feeling stuck or unsure of your next step? Whether it's personal
          growth, choosing the right career path, or starting your own business,
          I'm here to help you find clarity and direction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 max-w-4xl mx-auto mb-12">
        {questions.map((question, index) => (
          <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-secondary text-gray-200 cursor-pointer hover:bg-green-300 backdrop-blur-sm hover:text-black group">
            <QuestionMarkCircledIcon className="w-6 h-6 text-secondary flex-shrink-0 mt-1 text-white/80 group-hover:text-black" />
            <p className="text-sm sm:text-base ">{question}</p>
          </div>
        ))}
      </div>

      <div className="text-center max-w-3xl mx-auto">
        <p className="text-gray-300 mb-8">
          If any of these questions resonate with you, or if you have similar
          challenges, I'd love to guide you. My approach focuses on
          understanding where you are, clarifying your goals, and mapping out
          the most efficient route to success.
        </p>
        <div className="flex justify-center">
          <HoverBorderGradient
            containerClassName="rounded-xl"
            as="button"
            className="dark:bg-background bg-white text-black dark:text-white flex items-center"
          >
            <Link
              href="/#contact"
              className="text-center font-bold"
              onClick={scrollToContact}
            >
              Let's talk about how I can help you find your path
            </Link>
          </HoverBorderGradient>
        </div>
      </div>
    </motion.div>
  );
};

export default QuestionsAnswers;