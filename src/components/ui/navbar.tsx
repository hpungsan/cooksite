// src/components/ui/navbar.tsx
"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/feed", label: "Feed" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/calendar", label: "Calendar" },
  ];

  return (
    <nav className="bg-[#fffaed] border-b relative z-50">
      <div className="w-full px-2">
        <div className="flex h-16 items-center justify-between max-w-[1800px] mx-auto">
          <div className="flex items-center gap-0 pl-0 sm:pl-1"> 
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Garnish logo"
                width={140}
                height={140}
                className="object-contain mb-1"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Reduce right padding */}
          <div className="hidden lg:flex items-center gap-6 pr-0 sm:pr-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/profile"
              className="p-0.5 hover:text-primary transition-colors rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400"
              aria-label="Go to profile"
            >
              <div className="p-0.5 rounded-full bg-[#fffaed]">
                <Image 
                  src="/profile.png"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="object-contain rounded-full"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-[#fffaed] border-b shadow-lg z-50">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/profile"
              className="flex items-center gap-2 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="p-0.5 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400">
                <div className="p-0.5 rounded-full bg-[#fffaed]">
                  <Image 
                    src="/profile.png"
                    alt="Profile"
                    width={32}
                    height={32}
                    className="object-contain rounded-full"
                  />
                </div>
              </div>
              <span className="text-sm font-medium">Profile</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
