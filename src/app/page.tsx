"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MessageCircle, Users, User } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import localFont from "next/font/local";
import { Eye } from "lucide-react";

const magicRetro = localFont({
  src: "../fonts/MagicRetro.ttf",
  variable: "--font-magic-retro",
});

// Define the main page component
export default function Page() {
  return (
    <main
      className={`${magicRetro.variable} container mx-auto px-4 space-y-6 relative`}
    >
      {/* Decorative stars */}
      <div className="absolute top-[80px] right-[250px] -z-10">
        <Image
          src="/greenstar.png"
          alt=""
          width={40}
          height={40}
          aria-hidden="true"
        />
      </div>

      <div className="absolute top-[100px] right-[450px] -z-10">
        <Image
          src="/yellowstar.png"
          alt=""
          width={30}
          height={30}
          aria-hidden="true"
        />
      </div>

      {/* Mascot and Welcome Message */}
      <div className="pl-0 mb-6">
        <div className="flex flex-row-reverse items-center gap-10 mr-44"> 
          {/* Mascot Image */}
          <div className="relative w-96 h-96">
            <Image
              src="/homemascot.png"
              alt="Garnish Mascot"
              fill
              className="object-contain"
            />
          </div>

          {/* Speech Bubble */}
          <div className="relative bg-[#f9e4a7] p-6 rounded-3xl shadow-lg min-w-[400px]"> 
            <div className="absolute right-0 top-1/2 translate-x-6 -translate-y-1/2"> 
              <div className="w-0 h-0 border-y-[15px] border-y-transparent border-l-[30px] border-l-[#f9e4a7]" /> 
            </div>
            <h1 className={`text-[2.0rem] leading-relaxed ${magicRetro.className}`}>
            Welcome Back,
              <br />
              Hpung San Awng Jum!
            </h1>
          </div>
        </div>
      </div>

      {/* Food Gallery Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Food Gallery Preview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((num) => (
              <div 
                key={num} 
                className="relative group cursor-pointer aspect-square overflow-hidden rounded-md"
              >
                <Image
                  src={`/bpfood/bp${num}.png`}
                  alt={`Food preview ${num}`}
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
                <div 
                  className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-200"
                />
                {/* See Post Overlay */}
                <div className="absolute bottom-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-200 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="flex items-center gap-2 text-white">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm font-medium">See Post</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
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
              This week we're focusing on healthy meal preparation and sharing
              our favorite recipes!
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
              Share your cooking journey and inspire others with your culinary
              adventures.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-[#f9e4a7] mt-20 p-8 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>Human Health</li>
              <li>Animal Health</li>
              <li>Environmental Health</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Trending</h3>
            <ul className="space-y-2">
              <li>Pizza</li>
              <li>How to Make Ice Cream</li>
              <li>New Mac n Cheese</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Rewards</h3>
            <ul className="space-y-2">
              <li>Find a Farm</li>
              <li>Write a Letter</li>
              <li>Advocate</li>
              <li>Donate</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">
              Garnish Your Feed, Garnish Your Life.
            </h3>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Email"
                style={{ border: "1px solid black" }}
                className="rounded-full"
              />
              <Button className="bg-green-500 hover:bg-green-600 rounded-full">
                JOIN
              </Button>
            </div>
            <p className="mt-4 text-sm">support@garnish.com</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
