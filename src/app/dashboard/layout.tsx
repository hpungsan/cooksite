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
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div
        className={`
        transition-all duration-300 ease-in-out
        border-r bg-card relative
        ${isCollapsed ? "w-20" : "w-64"}
      `}
      >
        <div className="p-6">
          {/* Toggle Button */}
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
            {!isCollapsed && "Dashboard"}
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
      <div className="flex-1">{children}</div>
    </div>
  );
}
