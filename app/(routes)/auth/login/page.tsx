"use client";

import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { GoogleLogin } from "@/components/auth/GoogleLogin";
import { HiOutlineEyeSlash, HiOutlineEye } from "react-icons/hi2";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login info:", { email, password });
    // Ekhane login API call korte paren
  };

  return (
    <div className="flex w-lg min-h-screen items-center justify-center text-[#211A1E] px-4">
      <div className="w-full space-y-6 rounded-xl bg-white p-8 shadow-lg">
        {/* Header */}
        <div className="text-center">
          <h1 className="lg:text-3xl md:text-2xl text-xl font-bold">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Please enter your details to login.
          </p>
        </div>
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
          autoComplete="off"
        >
          <div className="space-y-4">
            {/* Email Input */}
            <Input
              label="Email Address"
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="one-time-code"
              required
            />

            {/* Password Input */}
            <div className="relative">
              <Input
                label="Password"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 md:top-[44px] top-[38px] text-gray-500 hover:text-black focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <HiOutlineEyeSlash size={22} />
                ) : (
                  <HiOutlineEye size={22} />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 focus:ring-[#211A1E] cursor-pointer"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900 cursor-pointer"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link
                href="/auth/forgot-password"
                className="font-medium text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#211A1E] py-3 text-white font-medium transition-all hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#211A1E]"
          >
            Sign In
          </button>
        </form>

        {/* Google Login */}
        <GoogleLogin />

        {/* Footer */}
        <p className="text-center text-sm text-gray-600">
          Don,t have an account?{" "}
          <Link href="/auth/register" className="font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
