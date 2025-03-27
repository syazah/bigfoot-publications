import React from "react";
import PreLoader from "../components/PreLoader/PreLoader";
import Navbar from "../components/Navbar/Navbar";
import Contact from "../components/ContactUs/Contact";
import Footer from "../components/Footer/Footer";
import SocialMediaHeader from "../components/SocialMedia/SocialMediaHeader";
import CatchUs from "../components/CATCHUS/CatchUs";
import PublishingProcedure from "../components/PublishingProcedure/PublishingProcedure";
import NewsCov from "../components/NewsCov/NewsCov";
import Packages from "../components/Packages/Packages";
import Testimonials from "../components/Testimonials/Testimonials";
import Whatsapp from "../components/whatsappComponent/Whatsapp";
import AskQuery from "../components/AskQuery/AskQuery";
import Highlights from "../components/Highlights/Highlights";

const SocialMedia = () => {
  return (
    <div className="flex flex-col items-center">
      <PreLoader />
      <Navbar />
      <SocialMediaHeader />
      <CatchUs />
      <PublishingProcedure />
      <NewsCov />
      <Packages />
      <div className={"w-full justify-center flex items-center"}>
        <img className="w-full md:w-[95%]" src="PACKAGES.png" />
      </div>
      <div className="flex flex-col w-full gap-0 justify-center items-center bg-[#0C356A]">
        <div className="flex flex-col gap-3 items-center m-16">
          <h4 className="text-white text-xl font-normal">Voices of Praise: What Our Readers and Authors Say</h4>
          <h2 className="text-white text-4xl font-bold">Our Testimonials</h2>
        </div>
        <Testimonials />
      </div>
      <AskQuery />
      <Whatsapp />
      <Footer />
    </div>
  );
};

export default SocialMedia;
