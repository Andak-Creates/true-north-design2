"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AboutCard from "./AboutCard";

export default function AboutScroller() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // check scroll position
  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  // scroll logic
  const scroll = useCallback((dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const card = el.querySelector("div") as HTMLElement;
    if (!card) return;

    const cardWidth = card.offsetWidth + 16; // gap-4 = 16px
    el.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });

    resetAutoScroll(); // reset timer when user clicks
  }, []);

  // auto-scroll function
  const startAutoScroll = useCallback(() => {
    stopAutoScroll(); // clear if already running
    intervalRef.current = setInterval(() => {
      scroll("right");
    }, 7000); // 👈 auto-scroll every 4s (change as needed)
  }, [scroll]);

  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const resetAutoScroll = () => {
    startAutoScroll(); // restart countdown
  };

  // setup
  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    startAutoScroll(); // kick off auto scroll

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
      stopAutoScroll();
    };
  }, [startAutoScroll]);

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
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`scrollBarBtn ${
              !canScrollLeft
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`scrollBarBtn ${
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
