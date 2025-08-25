import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row justify-between px-[30px] md:pl-[100px] pt-[100px] pb-[50px]">
        {/* Footer Links and Icons */}
        <div className="flex flex-col md:flex-row gap-[80px] mb-[75px] md:mb-0 ">
          {/* Services */}
          <div className="flex flex-col gap-6">
            <h3 className="footerTitle">Services</h3>
            <div className="flex flex-col gap-[13px]">
              <Link href={"/"} className="footerLink">
                Software Development
              </Link>
              <Link href={"/"} className="footerLink">
                System Design
              </Link>
              <Link href={"/"} className="footerLink">
                Applications Development
              </Link>
              <Link href={"/"} className="footerLink">
                Platform Development
              </Link>
              <Link href={"/"} className="footerLink">
                IT Support Solutions
              </Link>
              <Link href={"/"} className="footerLink">
                Security Solutions
              </Link>
              <Link href={"/"} className="footerLink">
                Infrastructure Management
              </Link>
              <Link href={"/"} className="footerLink">
                Digital Transformations
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-6 w-auto">
            <h3 className="footerTitle">Company</h3>
            <div className="flex flex-col gap-[13px]">
              <Link href={"/"} className="footerLink">
                About Us
              </Link>
              <Link href={"/"} className="footerLink">
                Our Teams
              </Link>
              <Link href={"/"} className="footerLink">
                Careers
              </Link>
              <Link href={"/"} className="footerLink">
                Case Studies
              </Link>
              <Link href={"/"} className="footerLink">
                Blog
              </Link>
              <Link href={"/"} className="footerLink">
                Contact
              </Link>
            </div>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-6 w-[300px]">
            <h3 className="footerTitle">Contacts</h3>
            <div className="flex flex-col gap-[13px]">
              <div className="flex flex-row items-center gap-2">
                <Image
                  src={"/assets/footerIcons/phone.png"}
                  height={30}
                  width={30}
                  alt="phone"
                />
                <p>+1 (555) 123-4567</p>
              </div>

              <div className="flex flex-row items-center gap-2 ">
                <Image
                  src={"/assets/footerIcons/email.png"}
                  height={30}
                  width={30}
                  alt="email"
                />
                <p>info@truenorthglobalsolutions.com</p>
              </div>

              <div className="flex flex-row items-center gap-2">
                <Image
                  src={"/assets/footerIcons/location.png"}
                  height={30}
                  width={30}
                  alt="location"
                />
                <p>123 Global Plaza, International District, Business Hub</p>
              </div>

              {/* Socials */}
              <div className="flex flex-row gap-4 mt-[20px]">
                <div className="footerIcon">
                  <Image
                    src={"/assets/footerIcons/linkedIn.png"}
                    height={30}
                    width={30}
                    alt="linkIn"
                  />
                </div>
                <div className="footerIcon">
                  <Image
                    src={"/assets/footerIcons/twitter.png"}
                    height={30}
                    width={30}
                    alt="twitter"
                  />
                </div>
                <div className="footerIcon">
                  <Image
                    src={"/assets/footerIcons/instagram.png"}
                    height={30}
                    width={30}
                    alt="instagram"
                  />
                </div>
                <div className="footerIcon">
                  <Image
                    src={"/assets/footerIcons/facebook.png"}
                    height={30}
                    width={30}
                    alt="facebook"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Giant Logo */}
        <div className="absolute top-1/2 right-0 translate-y-[-50%] md:translate-0 md:relative md:block  z-[-1]">
          <Image
            src={"/assets/largeLogo.png"}
            width={280}
            height={550}
            alt="logo"
          />
        </div>
      </div>

      <div
        className="flex flex-row gap-1 md:gap-2 absolute bottom-[50px] md:bottom-[80px] px-[30px] 
      w-full md:px-[100px] left-0"
      >
        <p className="text-[12px] md:text-[14px]">All Rights Reserved ©2025</p>
        <p
          className="bg-gradient-to-b from-[#F9C360] 
            to-[#E87A36] bg-clip-text text-transparent text-[12px] md:text-[14px]"
        >
          TrueNorth Global Solutions
        </p>
      </div>
    </div>
  );
};

export default Footer;
