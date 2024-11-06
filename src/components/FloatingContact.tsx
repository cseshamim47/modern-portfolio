"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import scrollToContact from './Utility/ScrollToContact';

const FloatingContact = () => {


  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        onClick={scrollToContact}
        className="bg-primary text-primary-foreground p-3 md:p-4 rounded-full shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="sr-only">Contact Us</span>
      </motion.button>
    </motion.div>
  );
};

export default FloatingContact;