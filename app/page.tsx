"use client";

import { JSX } from "react";
import CategoryNavbar from "@/components/layout/CategoryNavbar";
// import { HeroSection } from "@/components/layout/HeroSection";
import Navbar from "@/components/layout/Navbar";
// import { TopCategories } from "@/components/layout/TopCategories";
import HomeView from "@/components/home/HomeView";
import TopBar from "@/components/layout/Topbar";

export default function Home(): JSX.Element {
  return (
    <div className="bg-white font-sans">
      <div className="container mx-auto">
        {/* Sticky Header */}
        <div className="sticky top-0 z-50 bg-white px-4">
          <TopBar />
          <Navbar />
          <CategoryNavbar />
        </div>

        {/* Page Content */}
        <div>
          <HomeView />
          {/* <HeroSection />
          <TopCategories /> */}
        </div>
      </div>
    </div>
  );
}
