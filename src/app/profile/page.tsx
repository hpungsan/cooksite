import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Archive } from "lucide-react"

// First, add this interface above the component
interface ArchiveItem {
  id: number;
  image: string;
  title: string;
}

export default function ProfilePage() {
  // Add this const inside the component
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

  return (
    <div className="min-h-screen bg-background">
      {/* Banner Section */}
      <div className="w-full h-48 bg-muted relative rounded-xl border border-gray-200 shadow-md mb-8"> {/* Added styling */}
        <Image
          src="/banner.png"  
          alt="Profile banner"
          fill
          className="object-cover rounded-xl" /* Added rounded corners to image */
        />
        <div className="absolute -bottom-16 left-8">
          <div className="rounded-full border-8 border-background overflow-hidden shadow-lg"> {/* Added shadow */}
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
      <div className="container mx-auto px-4 pt-20 pb-16 max-w-7xl"> {/* Added pb-16 and max-w-7xl */}
        <div className="space-y-8"> {/* Increased space-y-6 to space-y-8 */}
          {/* Biography Section */}
          <div className="space-y-4 bg-white/50 p-6 rounded-lg"> {/* Added background and padding */}
            <h1 className="text-3xl font-bold tracking-tight"> {/* Improved typography */}
              Biography
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl"> {/* Improved readability */}
              Hi! I'm Hpung, a computer science student with a big love for cooking. 
              I enjoy trying out new recipes, experimenting with flavors, 
              and bringing friends together over a good meal. Excited to meet others who 
              share a passion for food and swap tips, tricks, and favorite dishes!
            </p>
          </div>

          {/* Archive Section */}
          <div className="space-y-6"> {/* Increased spacing */}
            <div className="flex items-center gap-3 pb-2"> {/* Added pb-2 */}
              <Archive className="w-6 h-6" /> {/* Increased icon size */}
              <h2 className="text-2xl font-semibold tracking-tight">Archive</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Increased gap and adjusted breakpoints */}
              {archiveItems.map((item) => (
                <Card key={item.id} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-0 relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full aspect-[4/3] object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <p className="text-white font-medium text-lg">{item.title}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}