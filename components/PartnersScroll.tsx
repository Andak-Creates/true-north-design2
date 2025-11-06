"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const PartnersScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  type PartnerItem = {
    uniqueId: string;
    x: number;
    image: string;
    id: number;
    alt: string;
  };

  const [items, setItems] = useState<PartnerItem[]>([]);
  const animationRef = useRef<number | null>(null);
  const speed = 1; // Adjust speed as needed

  useEffect(() => {
    const partners = [
      { image: "/assets/partners/amplitude.png", id: 1, alt: "Amplitude" },
      { image: "/assets/partners/invoice.png", id: 2, alt: "invoice" },
      { image: "/assets/partners/adtec.png", id: 3, alt: "adtec" },
      { image: "/assets/partners/triber.png", id: 4, alt: "triber" },
      { image: "/assets/partners/zuputa.png", id: 5, alt: "zuputa" },
      { image: "/assets/partners/xpeng.png", id: 6, alt: "xpeng" },
      { image: "/assets/partners/verox.png", id: 7, alt: "verox" },
      { image: "/assets/partners/republica.png", id: 8, alt: "republica" },
    ];

    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const itemWidth = 200;

    // Calculate how many items we need to fill the screen plus extras for seamless effect
    const itemsNeeded = Math.ceil(containerWidth / itemWidth) + partners.length;

    // Initial positioning
    const initialItems: PartnerItem[] = [];
    for (let i = 0; i < itemsNeeded; i++) {
      const partnerIndex = i % partners.length;
      initialItems.push({
        ...partners[partnerIndex],
        uniqueId: `item-${i}`,
        x: i * itemWidth,
      });
    }

    setItems(initialItems);

    const animate = () => {
      setItems((prevItems) => {
        return prevItems.map((item) => {
          let newX = item.x - speed;

          // move out of the left when completely out of view
          if (newX + itemWidth < 0) {
            // Find the rightmost item's position
            const rightmostX = Math.max(...prevItems.map((i) => i.x));
            newX = rightmostX + itemWidth;
          }

          return { ...item, x: newX };
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="h-auto w-full overflow-hidden flex items-center darkColor">
      {/* partners container */}
      <div
        ref={containerRef}
        className="relative w-full h-full mt-[730px] md:mt-[150px] mb-[100px]"
      >
        {items.map((item) => (
          <div
            key={item.uniqueId}
            className="absolute top-1/2 transform -translate-y-1/2"
            style={{
              left: `${item.x}px`,
              transform: `translateY(-50%) translateZ(0)`, // Hardware acceleration + centering
            }}
          >
            <div
              className="h-auto w-auto tent-[''] after:absolute
            after:right-[-70px] after:top-1/2 after:-translate-y-1/2 after:w-[1px]
            after:h-[20px] after:bg-gray-300"
            >
              <Image
                height={300}
                width={300}
                src={item.image}
                alt={item.alt}
                className="w-[60px] h-[60px] object-contain scale-135"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersScroll;
