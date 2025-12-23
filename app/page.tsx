"use client";

import CategoryNavbar from "@/components/layout/CategoryNavbar";
import { HeroSection } from "@/components/layout/HeroSection";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import TopCategories from "@/components/layout/TopCategories";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="container mx-auto">
        {/* Sticky Header */}
        <div className="sticky top-0 z-50 bg-white px-4">
          <TopBar />
          <Navbar />
          <CategoryNavbar />
        </div>

        {/* Page Content */}
        <div>
          <HeroSection />
          <TopCategories />
        </div>
      </div>
    </div>
  );
}
