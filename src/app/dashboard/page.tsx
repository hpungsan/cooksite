// src/app/dashboard/page.tsx
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <Card className="p-6">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">
            Welcome to your Dashboard
          </h2>
          <p className="text-muted-foreground mb-6">
            Select a tab from the sidebar to get started.
          </p>
          <div className="relative w-72 h-72"> 
            <Image
              src="/homemascot.png"
              alt="Garnish Mascot"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}