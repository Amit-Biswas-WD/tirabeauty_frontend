"use client";

import Image from "next/image";
import { useState } from "react";

export const GoogleLogin = () => {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      console.log("Google login...");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gray-300"></div>
        <span className="text-sm text-gray-500">OR</span>
        <div className="h-px flex-1 bg-gray-300"></div>
      </div>

      {/* Google Login Button */}
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 font-medium bg-white hover:bg-gray-100 active:scale-[0.98] transition-all duration-150 shadow-sm"
      >
        <Image
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google logo"
          width={20}
          height={20}
        />
        <span className="text-sm md:text-base">Sign in with Google</span>
      </button>
    </>
  );
};
