"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background/50 border-t border-border py-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Oymor Coaching. All rights reserved.
          </p>
          <div className="text-xs text-muted-foreground/60">
            Empowering Growth Through Personal & Business Coaching
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;