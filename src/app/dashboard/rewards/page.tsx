import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, Percent, Rocket, Trophy, Users } from "lucide-react"

export default function RewardsPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">You have...</h2>
        <div className="flex items-center justify-center gap-2">
          <Trophy className="h-6 w-6 text-yellow-500" />
          <span className="text-4xl font-bold">3,142 points!</span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Possible Rewards:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Discount Reward */}
          <Card>
            <CardHeader className="space-y-1">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">Special Discount</CardTitle>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <Percent className="h-3 w-3 mr-1" />
                  54% off
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Get a discount on your next purchase
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Redeem 1,000 points</Button>
            </CardFooter>
          </Card>

          {/* Profile Boost Reward */}
          <Card>
            <CardHeader className="space-y-1">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">Profile Boost</CardTitle>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  <Rocket className="h-3 w-3 mr-1" />
                  Boost
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Increase your profile visibility for 24 hours
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Redeem 500 points</Button>
            </CardFooter>
          </Card>

          {/* Locked Premium Reward */}
          <Card className="opacity-75">
            <CardHeader className="space-y-1">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">Premium Access</CardTitle>
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  <Lock className="h-3 w-3 mr-1" />
                  Locked
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Unlock premium features and exclusive content
              </p>
            </CardContent>
            <CardFooter>
              <Button disabled className="w-full">
                Requires 5,000 points
              </Button>
            </CardFooter>
          </Card>

          {/* Locked Community Reward */}
          <Card className="opacity-75">
            <CardHeader className="space-y-1">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">Community Badge</CardTitle>
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  <Lock className="h-3 w-3 mr-1" />
                  Locked
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Special badge showing your community status
              </p>
            </CardContent>
            <CardFooter>
              <Button disabled className="w-full">
                Requires 7,500 points
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="text-center text-sm text-muted-foreground">
        <p>Locked rewards will require more points to use</p>
      </div>
    </div>
  )
}