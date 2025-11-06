"use client";

import React from "react";

interface RulerOverlayProps {
  tickCount?: number; // number of major tick marks
  spacing?: number; // space between each major tick
  color?: string;
  opacity?: number;
}

const RulerOverlay: React.FC<RulerOverlayProps> = ({
  tickCount = 20,
  spacing = 40, // slightly tighter spacing
  color = "#888",
  opacity = 0.3,
}) => {
  const ticks = Array.from({ length: tickCount + 1 }, (_, i) => i * 10);

  return (
    <>
      {/* Left Ruler */}
      <svg
        className="absolute left-0 top-1/2 -translate-y-1/2 h-[85%] w-10 pointer-events-none select-none hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
      >
        {ticks.map((num, i) => (
          <g key={i} transform={`translate(0, ${i * spacing})`}>
            {/* Number */}
            <text
              x="6"
              y="0"
              fill={color}
              fontSize="8"
              alignmentBaseline="middle"
            >
              {num}
            </text>

            {/* Main tick */}
            <line
              x1="16"
              y1="0"
              x2="35"
              y2="0"
              stroke={color}
              strokeWidth="0.75"
            />

            {/* Minor ticks */}
            {[8, 16, 24, 32].map((offset) => (
              <line
                key={offset}
                x1="16"
                y1={offset}
                x2="28"
                y2={offset}
                stroke={color}
                strokeWidth="0.5"
              />
            ))}
          </g>
        ))}
      </svg>

      {/* Right Ruler */}
      <svg
        className="absolute right-0 top-1/2 -translate-y-1/2 h-[85%] w-10 pointer-events-none select-none hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
      >
        {ticks.map((num, i) => (
          <g key={i} transform={`translate(0, ${i * spacing})`}>
            {/* Main tick */}
            <line
              x1="0"
              y1="0"
              x2="20"
              y2="0"
              stroke={color}
              strokeWidth="0.75"
            />

            {/* Minor ticks */}
            {[8, 16, 24, 32].map((offset) => (
              <line
                key={offset}
                x1="8"
                y1={offset}
                x2="20"
                y2={offset}
                stroke={color}
                strokeWidth="0.5"
              />
            ))}

            {/* Number */}
            <text
              x="22"
              y="0"
              fill={color}
              fontSize="8"
              textAnchor="start"
              alignmentBaseline="middle"
            >
              {num}
            </text>
          </g>
        ))}
      </svg>
    </>
  );
};

export default RulerOverlay;
