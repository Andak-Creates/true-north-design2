"use client";

import Lottie from "lottie-react";
import Image from "next/image";
import React from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa6";
import Dot from "@/public/lotties-animation/dots-dancing.json";
import RedDot from "@/public/lotties-animation/dots-dancing-red.json";

const HeroSection = () => {
  return (
    <main
      id="home"
      className="relative  w-full lg:w-[100vw] h-[750px] px-[30px] md:px-[150px] hero-bg "
    >
      {/* background Image */}

      {/* Hero Content */}
      {/* Description */}
      <div className="py-[150px] w-full h-auto flex flex-col md:flex-row md:justify-between">
        <div>
          <h3 className="pl-[20px] after">TrueNorth Global Solutions</h3>
          <h1 className="text-[40px] md:text-[60px] md:w-[500px] font-semibold mt-[10px]">
            Comprehensive IT Solutions for{" "}
            <span className="bg-gradient-to-br from-[#F9C360] to-[#E87A36] bg-clip-text text-transparent">
              Global Success
            </span>
          </h1>
        </div>

        <div className="relative flex self-start md:self-end w-auto h-auto mt-[0px] md:mt-[100px]">
          <div className="absolute right-[-90%] top-[5%] h-[0%] w-[250px] z-[1]">
            <Lottie
              loop
              autoPlay
              animationData={Dot}
              style={{ width: "100%" }}
            />
          </div>
          <button
            className="mt-[100px] py-[40px] pl-[30px] pr-[50px] w-fit text-left font-semibold z-[2]
            gradientBackground leading-[18px] 
            flex flex-col gap-[20px] h-fit self-start md:self-end cursor-pointer"
          >
            <FaArrowRight /> Get
            <br />
            Started
          </button>
        </div>
      </div>

      {/* mini about section */}
      <div
        className="relative md:absolute bottom-[100px] md:bottom-[-60px] flex flex-col md:flex-row
        justify-start w-auto md:w-fit h-auto md:h-[300px] gap-[10px] md:gap-[100px]  md:mx-auto"
      >
        <div className="absolute md:right-[90%] md:top-[30%] h-[100%] w-[250px] z-[1]">
          <Lottie
            loop
            autoPlay
            animationData={RedDot}
            style={{ width: "100%" }}
          />
        </div>

        {/* Image */}
        <div className="relative w-full md:w-[300px] h-[290px] bg-[#f9c36025] backdrop-blur-[2px] z-[2]">
          <Image
            src={"/assets/portrait-person.png"}
            alt="Portrait Person"
            fill
            className="absolute object-cover h-full"
          />
        </div>

        {/* about */}
        <div className="w-full md:w-[320px] ">
          <h3 className="pl-[20px] after">ABOUT</h3>
          <p className="mt-[30px]">
            We specialize in comprehensive IT services including software
            development, system design, platform development, applications
            development, and IT support solutions tailored to your business
            needs.
          </p>

          <div className="ourWorkBtn ">
            <div className=" py-[30px] px-[30px] text-[30px] bg-gradient-to-br from-[#F9606B] to-[#E8363F] ">
              <FaPlay />
            </div>
            <p className="pl-[20px]">View Our Work</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
