"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const sections = ["home", "services", "about", "contact"];

const NavigationBar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="flex flex-row fixed top-0 left-0 backdrop-blur-[5px] bg-[#0000007d] w-full
      justify-between items-center px-[20px] md:px-[80px] py-[15px] h-auto z-20"
    >
      {/* Logo */}
      <div className="flex justify-center items-center gap-[3px]">
        <div className="relative w-[25px] h-[35px] md:w-[15px] md:h-[25px]">
          <Image src={"/assets/logo.png"} alt="Logo" fill />
        </div>
        <h1 className="text-[30px] md:text-[20px] font-semibold">TrueNorth</h1>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex flex-row md:gap-[30px] lg:gap-[50px] items-center">
        <div className="flex md:gap-[30px] lg:gap-[50px]">
          {sections.map((sec) => (
            <Link
              key={sec}
              href={`#${sec}`}
              className={`homeLink ${
                activeSection === sec ? "active" : ""
              } capitalize`}
            >
              {sec}
            </Link>
          ))}
        </div>

        {/* Button */}
        <button className="gradientBackground px-[15px] py-[5px] font-semibold cursor-pointer">
          Get Quote
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden text-2xl cursor-pointer"
      >
        <FaBars />
      </button>

      {/* Sidebar (Mobile Nav) */}
      <div
        className={`fixed top-0 right-0 h-[100vh] w-[100%] sm:w-[300px] bg-black backdrop-blur-lg shadow-lg transform transition-transform duration-300 z-30 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-2xl"
        >
          <FaTimes />
        </button>

        {/* Links */}
        <div className="flex flex-col items-start mt-20 gap-6 px-6">
          {sections.map((sec) => (
            <Link
              key={sec}
              href={`#${sec}`}
              onClick={() => setIsOpen(false)}
              className={`homeLink text-lg ${
                activeSection === sec ? "active" : ""
              } capitalize`}
            >
              {sec}
            </Link>
          ))}

          {/* Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="gradientBackground px-4 py-2 font-semibold mt-4"
          >
            Get Quote
          </button>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed bg-black z-10 md:hidden"
        />
      )}
    </nav>
  );
};

export default NavigationBar;
