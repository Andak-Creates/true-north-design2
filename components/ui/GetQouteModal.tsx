"use client";

import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface GetQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetQuoteModal: React.FC<GetQuoteModalProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const [selectedType, setSelectedType] = useState<string>(
    "Select a project type"
  );
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const projectTypes = [
    "Web Design",
    "Web Development",
    "Branding / UI",
    "Mobile App",
    "SEO & Marketing",
    "Other",
  ];

  useEffect(() => setMounted(true), []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted || !isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-[95%] md:w-full max-w-lg rounded-2xl darkColor text-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl cursor-pointer"
        >
          <AiOutlineClose />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-semibold mb-2 text-center">Get a Quote</h2>
        <p className="text-gray-400 text-sm mb-6 text-center">
          Tell us about your project, and we’ll get back to you within 24 hours.
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full rounded-lg bg-[#121826] border border-gray-700 p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg bg-[#121826] border border-gray-700 p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Custom Project Type Dropdown */}
          <div ref={dropdownRef} className="relative">
            <label className="block text-sm mb-1">Project Type</label>
            <button
              type="button"
              onClick={() => setOpenDropdown((prev) => !prev)}
              className={`w-full flex justify-between items-center rounded-lg bg-[#121826] border border-gray-700 p-2.5 text-sm focus:outline-none transition ${
                openDropdown ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <span
                className={`${
                  selectedType === "Select a project type"
                    ? "text-gray-500"
                    : ""
                }`}
              >
                {selectedType}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-4 h-4 transform transition-transform ${
                  openDropdown ? "rotate-180" : "rotate-0"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>

            {openDropdown && (
              <ul className="absolute left-0 right-0 mt-1 bg-[#121826] border border-gray-700 rounded-lg shadow-lg z-10 overflow-hidden text-sm">
                {projectTypes.map((type) => (
                  <li
                    key={type}
                    onClick={() => {
                      setSelectedType(type);
                      setOpenDropdown(false);
                    }}
                    className="px-3 py-2 hover:bg-blue-600 hover:text-white cursor-pointer transition"
                  >
                    {type}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1">Project Details</label>
            <textarea
              placeholder="Tell us about your goals, timeline, or ideas..."
              rows={3}
              className="w-full rounded-lg bg-[#121826] border border-gray-700 p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-lg py-2.5 text-sm font-medium"
          >
            Get My Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetQuoteModal;
