// Import necessary components and icons
"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MessageCircle, Users, User } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

// Add these banner images at the top of the file
const bannerImages = [
  "/pbfood/pb1.png",
  "/pbfood/pb2.png", 
  "/pbfood/pb3.png"
];

// Define the main page component
export default function Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
    }, 4000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="container mx-auto p-4 space-y-6">
      {/* Banner with rotating images */}
      <div className="relative h-64 rounded-xl overflow-hidden mb-6">
        {bannerImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Banner ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Overlay and Welcome Text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
          <div className="flex justify-between items-center h-full p-8">
            <h1 className="text-4xl font-bold text-white">Welcome back Hpung!</h1>
            <div className="flex gap-4">
            </div>
          </div>
        </div>
      </div>

      {/* Add new Profile Link section */}
      <div className="flex justify-end mb-4">
        <Link href="/profile">
          <Button className="gap-2" variant="outline">
            <User className="w-4 h-4" aria-hidden="true" />
            View Profile
          </Button>
        </Link>
      </div>

      {/* This Week Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Coming This week...</h2>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" aria-hidden="true" />
              Upcoming Group Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Calendar className="w-5 h-5 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-medium">Better Cooking Potluck</h3>
                  <p className="text-muted-foreground">
                    Join us on the 27th for a community potluck dinner!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Weekly Theme and Community Blog Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Weekly Theme Card */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Theme</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This week we're focusing on healthy meal preparation and sharing our favorite recipes!
            </p>
          </CardContent>
        </Card>

        {/* Community Blog Card */}
        <Card>
          <CardHeader>
            <CardTitle>Community Blog</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Share your cooking journey and inspire others with your culinary adventures.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
