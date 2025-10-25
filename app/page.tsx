"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Topbar } from "@/components/layout/Topbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      <Topbar />
      <Navbar />
    </div>
  );
}
