'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ArrowRight, Send, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface Message {
  id: number
  sender: string
  content: string
  timestamp: string
  groupId: number
}

interface Group {
  id: number
  name: string
  lastMessage: string
  avatar: string
  memberCount: number
}

export default function CommunityChat() {
  const [activeGroupId, setActiveGroupId] = useState(1)
  const [newMessage, setNewMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    // Cooking Enthusiasts messages
    { id: 1, groupId: 1, sender: "Alice", content: "Just made an amazing pasta carbonara!", timestamp: "10:00 AM" },
    { id: 2, groupId: 1, sender: "Bob", content: "What's your secret for the sauce?", timestamp: "10:02 AM" },
    { id: 3, groupId: 1, sender: "Charlie", content: "Make sure to use fresh eggs and real pecorino!", timestamp: "10:05 AM" },
    { id: 4, groupId: 1, sender: "Alice", content: "Yes, and never skip the black pepper!", timestamp: "10:06 AM" },
    
    // Baking Club messages
    { id: 5, groupId: 2, sender: "Emma", content: "My sourdough starter is finally ready!", timestamp: "2:30 PM" },
    { id: 6, groupId: 2, sender: "David", content: "How long did you ferment it?", timestamp: "2:35 PM" },
    { id: 7, groupId: 2, sender: "Emma", content: "About 5 days, it smells perfect", timestamp: "2:36 PM" },
    { id: 8, groupId: 2, sender: "You", content: "Don't forget to save some for next time!", timestamp: "2:40 PM" },
    
    // Vegan Recipes messages
    { id: 9, groupId: 3, sender: "Sarah", content: "Made the mushroom risotto - amazing!", timestamp: "3:20 PM" },
    { id: 10, groupId: 3, sender: "Mike", content: "Did you use nutritional yeast?", timestamp: "3:22 PM" },
    { id: 11, groupId: 3, sender: "You", content: "Try adding some truffle oil next time", timestamp: "3:25 PM" },
    { id: 12, groupId: 3, sender: "Sarah", content: "Great idea! Will do", timestamp: "3:30 PM" },
    
    // International Cuisine messages
    { id: 13, groupId: 4, sender: "Lisa", content: "Anyone know where to find kaffir lime leaves?", timestamp: "4:15 PM" },
    { id: 14, groupId: 4, sender: "Tom", content: "Asian market on 5th has them fresh", timestamp: "4:20 PM" },
    { id: 15, groupId: 4, sender: "You", content: "They freeze well too if you want to stock up", timestamp: "4:22 PM" },
    { id: 16, groupId: 4, sender: "Rachel", content: "Making green curry tonight!", timestamp: "4:30 PM" },
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  const [groups] = useState<Group[]>([
    { id: 1, name: "Cooking Enthusiasts", lastMessage: "Great recipe!", avatar: "/placeholder.svg", memberCount: 32 },
    { id: 2, name: "Baking Club", lastMessage: "Perfect crust tips", avatar: "/placeholder.svg", memberCount: 28 },
    { id: 3, name: "Vegan Recipes", lastMessage: "Try this mushroom risotto!", avatar: "/placeholder.svg", memberCount: 45 },
    { id: 4, name: "International Cuisine", lastMessage: "Thai curry discussion", avatar: "/placeholder.svg", memberCount: 38 },
  ])

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, activeGroupId])

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const newMsg: Message = {
      id: messages.length + 1,
      groupId: activeGroupId,
      sender: "You",
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages([...messages, newMsg])
    setNewMessage("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const activeGroup = groups.find(g => g.id === activeGroupId)
  const activeMessages = messages.filter(m => m.groupId === activeGroupId)

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className={`transition-all duration-300 ease-in-out border-r flex flex-col ${
        isSidebarCollapsed ? 'w-20' : 'w-80'
      }`}>
        <div className="p-4 border-b flex justify-between items-center">
          {!isSidebarCollapsed && <h2 className="font-semibold text-lg">Community Groups</h2>}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          >
            {isSidebarCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
        <ScrollArea className="flex-1">
          {groups.map((group) => (
            <button
              key={group.id}
              className={`w-full flex items-center gap-3 p-4 hover:bg-accent transition-colors ${
                activeGroupId === group.id ? 'bg-accent' : ''
              }`}
              onClick={() => setActiveGroupId(group.id)}
            >
              <Avatar>
                <AvatarImage src={group.avatar} alt={group.name} />
                <AvatarFallback>{group.name[0]}</AvatarFallback>
              </Avatar>
              {!isSidebarCollapsed && (
                <>
                  <div className="flex-1 text-left">
                    <div className="font-medium">{group.name}</div>
                    <div className="text-sm text-muted-foreground truncate">{group.lastMessage}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </>
              )}
            </button>
          ))}
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b">
          <h1 className="font-semibold text-lg">{activeGroup?.name}</h1>
          <p className="text-sm text-muted-foreground">{activeGroup?.memberCount} members</p>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {activeMessages.map((message) => (
              <Card 
                key={message.id} 
                className={`p-4 ${
                  message.sender === "You" 
                    ? "ml-auto bg-primary text-primary-foreground max-w-[80%]" 
                    : "mr-auto bg-muted max-w-[80%]"
                }`}
              >
                <div className="flex items-start gap-3">
                  {message.sender !== "You" && (
                    <Avatar>
                      <AvatarFallback>{message.sender[0]}</AvatarFallback>
                    </Avatar>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{message.sender}</span>
                      <span className="text-xs opacity-70">{message.timestamp}</span>
                    </div>
                    <p className="mt-1">{message.content}</p>
                  </div>
                </div>
              </Card>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input 
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..." 
              className="flex-1"
            />
            <Button size="icon" onClick={handleSendMessage}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}