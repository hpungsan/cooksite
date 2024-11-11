import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Bookmark } from "lucide-react"

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
}

export default function FeedPage() {
  const feedPosts: FeedPost[] = [
    {
      id: 1,
      author: {
        name: "Hannah Snow",
        image: "/demprofilepic/demprof1.png"
      },
      content: {
        text: "Just made this amazing homemade ramen! The secret is in the 24-hour broth...",
        image: "/dempostpic/post1.png"
      },
      stats: {
        likes: 124,
        comments: 23
      },
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      author: {
        name: "Mark Wise",
        image: "/demprofilepic/demprof2.png"
      },
      content: {
        text: "First attempt at making ice cream from scratch. The process was long but worth it!",
        image: "/dempostpic/post2.png"
      },
      stats: {
        likes: 89,
        comments: 15
      },
      timestamp: "4 hours ago"
    },
    {
      id: 3,
      author: {
        name: "Henry Bravata",
        image: "/demprofilepic/demprof3.png"
      },
      content: {
        text: "Sunday meal prep success! Made these colorful quinoa and spiced chicken",
        image: "/dempostpic/post3.png"
      },
      stats: {
        likes: 245,
        comments: 42
      },
      timestamp: "6 hours ago"
    },
    {
      id: 4,
      author: {
        name: "Emma Snider",
        image: "/demprofilepic/demprof4.png"
      },
      content: {
        text: "After countless attempts, I finally grilled the perfect burger! Juicy, just the right amount of char, and topped with all my favorite fixings. Feels like a burger milestone!",
        image: "/dempostpic/post4.png"
      },
      stats: {
        likes: 167,
        comments: 31
      },
      timestamp: "8 hours ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="space-y-6">
          {feedPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <CardContent className="p-0">
                {/* Author Header */}
                <div className="p-4 flex items-center space-x-3 border-b">
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
                    <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                  </div>
                  <Button variant="ghost" size="icon">
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
                  />
                </div>
                
                {/* Actions */}
                <div className="p-4 border-b">
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="icon">
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MessageCircle className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm font-semibold">{post.stats.likes} likes</p>
                  </div>
                </div>

                {/* Caption */}
                <div className="p-4">
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
  );
}