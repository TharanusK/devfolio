import { Hero } from "@/components/hero";
import { CurriculumVitae } from "@/components/curriculum-vitae";
import { Contact } from "@/components/contact";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation Header */}
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <div className="w-full max-w-6xl flex justify-between items-center px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
              TK
            </div>
            <span className="font-semibold text-lg text-foreground">
              Tharanus Kongjaroon
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#cv"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              CV
            </Link>
            {/* <Link
              href="#feedback"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Feedback
            </Link> */}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all"
            >
              Contact
            </Link>
            {/* <Link
              href="/sign-in"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Sign In
            </Link> */}
            <ThemeSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-6xl">
          <Hero />
        </div>
      </div>

      {/* CV Section */}
      <CurriculumVitae />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
