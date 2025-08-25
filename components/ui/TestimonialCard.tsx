import Image from "next/image";
import Link from "next/link";
import React from "react";

type TestimonialCardProps = {
  desc: string;
  username: string;
  userhandle: string;
  avatar: string;
  socialIcon: string;
};

const TestimonialCard = ({
  desc,
  username,
  avatar,
  userhandle,
  socialIcon,
}: TestimonialCardProps) => {
  return (
    <div
      className="h-fit w-auto p-[5px] 
     bg-[#FFFFFF0A]
     rounded-lg text-left shadow-md"
    >
      <div
        className="flex flex-col gap-[30px] w-auto h-auto  p-[30px]
      rounded-lg"
      >
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[16px] font-bold">Incredibly useful product</h3>
          <p className="text-[16px] fadedText">{desc}</p>
        </div>

        <div className="flex flex-row justify-between">
          {/* Avatar Name and handle */}
          <div className="flex flex-row gap-[10px]">
            <div className="rounded-[50px] w-auto bg-[#E8E4F7]">
              <Image
                height={30}
                width={30}
                src={`${avatar}`}
                alt="avatar"
                className="w-[50px] rounded-full"
              />
            </div>

            {/* userName and handle */}
            <div className="text-[12px] flex flex-col justify-center">
              <p>{username}</p>
              <Link href={"#"} className="text-[#2563EB]">
                {userhandle}
              </Link>
            </div>
          </div>

          {/* Social media Icon */}
          <div className="rounded-[50px] w-[50px] h-[50px] p-1 bg-[#FFFFFF14] flex justify-center items-center">
            <Image
              width={25}
              height={25}
              src={`${socialIcon}`}
              alt="social media"
              className=" rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
