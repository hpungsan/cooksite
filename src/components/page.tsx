'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MessageCircle, Users } from "lucide-react"

export function BlockPage() {
  return (
    <main className="container mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Welcome back Emma!</h1>
        <Button variant="outline" className="gap-2">
          <MessageCircle className="w-4 h-4" />
          Chat
        </Button>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">This week...</h2>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Upcoming Group Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Calendar className="w-5 h-5 mt-1" />
                <div>
                  <h3 className="font-medium">Better Cooking Potluck</h3>
                  <p className="text-muted-foreground">Join us on the 27th for a community potluck dinner!</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Theme</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">This week we're focusing on healthy meal preparation and sharing our favorite recipes!</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Community Blog</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Share your cooking journey and inspire others with your culinary adventures.</p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}