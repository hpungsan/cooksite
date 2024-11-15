// src/app/dashboard/layout.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Users,
  Award,
  TrendingUp,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const sidebarItems = [
  {
    title: "Community",
    icon: <MessageCircle className="w-5 h-5" />,
    href: "/dashboard/community",
  },
  {
    title: "Friends",
    icon: <Users className="w-5 h-5" />,
    href: "/dashboard/friends",
  },
  {
    title: "Rewards",
    icon: <Award className="w-5 h-5" />,
    href: "/dashboard/rewards",
  },
  {
    title: "Trends",
    icon: <TrendingUp className="w-5 h-5" />,
    href: "/dashboard/trends",
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Auto-collapse on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center p-4 border-b bg-card">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            {sidebarItems.map((item) => (
              <DropdownMenuItem key={item.title} asChild>
                <Link 
                  href={item.href}
                  className={`w-full flex items-center gap-2 ${
                    pathname === item.href ? "bg-accent" : ""
                  }`}
                >
                  {item.icon}
                  {item.title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href="/dashboard" className="text-xl font-semibold ml-4">
          Dashboard
        </Link>
      </div>

      <div className="flex flex-1">
        {/* Desktop Sidebar - Hidden on mobile */}
        <div
          className={`
          hidden md:block
          transition-all duration-300 ease-in-out
          border-r bg-card relative
          ${isCollapsed ? "w-20" : "w-64"}
        `}
        >
          <div className="p-6">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -right-3 top-3 rounded-full border bg-background"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {isCollapsed ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
            </Button>

            <h1
              className={`
              text-2xl font-semibold mb-6
              transition-opacity duration-200
              ${isCollapsed ? "opacity-0" : "opacity-100"}
            `}
            >
              {!isCollapsed && (
                <Link href="/dashboard">
                  Dashboard
                </Link>
              )}
            </h1>

            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <Link key={item.title} href={item.href}>
                  <Button
                    variant={pathname === item.href ? "default" : "ghost"}
                    className={`
                      w-full justify-start gap-2
                      ${isCollapsed ? "px-2" : "px-4"}
                    `}
                  >
                    {item.icon}
                    <span
                      className={`
                      transition-opacity duration-200
                      ${isCollapsed ? "opacity-0 w-0" : "opacity-100"}
                    `}
                    >
                      {!isCollapsed && item.title}
                    </span>
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
}