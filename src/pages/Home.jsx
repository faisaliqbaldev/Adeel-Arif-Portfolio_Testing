import React from "react";
import HeroSection_Home from "../components/HeroSection_Home";
import StatsStrip_Home from "../components/StatsStrip_Home";
import InstitutionalRecognition_Home from "../components/InstitutionalRecognition_Home";
import AboutPreview_Home from "../components/AboutPreview_Home";
import FeaturedResearch_Home from "../components/FeaturedResearch_Home";

const Home = () => {
  return (
    <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
      <main className="flex-grow pb-section-gap-mobile md:pb-section-gap">
        {/* <!-- Hero Section --> */}
        <HeroSection_Home />
        {/* <!-- Quick Stats Strip --> */}
        <StatsStrip_Home />
        {/* <!-- About Preview --> */}
        <AboutPreview_Home />
        {/* <!-- Featured Research --> */}
        <FeaturedResearch_Home />
        {/* <!-- Institutional Recognition --> */}
        <InstitutionalRecognition_Home />
      </main>
      
    </div>
  );
};

export default Home;
