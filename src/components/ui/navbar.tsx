// src/components/ui/navbar.tsx
import Link from 'next/link'
import { UserCircle } from 'lucide-react'

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
          
          <div className="flex items-center gap-6">
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
              <UserCircle className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}