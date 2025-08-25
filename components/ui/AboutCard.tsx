import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";

interface AboutCardProps {
  title: string;
  imageUrl: string;
  checkStyle: string;
}

const AboutCard = ({ title, imageUrl, checkStyle }: AboutCardProps) => {
  return (
    <div className="overflow-y-hidden p-[30px] flex flex-col gap-6  h-[300px] flex-shrink-0 w-[300px] snap-start">
      {/* check */}
      <div className={`p-2  rounded-full w-fit ${checkStyle}`}>
        <FaCheck />
      </div>

      <h3 className="text-[17px] font-semibold">{title}</h3>

      {/* animation glass? */}
      <div className=" w-full flex self-baseline">
        <Image
          src={imageUrl}
          width={100}
          height={100}
          alt="Image"
          className="object-cover w-full"
        />
      </div>
    </div>
  );
};

export default AboutCard;
