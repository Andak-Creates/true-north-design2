import React from "react";
import TestimonialCard from "./ui/TestimonialCard";

const Testimonial = () => {
  return (
    <section
      id="testimonials"
      className="h-auto w-full relative overflow-hidden
    flex flex-col items-center py-[50px] md:py-[100px]"
    >
      {/* content */}
      <div className="w-full md:w-[90%] lg:w-[40%] text-center px-[40px]">
        <p>Testimonials</p>
        <h1 className="text-[30px] lg:text-[40px] ">
          Feedbacks on our Services and Solutions
        </h1>
      </div>

      <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[50px]">
        <TestimonialCard
          desc="TrueNorth’s user-friendly dashboards have 
                simplified our digital strategy 
                management. "
          username="Fig Nelson"
          socialIcon="/assets/avatar-socials/twitter.png"
          avatar="/assets/avatar-socials/nelson.png"
          userhandle="@fignel_sooon"
        />

        <TestimonialCard
          desc="TrueNorth has truly transformed our online 
                presence. With its powerful analytics and 
                seamless integration, we've gained 
                invaluable insights."
          username="Sadie Berlin"
          socialIcon="/assets/avatar-socials/instagram.png"
          avatar="/assets/avatar-socials/sadie.png"
          userhandle="@sadiieberlin00"
        />

        <TestimonialCard
          desc="We've gained invaluable insights and 
            improved our SEO ranking, resulting in 
            significant business growth"
          username="Amaya Locosta"
          socialIcon="/assets/avatar-socials/facebook.png"
          avatar="/assets/avatar-socials/amaya.png"
          userhandle="@amayalocosta"
        />
      </div>

      <div>
        <button className="gradientBackground py-[15px] px-[25px] mt-[30px] cursor-pointer">
          Follow Us on Social Media
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
