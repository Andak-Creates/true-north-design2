"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      id: 1,
      icon: "/assets/servicesIcon/globe.png",
      title: "Digital Transformation",
      description:
        "Strategic digital transformation consulting to modernize your business operations globally.",
    },
    {
      id: 2,
      icon: "/assets/servicesIcon/software.png",
      title: "Software Development",
      description:
        "Custom software solutions tailored to your business requirements with modern technologies and best practices.",
    },
    {
      id: 3,
      icon: "/assets/servicesIcon/database.png",
      title: "System Design",
      description:
        "Comprehensive system architecture and database design for scalable and efficient operations.",
    },
    {
      id: 4,
      icon: "/assets/servicesIcon/device.png",
      title: "Application Development",
      description:
        "Mobile and web applications that deliver exceptional user experiences across all platforms and devices.",
    },
    {
      id: 5,
      icon: "/assets/servicesIcon/cloud.png",
      title: "Platform Development",
      description:
        "Enterprise-grade platforms and cloud solutions to streamline your business processes globally.",
    },
    {
      id: 6,
      icon: "/assets/servicesIcon/gearSix.png",
      title: "IT Support Solutions",
      description:
        "Comprehensive technical support and maintenance services to keep your systems running smoothly 24/7.",
    },
    {
      id: 7,
      icon: "/assets/servicesIcon/cpu.png",
      title: "Infrastructure Management",
      description:
        "Complete IT infrastructure setup, monitoring, and optimization for maximum performance.",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  // Get the three cards to display (left, center, right)
  const getVisibleCards = () => {
    const leftIndex =
      currentIndex === 0 ? services.length - 1 : currentIndex - 1;
    const centerIndex = currentIndex;
    const rightIndex =
      currentIndex === services.length - 1 ? 0 : currentIndex + 1;

    return [
      { ...services[leftIndex], position: "left", index: leftIndex },
      { ...services[centerIndex], position: "center", index: centerIndex },
      { ...services[rightIndex], position: "right", index: rightIndex },
    ];
  };

  const visibleCards = getVisibleCards();

  return (
    <section
      id="services"
      className="text-center relative mb-[100px] px-[30px]"
    >
      <div className="w-full md:w-[50%] mx-auto text-left md:text-center mb-12">
        <h1 className="text-[40px] md:text-[50px] font-semibold text-white">
          Our Global IT Services
        </h1>
        <p className="text-[15px] mt-[10px] text-[#E9EBF1]">
          We provide comprehensive information technology services to help your
          business thrive in the digital age with cutting-edge solutions and
          expert support worldwide.
        </p>
      </div>

      <div className="relative">
        {/* Navigation Buttons */}
        <div className="absolute flex w-full h-full z-50 justify-between items-center px-[-300px] md:px-[50px]">
          <button onClick={handlePrev} className="scrollBarBtn">
            <IoArrowBack />
          </button>

          <button onClick={handleNext} className="scrollBarBtn">
            <IoArrowForward />
          </button>
        </div>

        {/* Cards Container */}
        <div className="flex justify-center items-center gap-[100px] w-full md:w-[80%]  mx-auto min-h-[300px]">
          {visibleCards.map((card) => {
            const isCenter = card.position === "center";
            const isLeft = card.position === "left";
            const isRight = card.position === "right";

            return (
              <div
                key={`${card.id}-${card.position}`}
                onClick={() => {
                  if (isLeft) handlePrev();
                  if (isRight) handleNext();
                }}
                className={`
                  cursor-pointer transition-all duration-500 ease-in-out flex-shrink-0
                  ${
                    isCenter
                      ? "w-[300px] h-auto transform scale-100 z-10"
                      : "w-[120px] h-[120px] transform scale-75 opacity-40 hover:scale-90 hover:opacity-60"
                  }
                `}
              >
                {isCenter ? (
                  // Active/Center card - full details
                  <div className="w-full flex flex-col justify-between items-center gap-4 p-6">
                    {/* Image holder */}
                    <div className="h-[80px] w-[80px] relative rounded-full flex items-center justify-center">
                      <div className="h-[80px] w-[80px] relative">
                        <Image
                          height={80}
                          width={80}
                          src={card.icon}
                          alt={card.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-[18px] md:text-[20px] font-semibold text-white">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[14px] text-[#E9EBF1] leading-relaxed text-center">
                      {card.description}
                    </p>
                  </div>
                ) : (
                  // Side cards - icon only
                  <div className="w-full h-full flex items-center justify-center ">
                    <div className="h-[60px] w-[60px] relative">
                      <Image
                        src={card.icon}
                        alt={card.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 md:w-1 md:h-1 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
