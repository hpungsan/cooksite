"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Bookmark, ImagePlus, Trophy, Percent, X } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface FeedPost {
  id: number;
  author: {
    name: string;
    image: string;
  };
  content: {
    text: string;
    image: string;
  };
  stats: {
    likes: number;
    comments: number;
  };
  timestamp: string;
  isLiked: boolean; 
}

interface DemoPostModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  postText: string;
  setPostText: (text: string) => void;
  imagePreview: string | null;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onImageRemove: () => void;
  onSubmit: () => void;
}

const DemoPostModal = ({
  isOpen,
  onOpenChange,
  postText,
  setPostText,
  imagePreview,
  onImageUpload,
  onImageRemove,
  onSubmit
}: DemoPostModalProps) => (
  <Dialog open={isOpen} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Create New Post</DialogTitle>
      </DialogHeader>
      <div className="space-y-4">
        <Textarea
          placeholder="What's cooking?"
          value={postText}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPostText(e.target.value)}
          className="min-h-[100px] resize-none"
        />
        
        {imagePreview && (
          <div className="relative w-full aspect-video">
            <Image
              src={imagePreview}
              alt="Preview"
              fill
              className="object-cover rounded-md"
            />
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2"
              onClick={onImageRemove}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              className="hidden"
              onChange={onImageUpload}
            />
            <label htmlFor="image-upload">
              <Button variant="ghost" size="icon" type="button" asChild>
                <span>
                  <ImagePlus className="h-5 w-5" />
                </span>
              </Button>
            </label>
          </div>
          <Button onClick={onSubmit}>Share Post</Button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

export default function FeedPage() {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [demoPostText, setDemoPostText] = useState<string>("");
  const [demoImagePreview, setDemoImagePreview] = useState<string | null>(null);
  const [posts, setPosts] = useState<FeedPost[]>([
    {
      id: 1,
      author: {
        name: "Hannah Snow",
        image: "/demprofilepic/demprof1.png",
      },
      content: {
        text: "Just made this amazing homemade ramen! The secret is in the 24-hour broth...",
        image: "/dempostpic/post1.png",
      },
      stats: {
        likes: 124,
        comments: 23,
      },
      timestamp: "2 hours ago",
      isLiked: false,
    },
    {
      id: 2,
      author: {
        name: "Mark Wise",
        image: "/demprofilepic/demprof2.png",
      },
      content: {
        text: "First attempt at making ice cream from scratch. The process was long but worth it!",
        image: "/dempostpic/post2.png",
      },
      stats: {
        likes: 89,
        comments: 15,
      },
      timestamp: "4 hours ago",
      isLiked: false,
    },
    {
      id: 3,
      author: {
        name: "Henry Bravata",
        image: "/demprofilepic/demprof3.png",
      },
      content: {
        text: "Sunday meal prep success! Made these colorful quinoa and spiced chicken",
        image: "/dempostpic/post3.png",
      },
      stats: {
        likes: 245,
        comments: 42,
      },
      timestamp: "6 hours ago",
      isLiked: false,
    },
    {
      id: 4,
      author: {
        name: "Emma Snider",
        image: "/demprofilepic/demprof4.png",
      },
      content: {
        text: "After countless attempts, I finally grilled the perfect burger! Juicy, just the right amount of char, and topped with all my favorite fixings. Feels like a burger milestone!",
        image: "/dempostpic/post4.png",
      },
      stats: {
        likes: 167,
        comments: 31,
      },
      timestamp: "8 hours ago",
      isLiked: false,
    },
  ]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDemoImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreatePost = () => {
    if (!demoPostText) return;

    const newPost: FeedPost = {
      id: posts.length + 1,
      author: {
        name: "You",
        image: "/profile.png",
      },
      content: {
        text: demoPostText,
        image: demoImagePreview || "/placeholder.png",
      },
      stats: {
        likes: 0,
        comments: 0,
      },
      timestamp: "Just now",
      isLiked: false,
    };

    setPosts([newPost, ...posts]); // Add new post at the beginning
    setDemoPostText(""); // Reset form
    setDemoImagePreview(null);
    setIsPostModalOpen(false);
  };

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        const newLiked = !post.isLiked;
        return {
          ...post,
          isLiked: newLiked,
          stats: {
            ...post.stats,
            likes: post.stats.likes + (newLiked ? 1 : -1)
          }
        };
      }
      return post;
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <DemoPostModal 
        isOpen={isPostModalOpen}
        onOpenChange={setIsPostModalOpen}
        postText={demoPostText}
        setPostText={setDemoPostText}
        imagePreview={demoImagePreview}
        onImageUpload={handleImageUpload}
        onImageRemove={() => setDemoImagePreview(null)}
        onSubmit={handleCreatePost}
      />
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-4 sm:gap-6 max-w-6xl mx-auto">
          {/* Left Sidebar - Stack on mobile */}
          <aside className="lg:sticky lg:top-4 h-fit space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="h-10 w-10 rounded-full overflow-hidden">
                      <Image
                        src="/profile.png"
                        alt="Your profile"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Create Post</h3>
                    </div>
                  </div>
                  <Button 
                    className="w-full text-left justify-start text-muted-foreground bg-muted/50 hover:bg-muted h-12 sm:h-10"
                    variant="ghost"
                    onClick={() => setIsPostModalOpen(true)}
                    aria-haspopup="dialog"
                  >
                    What&apos;s cooking?
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <h3 className="font-semibold">Your Rewards</h3>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    <span className="font-bold">3,142 points</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Next available reward:</p>
                    <div className="flex items-center justify-between bg-muted/50 p-2 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Percent className="h-4 w-4" />
                        <span className="text-sm font-medium">Special Discount</span>
                      </div>
                      <span className="text-xs text-muted-foreground">1,000 points</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href="/dashboard/rewards">
                      <Button variant="outline" className="w-full h-12 sm:h-10">
                        View All Rewards
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="relative w-full aspect-square mt-4 hidden ml-[-20px] lg:block">
              <Image
                src="/mascotv2.png"
                alt="Garnish Mascot"
                fill
                className="object-contain"
              />
            </div>
          </aside>

          {/* Main Feed Content */}
          <div className="flex justify-center">
            <div className="w-full max-w-[720px] space-y-4 sm:space-y-6">
              {posts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    {/* Author Header */}
                    <div className="p-3 sm:p-4 flex items-center space-x-3 border-b">
                      <div className="h-10 w-10 rounded-full overflow-hidden">
                        <Image
                          src={post.author.image}
                          alt={post.author.name}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{post.author.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {post.timestamp}
                        </p>
                      </div>
                      <Button variant="ghost" size="icon" className="h-12 w-12 sm:h-10 sm:w-10">
                        <Bookmark className="h-5 w-5" />
                      </Button>
                    </div>

                    {/* Post Content */}
                    <div className="relative aspect-video">
                      <Image
                        src={post.content.image}
                        alt="Post image"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>

                    {/* Actions */}
                    <div className="p-3 sm:p-4 border-b">
                      <div className="flex items-center space-x-4">
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="h-12 w-12 sm:h-10 sm:w-10"
                          onClick={() => handleLike(post.id)}
                        >
                          <Heart 
                            className={`h-5 w-5 ${post.isLiked ? "fill-current text-red-500" : ""}`} 
                          />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-12 w-12 sm:h-10 sm:w-10">
                          <MessageCircle className="h-5 w-5" />
                        </Button>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm font-semibold">
                          {post.stats.likes} likes
                        </p>
                      </div>
                    </div>

                    {/* Caption */}
                    <div className="p-3 sm:p-4">
                      <p className="text-sm">
                        <span className="font-semibold">{post.author.name}</span>{" "}
                        {post.content.text}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        View all {post.stats.comments} comments
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
