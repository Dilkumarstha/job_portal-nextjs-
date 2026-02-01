import BrowseByCategory from "@/components/LandingPage/BrowseByCategory/page";
import MainPage from "@/components/LandingPage/MainPage/page";
import RecentJob from "@/components/LandingPage/RecentJobs/recentjobs";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <MainPage />
      <RecentJob />
      <BrowseByCategory/>
    </div>
  );
};

export default HomePage;
