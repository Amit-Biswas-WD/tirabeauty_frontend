"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { HiOutlineEyeSlash, HiOutlineEye } from "react-icons/hi2";
import { GoogleLogin } from "@/components/auth/GoogleLogin";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Register info:", { name, email, password });
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
            Please enter your details to register.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
          autoComplete="off"
        >
          <div className="space-y-4">
            {/* Name Input */}
            <Input
              label="Full Name"
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
              required
            />

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
                className="absolute right-3 md:top-[44px] top-[38px] text-gray-500 hover:text-black"
              >
                {showPassword ? (
                  <HiOutlineEyeSlash size={20} />
                ) : (
                  <HiOutlineEye size={20} />
                )}
              </button>
            </div>

            {/* Confirm Password Input */}
            <div className="relative">
              <Input
                label="Confirm Password"
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                autoComplete="new-password"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 md:top-[44px] top-[38px] text-gray-500 hover:text-black"
              >
                {showConfirmPassword ? (
                  <HiOutlineEyeSlash size={20} />
                ) : (
                  <HiOutlineEye size={20} />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="/auth/forgot-password"
                className="text-blue-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#211A1E] py-3 text-white transition-colors hover:bg-black font-medium"
          >
            Sign In
          </button>
        </form>

        {/* Google Login */}
        <GoogleLogin />

        {/* Footer */}
        <p className="text-center text-sm text-gray-600">
          Don,t have an account?{" "}
          <a href="/auth/login" className="font-semibold hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
