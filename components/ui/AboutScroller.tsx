"use client";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // icons
import AboutCard from "./AboutCard";

export default function AboutScroller() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // check scroll position on load and when scrolling
  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.8; // scroll by 80% of container
    el.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* Cards Container */}
      <div
        ref={scrollRef}
        className="flex flex-row gap-4 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory"
      >
        <AboutCard
          checkStyle="bg-gradient-to-b from-[#9580E7] to-[#2563EB]"
          title="2 decades of aggregated experience"
          imageUrl="/assets/aboutImages/blue.png"
        />
        <AboutCard
          checkStyle="bg-gradient-to-b from-[#F9C360] to-[#E87A36]"
          title="Cutting-edge technology solutions"
          imageUrl="/assets/aboutImages/gold.png"
        />
        <AboutCard
          checkStyle="bg-gradient-to-b from-[#F9606B] to-[#E8363F]"
          title="Agile development methodology"
          imageUrl="/assets/aboutImages/red.png"
        />
        <AboutCard
          checkStyle="bg-gradient-to-b from-[#26E158] to-[#019231]"
          title="Comprehensive project management"
          imageUrl="/assets/aboutImages/green.png"
        />
        <AboutCard
          checkStyle="bg-gradient-to-b from-[#7249EE] to-[#6B43C6]"
          title="24/7 technical support"
          imageUrl="/assets/aboutImages/purple.png"
        />
        <AboutCard
          checkStyle="bg-gradient-to-b from-[#15C0EA] to-[#507EDF]"
          title="Scalable and secure solutions"
          imageUrl="/assets/aboutImages/skyBlue.png"
        />
      </div>

      <div className="flex flex-row justify-between items-center mt-[50px]">
        <div>
          <button className="gradientBackground py-[10px] px-[25px] cursor-pointer">
            Learn More Bout Us
          </button>
        </div>

        {/* Navigation buttons */}
        <div className="flex flex-row gap-2">
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`  scrollBarBtn
          ${
            !canScrollLeft
              ? "opacity-30 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={` scrollBarBtn
          ${
            !canScrollRight
              ? "opacity-30 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
