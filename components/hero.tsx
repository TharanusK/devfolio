"use client";

import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col gap-6">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Fullstack Developer
              <br />
              <span className="text-foreground">&amp; Designer</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Hi, I’m Tharanus Kongjaroon, a{" "}
              <span className="text-cyan-500 font-medium">
                full-stack developer
              </span>{" "}
              focused on building{" "}
              <span className="text-cyan-500 font-medium">beautiful, </span>
              <span className="text-cyan-500 font-medium">
                user-friendly
              </span>{" "}
              applications while writing{" "}
              <span className="text-cyan-500 font-medium">clean, </span>
              <span className="text-cyan-500 font-medium">
                maintainable code.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                href="#cv"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                View CV
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-foreground bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Gradient Border Container */}
              <div className="relative w-[280px] h-[320px] md:w-[340px] md:h-[380px] lg:w-[400px] lg:h-[450px] rounded-3xl overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400 via-purple-500 to-violet-600 p-1 rounded-3xl">
                  <div className="w-full h-full bg-white dark:bg-gray-900 rounded-3xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/headshot.jpg"
                      alt="Tharanus Kongjaroon - Fullstack Developer & Designer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-violet-200 to-purple-300 rounded-full opacity-60 blur-2xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-blue-200 to-cyan-300 rounded-full opacity-50 blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
