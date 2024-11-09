// src/components/ui/navbar.tsx
import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link 
              href="/"
              className="text-lg font-semibold"
            >
              CookSite
            </Link>
          </div>
          
          <div className="flex gap-6">
            <Link 
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/community"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Community  
            </Link>
            <Link 
              href="/dashboard"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}