"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {


  const handleLearnMoreClick = () => {
    // GOOGLE_FORM_URL
    const googleFormUrl = 'https://forms.gle/cxiywxacfAFeCzgp6';
    window.open(googleFormUrl, '_blank');
  };


  const zoomInAndOutVariants = {
    zoomIn: { scale: 1.2 },
    zoomOut: { scale: 1 }
  };

  const zoomInAndOutTransition = {
    repeat: Infinity,
    duration: 1, // Adjust the duration as needed
    repeatType: 'reverse' as 'reverse' // Reverse the animation for a smooth transition
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center lg:px-20 px-8 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box  py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Website For Buisness
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            customer exprience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Your one-stop shop for digital success! We&apos;re a top-notch Full-Stack Software Agency, experts in crafting websites, mobile apps, and software solutions. Check out our projects and skills  your business deserves the best!
        </motion.p>

        <motion.a
          variants={zoomInAndOutVariants}
          initial="zoomOut"
          animate="zoomIn"
          transition={zoomInAndOutTransition}
          className="py-2 button-primary text-center ml-3 text-white cursor-pointer rounded-lg max-w-[200px]"
          onClick={handleLearnMoreClick}
        >
          Book Your Appointment!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full lg:flex justify-center items-center hidden "
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
