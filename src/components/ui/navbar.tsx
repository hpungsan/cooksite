// src/components/ui/navbar.tsx
import Link from "next/link";
import Image from "next/image"; 

export function Navbar() {
  return (
    <nav className=" bg-[#fffaed] border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-0 pl-0"> 
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

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/feed"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Feed
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/calendar"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Calendar
            </Link>
            <Link
              href="/profile"
              className="p-2 hover:text-primary transition-colors"
              aria-label="Go to profile"
            >
              <Image 
                src="/profilelogo.png"
                alt="Profile"
                width={40}
                height={40}
                className="object-contain rounded-full" // Added rounded-full for oval shape
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
