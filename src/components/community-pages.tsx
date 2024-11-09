'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Send } from "lucide-react"
import { useState } from "react"

interface Message {
  id: number
  sender: string
  content: string
  timestamp: string
}

interface Group {
  id: number
  name: string
  lastMessage: string
  avatar: string
}

export function Pages() {
  const [groups] = useState<Group[]>([
    { id: 1, name: "Cooking Enthusiasts", lastMessage: "Great recipe!", avatar: "/placeholder.svg" },
    { id: 2, name: "Fitness Group", lastMessage: "Meeting tomorrow", avatar: "/placeholder.svg" },
    { id: 3, name: "Book Club", lastMessage: "What's next on our list?", avatar: "/placeholder.svg" },
    { id: 4, name: "Garden Society", lastMessage: "Spring planning", avatar: "/placeholder.svg" },
    { id: 5, name: "Tech Talk", lastMessage: "New features discussion", avatar: "/placeholder.svg" },
  ])

  const [messages] = useState<Message[]>([
    { id: 1, sender: "Alice", content: "Hello everyone!", timestamp: "10:00 AM" },
    { id: 2, sender: "Bob", content: "Hi Alice, how are you?", timestamp: "10:02 AM" },
    { id: 3, sender: "Charlie", content: "Looking forward to the potluck!", timestamp: "10:05 AM" },
  ])

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-80 border-r flex flex-col">
        <div className="p-4 border-b">
          <h2 className="font-semibold text-lg">Community Groups</h2>
        </div>
        <ScrollArea className="flex-1">
          {groups.map((group) => (
            <button
              key={group.id}
              className="w-full flex items-center gap-3 p-4 hover:bg-accent transition-colors"
            >
              <Avatar>
                <AvatarImage src={group.avatar} alt={group.name} />
                <AvatarFallback>{group.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-left">
                <div className="font-medium">{group.name}</div>
                <div className="text-sm text-muted-foreground truncate">{group.lastMessage}</div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
            </button>
          ))}
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b">
          <h1 className="font-semibold text-lg">Cooking Enthusiasts</h1>
          <p className="text-sm text-muted-foreground">32 members</p>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <Card key={message.id} className="p-4">
                <div className="flex items-start gap-3">
                  <Avatar>
                    <AvatarFallback>{message.sender[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{message.sender}</span>
                      <span className="text-sm text-muted-foreground">{message.timestamp}</span>
                    </div>
                    <p className="text-sm mt-1">{message.content}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input 
              placeholder="Type your message..." 
              className="flex-1"
            />
            <Button size="icon">
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}