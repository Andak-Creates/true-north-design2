import React from "react";

import AboutScroller from "./ui/AboutScroller";

const About = () => {
  return (
    <section
      id="about"
      className="pt-[80px] pb-[100px] px-[30px] md:px-[100px]"
    >
      <div>
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
    </section>
  );
};

export default About;
