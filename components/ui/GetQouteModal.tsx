"use client";

import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface GetQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetQuoteModal: React.FC<GetQuoteModalProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const [selectedType, setSelectedType] = useState("Select a project type");
  const [openDropdown, setOpenDropdown] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  console.log(file);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation checks
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      selectedType === "Select a project type"
    ) {
      setError(
        "Please fill in all required fields: Full Name, Email, and Project Type."
      );
      setSuccess(null);
      setShowFeedbackModal(true);
      return;
    }

    // If valid
    setError(null);
    setSuccess("Form submitted successfully! We’ll reach out soon.");
    setShowFeedbackModal(true);

    // Reset form
    setFormData({ name: "", email: "", details: "" });
    setSelectedType("Select a project type");
    setFile(null);
  };

  if (!mounted || !isOpen) return null;

  return (
    <>
      {/* Main Quote Modal */}
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
          <h2 className="text-2xl font-semibold mb-2 text-center">
            Get a Quote
          </h2>
          <p className="text-gray-400 text-sm mb-6 text-center">
            Tell us about your project, and we’ll get back to you within 24
            hours.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full rounded-lg bg-[#121826] border ${
                  !formData.name.trim() && error
                    ? "border-red-500"
                    : "border-gray-700"
                } p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full rounded-lg bg-[#121826] border ${
                  !formData.email.trim() && error
                    ? "border-red-500"
                    : "border-gray-700"
                } p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>

            {/* Project Type Dropdown */}
            <div ref={dropdownRef} className="relative">
              <label className="block text-sm mb-1">Project Type</label>
              <button
                type="button"
                onClick={() => setOpenDropdown((prev) => !prev)}
                className={`w-full flex justify-between items-center rounded-lg bg-[#121826] border ${
                  selectedType === "Select a project type" && error
                    ? "border-red-500"
                    : "border-gray-700"
                } p-2.5 text-sm focus:outline-none transition ${
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
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Tell us about your goals, timeline, or ideas..."
                rows={3}
                className="w-full rounded-lg bg-[#121826] border border-gray-700 p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Attach PRD / Document
              </label>
              <input
                type="file"
                name="file"
                accept=".pdf,.doc,.docx,.txt"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="w-full text-sm text-gray-400 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700
              cursor-pointer
               transition rounded-lg py-2.5 text-sm font-medium"
            >
              Get My Quote
            </button>
          </form>
        </div>
      </div>

      {/* Feedback Modal */}
      {showFeedbackModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-[#121826] text-white rounded-2xl p-6 max-w-sm w-[90%] text-center shadow-2xl relative">
            <button
              onClick={() => {
                setShowFeedbackModal(false);
                onClose();
              }}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl cursor-pointer"
            >
              <AiOutlineClose />
            </button>

            {error ? (
              <>
                <h3 className="text-xl text-left  font-semibold text-red-500 mb-2">
                  Error
                </h3>
                <p className="text-gray-300 text-sm text-left">{error}</p>
              </>
            ) : (
              <>
                <h3 className="text-xl text-left font-semibold text-green-500 mb-2">
                  Success
                </h3>
                <p className="text-gray-300 text-sm text-left">{success}</p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default GetQuoteModal;
