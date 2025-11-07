import Image from "next/image";
import React from "react";

interface reasonTabProps {
  number: number;
  title: string;
  desc: string;
  icon: string;
  borderStyle?: string;
}
const ReasonTab = ({
  number,
  title,
  desc,
  icon,
  borderStyle,
}: reasonTabProps) => {
  return (
    <div
      data-aos="fade-up"
      className={`relative border-b-[0.5px] border-[#363D4F] ${borderStyle} mt-[30px] p-8 md:p-5 w-full
     flex md:flex-row flex-col items-center text-center`}
    >
      {/* Left */}
      <div className="absolute left-5 top-0 lg:top-1/2 -translate-y-1/2 text-left text-[20px] text-[#363D4F] font-semibold">
        <p>0{number}</p>
      </div>

      {/* Middle */}
      <div className="mx-auto  text-left w-full md:w-[600px] flex flex-col gap-2">
        <h3 className="text-[20px] font-semibold">{title}</h3>
        <p className="text-[13px] text-[#E9EBF1]">{desc}</p>
      </div>

      {/* Right */}
      <div className="absolute right-5 top-0 lg:top-1/2 -translate-y-1/2">
        <Image src={icon} width={45} height={45} alt="icon" />
      </div>
    </div>
  );
};

export default ReasonTab;
