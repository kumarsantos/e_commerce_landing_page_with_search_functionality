import React from "react";
import HeroSection from "../../components/HeroSection";
import Searchbox from "../../components/Searchbox";

const HomePage = () => {
  return (
    <div>
      <div className="flex justify-end mt-6 pr-16">
        <Searchbox />
      </div>
      <HeroSection />
    </div>
  );
};

export default HomePage;
