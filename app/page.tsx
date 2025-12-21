"use client";

import CategoryNavbar from "@/components/layout/CategoryNavbar";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] font-sans">
      <div className="container mx-auto px-10">
        <TopBar />
        <Navbar />
        <CategoryNavbar />
      </div>
    </div>
  );
}
