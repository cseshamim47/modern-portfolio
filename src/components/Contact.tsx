"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BackgroundBeams } from "./ui/background-beams";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { AiFillTikTok } from "react-icons/ai";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="h-[40rem] w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full mx-auto rounded-2xl p-8"
        id="contact"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-foreground text-center">
            Let's Get in Touch
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base text-center max-w-2xl mx-auto mt-4 mb-8">
            Ready to take the next step? Whether you're seeking clarity,
            efficiency, or support, I'm here to help. Let's talk and find out
            how I can assist you in reaching your goals.
          </p>
        </motion.div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <LabelInputContainer>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                type="text"
                required
              />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                type="email"
                required
              />
            </LabelInputContainer>
          </div>

          <LabelInputContainer>
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your goals..."
              className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border "
              required
            />
          </LabelInputContainer>

          <motion.button
            whileHover={{ scale: 1.005 }}
            whileTap={{ scale: 0.995 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-gradient-to-l from-indigo-500 to-purple-500 relative group/btn w-full text-primary-foreground rounded-lg h-11 font-medium shadow-lg hover:opacity-90 transition-opacity"
            type="submit"
          >
            Book a Free Discovery Session
            <BottomGradient />
          </motion.button>
        </form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 "
        >
          <p className="font-medium text-foreground text-center mb-2">
            Alternative Contact Methods
          </p>
          <div className="flex justify-center">
            <div className="space-y-10">
              <div className="space-y-2">
                <Link
                  href={`mailto:contact@example.com`}
                  className="flex flex-row gap-2 items-center"
                >
                  <MdEmail className="text-green-300 text-xl" />
                  <p className="text-muted-foreground">
                    Email: contact@example.com
                  </p>
                </Link>
                <Link
                  href={`tel:123-4567`}
                  className="flex flex-row gap-2 items-center"
                >
                  <FaPhoneSquareAlt className="text-green-300 text-xl" />
                  <p className="text-muted-foreground">Phone: (555) 123-4567</p>
                </Link>
              </div>
              <div className="flex gap-6 text-4xl justify-center items-center">
                <Link href={`https://www.linkedin.com`}>
                  <FaLinkedin className="hover:text-green-300"/>
                </Link>
                <Link href={`https://www.instagram.com/`}>
                  <RiInstagramFill className="hover:text-green-300"/>
                </Link>
                <Link href={`https://www.youtube.com`}>
                  <IoLogoYoutube className="hover:text-green-300"/>
                </Link>
                <Link href={`https://www.tiktok.com`}>
                  <AiFillTikTok className="hover:text-green-300"/>
                </Link>
                <Link href={`https://www.facebook.com`}>
                  <FaFacebookSquare className="hover:text-green-300"/>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      {/* <BackgroundBeams /> */}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Contact;
