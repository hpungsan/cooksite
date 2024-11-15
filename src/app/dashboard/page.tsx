// src/app/dashboard/page.tsx
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="p-4 sm:p-6">
      <Card className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0"> 
          {/* Speech Bubble */}
          <div className="relative bg-[#f9e4a7] p-6 sm:p-8 rounded-xl shadow-md text-center w-full sm:max-w-md sm:mr-[-1rem]"> 
            {/* Desktop arrow */}
            <div className="hidden sm:block absolute right-0 top-1/2 translate-x-4 -translate-y-1/2"> 
              <div className="w-0 h-0 border-y-[25px] border-y-transparent border-l-[50px] border-l-[#f9e4a7]" /> 
            </div>
            {/* Mobile arrow */}
            <div className="sm:hidden absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-x-[20px] border-x-transparent border-t-[40px] border-t-[#f9e4a7]" />
            </div>
            <h2 className="text-lg sm:text-2xl font-semibold mb-3"> 
              Welcome to your Dashboard
            </h2>
            <p className="text-muted-foreground sm:text-lg"> 
              Select a tab from the sidebar to get started.
            </p>
          </div>
          
          {/* Mascot */}
          <div className="relative w-64 h-64 sm:w-96 sm:h-96 sm:ml-[-2rem]"> 
            <Image
              src="/mascotv3.png"
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