"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Archive } from "lucide-react"
import { useState } from "react"
import { Pencil } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { archiveItems, blogPosts } from "@/data/profile-data"

export default function ProfilePage() {
  const [isEditingBio, setIsEditingBio] = useState(false)
  const [bioText, setBioText] = useState(`Hi! I'm Hpung, a computer science student with a big love for cooking. 
  I enjoy trying out new recipes, experimenting with flavors, 
  and bringing friends together over a good meal. Excited to meet others who 
  share a passion for food and swap tips, tricks, and favorite dishes!`)

  return (
    <div className="min-h-screen bg-background">
      {/* Responsive banner height */}
      <div className="w-full h-32 sm:h-48 bg-muted relative rounded-xl border border-gray-200 shadow-md mb-16 sm:mb-8"> 
        <Image
          src="/banner.png"  
          alt="Profile banner"
          fill
          className="object-cover rounded-xl"
        />
        {/* Centered profile image on mobile */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 sm:left-8 sm:translate-x-0">
          <div className="rounded-full border-4 sm:border-8 border-background overflow-hidden shadow-lg"> 
            <Image
              src="/profile.png"
              alt="Profile picture"
              width={96}
              height={96}
              className="object-cover sm:w-[128px] sm:h-[128px]"
            />
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="container mx-auto px-4 pt-20 pb-16 max-w-7xl">
        <div className="space-y-6 sm:space-y-8"> 
          <div className="space-y-4 bg-white rounded-xl p-4 sm:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                Biography
              </h1>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsEditingBio(!isEditingBio)}
              >
                <Pencil className="h-4 w-4" />
              </Button>
            </div>
            
            {isEditingBio ? (
              <div className="space-y-4">
                <Textarea 
                  onChange={(e) => setBioText(e.target.value)}
                  className="min-h-[120px] text-base sm:text-lg"
                  value={bioText}
                />
                <div className="flex gap-2 justify-end">
                  <Button 
                    variant="outline"
                    onClick={() => setIsEditingBio(false)}
                  >
                    Cancel
                  </Button>
                  <Button onClick={() => setIsEditingBio(false)}>
                    Save
                  </Button>
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl">
                {bioText}
              </p>
            )}
          </div>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 mt-6 sm:mt-8">
            {/* Archive Section */}
            <div className="sm:col-span-3 space-y-4">
              <div className="flex items-center gap-3">
                <Archive className="w-5 h-5" />
                <h2 className="text-xl font-semibold">Archive</h2>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-2 gap-2">
                {archiveItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden group cursor-pointer">
                    <CardContent className="p-0 relative">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={200}
                        height={150}
                        className="w-full aspect-square object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 sm:group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <p className="text-white text-xs sm:text-sm font-medium text-center px-2">{item.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Blog Posts Section */}
            <div className="sm:col-span-9">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">My Latest Posts</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 sm:hover:-translate-y-1">
                    <CardContent className="p-0">
                      <div className="relative">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={600}
                          height={400}
                          className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
                        <h3 className="text-lg sm:text-xl font-semibold group-hover:text-purple-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {post.date}
                        </p>
                        <p className="text-xs sm:text-sm line-clamp-2 text-gray-600">
                          {post.excerpt}
                        </p>
                        <div className="pt-2 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button variant="outline" className="text-xs sm:text-sm w-full sm:w-auto">
                            Read More →
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}