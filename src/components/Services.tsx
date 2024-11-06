"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import Link from 'next/link';
import { CardContainer } from './ui/3d-card';
import { CardItem } from './ui/3d-card';
import { CardBody } from './ui/3d-card';
import Image from 'next/image';
import { UserCircle2, Building2 } from 'lucide-react';

const Services = () => {
  return (
    <div className="px-4 md:px-8 bg-background pt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-white animate-glow">
          Coaching Services
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col lg:flex-row gap-8 justify-center items-center mx-2"
      >
        <CardContainer className="inter-var">
          <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] bg-white dark:bg-background dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem translateZ="50" className="flex items-center gap-2">
              <UserCircle2 className="w-8 h-8 text-blue-500" />
              <h2 className="text-2xl font-bold text-neutral-600 dark:text-white">
                Personal Coaching
              </h2>
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm mt-4 dark:text-neutral-300"
            >
              Discover your true potential, navigate emotional growth, and take
              the next step in your personal journey. My emotional intelligence
              and broad experience allow me to deeply connect with you and guide
              you confidently forward.
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="mt-8 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold transition-colors"
            >
              Book a Discovery Session
            </CardItem>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-white dark:bg-background dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem translateZ="50" className="flex items-center gap-2">
              <Building2 className="w-8 h-8 text-emerald-500" />
              <h2 className="text-2xl font-bold text-neutral-600 dark:text-white">
                Business Coaching
              </h2>
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm mt-4 dark:text-neutral-300"
            >
              Whether it's understanding a new business model, starting your own
              venture, or advancing your career, I help you find the most
              efficient path. Having navigated multiple industries, I understand
              the intricacies of business strategy and planning.
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="mt-8 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold transition-colors"
            >
              Book a Discovery Session
            </CardItem>
          </CardBody>
        </CardContainer>
      </motion.div>
    </div>
  );
};

export default Services;