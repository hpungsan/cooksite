// src/app/dashboard/page.tsx
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="p-4 sm:p-6">
      <Card className="p-4 sm:p-6">
        <div className="flex flex-col items-center">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">
            Welcome to your Dashboard
          </h2>
          <p className="text-muted-foreground mb-4 sm:mb-6 text-center">
            Select a tab from the sidebar to get started.
          </p>
          <div className="relative w-48 h-48 sm:w-72 sm:h-72"> 
            <Image
              src="/homemascot.png"
              alt="Garnish Mascot"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </Card>
    </div>
  );
}