'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ArrowRight, Send } from "lucide-react"
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
    // Group 1 messages
    { id: 1, groupId: 1, sender: "Alice", content: "Hello everyone!", timestamp: "10:00 AM" },
    { id: 2, groupId: 1, sender: "Bob", content: "Hi Alice, how are you?", timestamp: "10:02 AM" },
    { id: 3, groupId: 1, sender: "Charlie", content: "Looking forward to the potluck!", timestamp: "10:05 AM" },
    { id: 4, groupId: 1, sender: "Alice", content: "Me too! I'm bringing lasagna", timestamp: "10:06 AM" },
    
    // Group 2 messages
    { id: 5, groupId: 2, sender: "Emma", content: "Don't forget about tomorrow's meeting!", timestamp: "2:30 PM" },
    { id: 6, groupId: 2, sender: "David", content: "What time was it again?", timestamp: "2:35 PM" },
    { id: 7, groupId: 2, sender: "Emma", content: "3 PM at the usual spot", timestamp: "2:36 PM" },
    
    // Group 3 messages
    { id: 8, groupId: 3, sender: "John", content: "Hey, shall we try that new recipe?", timestamp: "11:20 AM" },
    { id: 9, groupId: 3, sender: "You", content: "Sure! Which one?", timestamp: "11:25 AM" },
    
    // Group 4 messages
    { id: 10, groupId: 4, sender: "Mr. Bean", content: "About tomorrow's planning...", timestamp: "9:15 AM" },
    { id: 11, groupId: 4, sender: "You", content: "Yes, I'll be there!", timestamp: "9:20 AM" },
    
    // Group 5 messages
    { id: 12, groupId: 5, sender: "Jeff", content: "Thanks for the help!", timestamp: "Yesterday" },
    { id: 13, groupId: 5, sender: "You", content: "Anytime!", timestamp: "Yesterday" },
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  const [groups] = useState<Group[]>([
    { id: 1, name: "Cooking Enthusiasts", lastMessage: "Great recipe!", avatar: "/placeholder.svg", memberCount: 32 },
    { id: 2, name: "Anth Class Cook Buddies", lastMessage: "Meeting tomorrow", avatar: "/placeholder.svg", memberCount: 15 },
    { id: 3, name: "John Brown", lastMessage: "What's next on our list?", avatar: "/placeholder.svg", memberCount: 2 },
    { id: 4, name: "Mr. Bean", lastMessage: "Spring planning tmrw?", avatar: "/placeholder.svg", memberCount: 2 },
    { id: 5, name: "Jeff Henn", lastMessage: "Great!", avatar: "/placeholder.svg", memberCount: 2 },
  ])

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
      <div className="w-80 border-r flex flex-col">
        <div className="p-4 border-b">
          <h2 className="font-semibold text-lg">Community Groups</h2>
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