import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Archive } from "lucide-react"

interface ArchiveItem {
  id: number;
  image: string;
  title: string;
}

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export default function ProfilePage() {
  const archiveItems: ArchiveItem[] = [
    {
      id: 1,
      image: "/arfood/ar1.png",
      title: "Homnade Pizza"
    },
    {
      id: 2,
      image: "/arfood/ar2.png", 
      title: "Pancake"
    },
    {
      id: 3,
      image: "/arfood/ar3.png",
      title: "Kebab Platter"
    },
    {
      id: 4,
      image: "/arfood/ar4.png",
      title: "Fruit Salad"
    },
    {
      id: 5,
      image: "/arfood/ar5.png",
      title: "Pancakes"
    },
    {
      id: 6,
      image: "/arfood/ar6.png",
      title: "Steak"
    }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "My Homemade Pho Journey",
      date: "March 15, 2024",
      image: "/bpfood/bp1.png",
      excerpt: "Discovering the art of perfect Pho making..."
    },
    {
      id: 2,
      title: "Mastering Asian Stir-Fry",
      date: "March 12, 2024",
      image: "/bpfood/bp2.png",
      excerpt: "Essential techniques for the perfect wok-fired dishes..."
    },
    {
      id: 3,
      title: "Baking Sourdough Bread",
      date: "March 10, 2024",
      image: "/bpfood/bp3.png",
      excerpt: "My adventures with natural fermentation and artisan bread..."
    },
    {
      id: 4,
      title: "Classic French Pastries",
      date: "March 8, 2024",
      image: "/bpfood/bp4.png",
      excerpt: "Learning the delicate art of French patisserie..."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="w-full h-48 bg-muted relative rounded-xl border border-gray-200 shadow-md mb-8"> 
        <Image
          src="/banner.png"  
          alt="Profile banner"
          fill
          className="object-cover rounded-xl"
        />
        <div className="absolute -bottom-16 left-8">
          <div className="rounded-full border-8 border-background overflow-hidden shadow-lg"> 
            <Image
              src="/profile.png"
              alt="Profile picture"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="container mx-auto px-4 pt-20 pb-16 max-w-7xl">
        <div className="space-y-8"> 
          <div className="space-y-4 bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
              Biography
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
              Hi! I'm Hpung, a computer science student with a big love for cooking. 
              I enjoy trying out new recipes, experimenting with flavors, 
              and bringing friends together over a good meal. Excited to meet others who 
              share a passion for food and swap tips, tricks, and favorite dishes!
            </p>
          </div>

          {/* New Grid Layout */}
          <div className="grid grid-cols-12 gap-8 mt-8">
            {/* Archive Section - Smaller */}
            <div className="col-span-3 space-y-4">
              <div className="flex items-center gap-3">
                <Archive className="w-5 h-5" />
                <h2 className="text-xl font-semibold">Archive</h2>
              </div>
              <div className="grid grid-cols-2 gap-2">
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
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <p className="text-white text-sm font-medium">{item.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Blog Posts Section - Larger */}
            <div className="col-span-9">
              <h2 className="text-2xl font-semibold mb-6">Latest Posts</h2>
              <div className="grid grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
                      <div className="p-6 space-y-3">
                        <h3 className="text-xl font-semibold group-hover:text-purple-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {post.date}
                        </p>
                        <p className="text-sm line-clamp-2 text-gray-600">
                          {post.excerpt}
                        </p>
                        <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button variant="outline" className="text-sm">
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