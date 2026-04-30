"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset link requested for:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#211A1E]">Forgot Password</h1>
          <p className="mt-2 text-sm text-gray-600">
            Enter your email address and we,ll send you a link to reset your
            password.
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <Input
                label="Email Address"
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#211A1E] py-3 text-white font-medium transition-all hover:bg-black"
            >
              Send Reset Link
            </button>
          </form>
        ) : (
          <div className="mt-6 p-4 bg-green-50 text-green-700 rounded-md text-center">
            If an account exists for {email}, you will receive a password reset
            link shortly.
          </div>
        )}

        {/* Back to Login */}
        <div className="text-center mt-4">
          <Link
            href="/auth/login"
            className="text-sm font-medium text-[#211A1E] hover:underline"
          >
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
