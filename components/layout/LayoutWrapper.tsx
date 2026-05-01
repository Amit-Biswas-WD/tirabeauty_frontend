"use client";

import { usePathname } from "next/navigation";

import { BenefitBarSection } from "@/components/home/BenefitBarSection";
import { ChatNowSection } from "@/components/home/ChatNowSection";
import { Navbar } from "@/components/layout/Navbar";
import { CategoryNavbar } from "@/components/layout/CategoryNavbar";
import { TopBar } from "@/components/layout/Topbar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAuthPage =
    pathname.startsWith("/auth/login") ||
    pathname.startsWith("/auth/register") ||
    pathname.startsWith("/auth/forgot-password");

  // AUTH PAGES
  if (isAuthPage) {
    return <div className="w-full">{children}</div>;
  }

  //  PUBLIC PAGES
  return (
    <div className="container mx-auto">
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-white px-4">
        <TopBar />
        <Navbar />
        <CategoryNavbar />
      </div>

      {children}

      {/* Footer */}
      <ChatNowSection />
      <BenefitBarSection />
    </div>
  );
}
