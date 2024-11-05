"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingContact = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const start = window.scrollY;
      const end = contactSection.offsetTop;
      const duration = 1000; // 1 second
      const startTime = performance.now();

      const easeInQuad = (t: number) => t * t;

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easedProgress = easeInQuad(progress);
        window.scrollTo(0, start + (end - start) * easedProgress);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  };

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        onClick={scrollToContact}
        className="bg-primary text-primary-foreground p-2 md:p-4 rounded-full shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="md:w-6 md:h-6 w-4 h-4" />
        <span className="sr-only">Contact Us</span>
      </motion.button>
    </motion.div>
  );
};

export default FloatingContact;