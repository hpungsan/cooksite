"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Archive, Plus } from "lucide-react"
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
  const [tags, setTags] = useState(["Vegan", "Asian Cuisine", "Desserts", "Healthy Cooking", "Quick Meals"])
  const [newTag, setNewTag] = useState("")
  const [isAddingTag, setIsAddingTag] = useState(false)

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
          {/* Premium ring animation */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 p-1 animate-spin-slow">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-amber-500 blur-sm animate-pulse" />
          </div>
          
          <div className="rounded-full border-4 sm:border-8 border-background overflow-hidden shadow-lg relative"> 
            <Image
              src="/profile.png"
              alt="Profile picture"
              width={96}
              height={96}
              className="object-cover sm:w-[128px] sm:h-[128px]"
            />
            
            {/* Premium badge */}
            <div className="absolute -right-1 -bottom-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full p-1.5 border-2 border-white">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.396-.957 1.506-.957 1.902 0l1.07 2.292a1 1 0 00.84.63l2.508.224c1.04.093 1.458 1.385.702 2.089l-1.898 1.765a1 1 0 00-.31.988l.583 2.47c.242 1.023-.902 1.827-1.808 1.27L9.95 12.96a1 1 0 00-1.002 0l-1.787 1.067c-.906.557-2.05-.247-1.808-1.27l.583-2.47a1 1 0 00-.31-.988L3.728 7.534c-.756-.704-.338-1.996.702-2.089l2.508-.224a1 1 0 00.84-.63l1.07-2.292z" />
              </svg>
            </div>
          </div>
          
          {/* Premium member text */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="px-3 py-1 bg-gradient-to-r from-amber-200 to-yellow-300 rounded-full text-xs sm:text-sm font-semibold text-amber-900 shadow-md border border-amber-300">
              Premium Member
            </span>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="container mx-auto px-4 pt-20 pb-16 max-w-7xl">
        <div className="space-y-6 sm:space-y-8">
          {/* Tags & Rewards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white rounded-xl p-4 sm:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100 relative">
            {/* Tags Section - Left */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-green-500 to-teal-600 bg-clip-text text-transparent">
                  Specialties
                </h1>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsAddingTag(!isAddingTag)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              {isAddingTag && (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Add new specialty..."
                  />
                  <Button
                    onClick={() => {
                      if (newTag.trim()) {
                        setTags([...tags, newTag.trim()])
                        setNewTag("")
                        setIsAddingTag(false)
                      }
                    }}
                  >
                    Add
                  </Button>
                </div>
              )}
              
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Dividers */}
            {/* Vertical divider for desktop */}
            <div className="hidden sm:block w-px bg-gray-200 absolute left-1/2 top-8 bottom-8" />
            
            {/* Horizontal divider for mobile */}
            <div className="sm:hidden w-full h-px bg-gray-200 my-4" />

            {/* Rewards Section - Right */}
            <div className="space-y-4 sm:pl-6">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
                Rewards
              </h1>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Image
                      src="/rewards/reward.png"
                      alt="Master Chef Badge"
                      width={40}
                      height={40}
                    />
                  </div>
                  <span className="text-xs text-center font-medium">Master Chef</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <Image
                      src="/rewards/reward.png"
                      alt="Popular Creator Badge"
                      width={40}
                      height={40}
                    />
                  </div>
                  <span className="text-xs text-center font-medium">Popular Creator</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <Image
                      src="/rewards/reward2.png"
                      alt="Trendsetter Badge"
                      width={40}
                      height={40}
                    />
                  </div>
                  <span className="text-xs text-center font-medium">Trendsetter</span>
                </div>
                {/* New Rewards */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                    <Image
                      src="/rewards/reward2.png"
                      alt="Recipe Innovator Badge"
                      width={40}
                      height={40}
                    />
                  </div>
                  <span className="text-xs text-center font-medium">Recipe Innovator</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                    <Image
                      src="/rewards/reward.png"
                      alt="Community Favorite Badge"
                      width={40}
                      height={40}
                    />
                  </div>
                  <span className="text-xs text-center font-medium">Community Favorite</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                    <Image
                      src="/rewards/reward.png"
                      alt="Top Contributor Badge"
                      width={40}
                      height={40}
                    />
                  </div>
                  <span className="text-xs text-center font-medium">Top Contributor</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="bg-white rounded-xl p-4 sm:p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <div className="flex justify-between items-center mb-4">
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
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
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