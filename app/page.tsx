import About from "@/components/About";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavigationBar from "@/components/NavigationBar";
import PartnersScroll from "@/components/PartnersScroll";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div className="w-[100%]">
      <NavigationBar />
      <HeroSection />
      <PartnersScroll />
      <Services />
      <About />
      <WhyUs />
      <Testimonial />
      <Footer />
    </div>
  );
}
