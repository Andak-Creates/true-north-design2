import React from "react";
import ReasonTab from "./ui/ReasonTab";
import RulerOverlay from "./ui/RulerOverlay";

const WhyUs = () => {
  return (
    <section className="py-[100px] px-[30px] md:px-[100px] brightBg relative darkColor">
      <div className="w-full" data-aos="zoom-in">
        <h1 className="text-[40px] md:text-[60px] font-bold leading-[60px]">
          What We Offer at
          <br />
          <span
            className="text-[45px] md:text-[65px] bg-gradient-to-r from-[#9580E7] to-[#2563EB]
           bg-clip-text text-transparent"
          >
            TrueNorth?
          </span>
        </h1>

        {/* Why choose Us */}

        <div className="flex flex-col gap-4 mt-[50px] w-full md:w-[95%] md:mx-auto xl:w-[80%] xl:mx-auto">
          <ReasonTab
            number={1}
            title="Free Initial Consultation"
            desc="We believe in value from day one, start with a no-obligation consultation to assess your needs and explore solutions."
            icon="/assets/reasonsIcon/people.png"
          />

          <ReasonTab
            number={2}
            title="Transparent pricing"
            desc="No hidden fees or fine print, just clear, honest pricing that fits your budget and scope."
            icon="/assets/reasonsIcon/currency.png"
          />

          <ReasonTab
            number={3}
            title="Global expertise, local service"
            desc="Our international experience meets personalized support, giving your business the best of both worlds."
            icon="/assets/reasonsIcon/globe.png"
          />

          <ReasonTab
            number={4}
            title="Ongoing support & maintenance"
            desc="Beyond delivery, we stay with you, ensuring your systems run smoothly with continious updates and support."
            icon="/assets/reasonsIcon/support.png"
          />

          <ReasonTab
            number={5}
            title="Proven track record"
            desc="Trusted by businesses worldwide, our portfolio reflects consistent success across diverse industries"
            icon="/assets/reasonsIcon/speed.png"
            borderStyle="border-none"
          />
        </div>
      </div>
      <RulerOverlay tickCount={30} spacing={50} color="#888" opacity={0.3} />
    </section>
  );
};

export default WhyUs;
