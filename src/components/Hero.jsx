// Imports
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

// Hero Section
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Hero Content */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* Hero Circle */}
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />

          {/* Hero Line */}
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Hero Text */}
        <div className="">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className="text-[#915eff]">Ian</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A FullStack Web 3.0{" "}
            <span className="text-[#915eff]"> Designer</span> &{" "}
            <span className="text-[#915eff]">Developer</span>.{" "}
            <br className="sm:hidden" /> Let's Design, Develop & Deploy
            Innovative Websites Together!
          </p>
        </div>
      </div>

      {/* Hero 3D Model */}
      <ComputersCanvas />

      {/* Scroll Button*/}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            {/* Framer Motion */}
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

// Export
export default Hero;
