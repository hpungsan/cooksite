"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MessageCircle, Users, User } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import localFont from "next/font/local";
import { Eye } from "lucide-react";
import Link from "next/link";


const magicRetro = localFont({
  src: "../fonts/MagicRetro.ttf",
  variable: "--font-magic-retro",
});

export default function Page() {
  return (
    <main
      className={`${magicRetro.variable} container mx-auto px-4 sm:px-6 space-y-4 sm:space-y-6 relative`}
    >
      {/* Decorative stars - hide on mobile */}
      <div className="hidden sm:block absolute top-[80px] right-[200px] -z-10">
        <Image
          src="/greenstar.png"
          alt=""
          width={40}
          height={40}
          aria-hidden="true"
        />
      </div>

      <div className="hidden sm:block absolute top-[100px] right-[380px] -z-10">
        <Image
          src="/yellowstar.png"
          alt=""
          width={30}
          height={30}
          aria-hidden="true"
        />
      </div>

      {/* Mascot and Welcome Message */}
      <div className="pl-0 mb-4 sm:mb-6">
        <div className="flex flex-col-reverse sm:flex-row-reverse items-center gap-8 sm:gap-10 sm:mr-44"> 
          {/* Mascot Image */}
          <div className="relative w-56 h-56 sm:w-96 sm:h-96 mb-8 sm:mb-0">
            <Image
              src="/homemascot.png"
              alt="Garnish Mascot"
              fill
              className="object-contain"
            />
          </div>

          {/* Speech Bubble */}
          <div className="relative bg-[#f9e4a7] p-6 sm:p-8 rounded-3xl shadow-lg w-[95%] mx-auto sm:w-full sm:max-w-[700px] sm:ml-60">
            {/* Desktop speech bubble pointer */}
            <div className="hidden sm:block absolute right-0 top-1/2 translate-x-8 -translate-y-1/2">
              <div className="w-0 h-0 border-y-[20px] border-y-transparent border-l-[40px] border-l-[#f9e4a7]" />
            </div>
            {/* Mobile speech bubble pointer */}
            <div className="sm:hidden absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full">
              <div className="w-0 h-0 border-x-[20px] border-x-transparent border-t-[40px] border-t-[#f9e4a7]" />
            </div>
            <h1 className={`text-2xl sm:text-[2.5rem] leading-relaxed ${magicRetro.className} text-center`}>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
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
                <div className="absolute bottom-0 w-full p-2 sm:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-200 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="flex items-center gap-2 text-white">
                    <Eye className="w-4 h-4" />
                    <span className="text-xs sm:text-sm font-medium">See Post</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* This Week Section */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Coming This week...</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
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
                  <p className="text-sm text-muted-foreground">
                    Join us on the 27th for a community potluck dinner!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Weekly Theme and Community Blog Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Cards remain the same */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Theme</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-base text-muted-foreground">
              This week we are focusing on healthy meal preparation and sharing
              our favorite recipes!
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Community Blog</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-base text-muted-foreground">
              Share your cooking journey and inspire others with your culinary
              adventures.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-[#f9e4a7] mt-10 sm:mt-20 p-4 sm:p-8 rounded-xl">
      <div className="container mx-auto px-4 py-4"> 
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Logo and Address */}
          <div className="flex flex-col items-start mb-6 lg:mb-0 -ml-2 -mt-2">
            <Image 
              src="/footerlogo.png"
              alt="Garnish Logo"
              width={200} 
              height={67} 
              className="mb-4 lg:-ml-6 lg:-mt-8" 
            />
            <address className="not-italic text-sm text-gray-600">
              2917 Herb Way<br />
              Indianapolis, IN<br />
              46206, USA
            </address>
          </div>

          {/* Navigation Links  */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-6">
            {/* Community Section */}
            <div className="flex flex-col space-y-2">
              <h3 className="font-bold mb-2">Community</h3>
              <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">Baking Club</span>
              <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">Vegan Recipes</span>
              <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">Meat Lovers</span>
            </div>

            {/* Trending Section */}
            <div className="flex flex-col space-y-2">
              <h3 className="font-bold mb-2">Trending</h3>
              <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">Italian</span>
              <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">Meal Prep</span>
              <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">Baking</span>
            </div>

            {/* Rewards Section */}
            <div className="flex flex-col space-y-2">
              <h3 className="font-bold mb-2">Rewards</h3>
              <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">MadMush Discount</span>
              <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">Boost Profile</span>
              <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">Recover Streak</span>
            </div>

            {/* Profile Section */}
            <div className="flex flex-col space-y-2">
              <h3 className="font-bold mb-2">Profile</h3>
              <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">Instagram</span>
              <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">Facebook</span>
              <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">YouTube</span>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-4 lg:mb-8 lg:ml-8"> 
            <h3 className="font-bold mb-2 text-lg"> 
              Garnish Your Food, Garnish Your Life.
            </h3>
            <p className="mb-2 text-sm">Sign up for updates from Garnish</p> 
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Email"
                className="rounded-full text-sm border-gray-300"
              />
              <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full text-sm px-6">
                JOIN
              </Button>
            </div>
            <p className="mt-2 text-sm">support@garnish.com</p> 
          </div>
        </div>
        
        {/* Copyright and Links */}
        <div className="mt-2 pt-2 border-t border-gray-300 flex flex-wrap justify-between items-center text-xs text-gray-500">
          <p>&copy; 2024 Garnish</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Terms of Use</a>
            <a href="#" className="hover:text-gray-900">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
    </main>
  );
}
