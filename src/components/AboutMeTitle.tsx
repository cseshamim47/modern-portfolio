import React from 'react'
import { SparklesCore } from './ui/sparkles';

const AboutMeTitle = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-white relative z-20">
        Meet Your{" "}
        <span className="relative hover:cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-full after:w-0 after:bg-indigo-500/30 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out">
          Multipotentialite
        </span>{" "}
        Coach
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}

export default AboutMeTitle