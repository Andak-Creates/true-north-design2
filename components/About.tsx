import React from "react";

import AboutScroller from "./ui/AboutScroller";
import RulerOverlay from "./ui/RulerOverlay";

const About = () => {
  return (
    <section
      id="about"
      className="py-[100px] px-[30px] md:px-[100px] scroll-mt-[50px] relative"
    >
      <div data-aos="fade-up">
        <h1 className="text-[40px] md:text-[60px] font-semibold">About Us</h1>
        <p className="w-full mt-[10px] md:w-[65%]">
          We are a global information technology services company specializing
          in innovative solutions that drive business growth worldwide. Our
          expertise spans across software development, system design, platform
          development, applications development, and comprehensive IT support
          services.
        </p>
      </div>

      {/* Card horizontal scroll */}
      <AboutScroller />
      <RulerOverlay tickCount={30} spacing={50} color="#888" opacity={0.3} />
    </section>
  );
};

export default About;
