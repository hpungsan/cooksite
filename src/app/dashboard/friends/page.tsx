'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ArrowRight, Send, ChevronLeft, ChevronRight, Search } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface Message {
  id: number
  sender: string
  content: string
  timestamp: string
  friendId: number
}

interface Friend {
  id: number
  name: string
  lastMessage: string
  avatar: string
  isOnline: boolean
  lastSeen?: string
}

export default function FriendChat() {
  const [activeFriendId, setActiveFriendId] = useState(1)
  const [newMessage, setNewMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, friendId: 1, sender: "Alice", content: "Hey! How's your day going?", timestamp: "10:00 AM" },
    { id: 2, friendId: 1, sender: "You", content: "Pretty good! Just working on some code", timestamp: "10:02 AM" },
    { id: 3, friendId: 2, sender: "Bob", content: "Are we still on for coffee?", timestamp: "11:30 AM" },
    { id: 4, friendId: 3, sender: "Charlie", content: "Check out this new tech stack!", timestamp: "Yesterday" },
    { id: 5, friendId: 4, sender: "David", content: "Thanks for the help earlier", timestamp: "Yesterday" },
  ])

  const [friends] = useState<Friend[]>([
    { id: 1, name: "Alice Johnson", lastMessage: "Pretty good! Just working on some code", avatar: "/alice.jpg", isOnline: true },
    { id: 2, name: "Bob Smith", lastMessage: "Are we still on for coffee?", avatar: "/bob.jpg", isOnline: true },
    { id: 3, name: "Charlie Brown", lastMessage: "Check out this new tech stack!", avatar: "/charlie.jpg", isOnline: false, lastSeen: "2h ago" },
    { id: 4, name: "David Wilson", lastMessage: "Thanks for the help earlier", avatar: "/david.jpg", isOnline: false, lastSeen: "1d ago" },
  ])

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, activeFriendId])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarCollapsed(true)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const newMsg: Message = {
      id: messages.length + 1,
      friendId: activeFriendId,
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

  const activeFriend = friends.find(f => f.id === activeFriendId)
  const activeMessages = messages.filter(m => m.friendId === activeFriendId)
  const filteredFriends = friends.filter(f => 
    f.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex h-screen bg-background">
      {/* Friends Sidebar */}
      <div className={`transition-all duration-300 ease-in-out border-r flex flex-col ${
        isSidebarCollapsed ? 'w-20' : 'w-80'
      } md:w-64`}>
        <div className="p-4 border-b flex justify-between items-center">
          {!isSidebarCollapsed && (
            <div className="flex-1">
              <h2 className="font-semibold text-lg mb-2">Friends</h2>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search friends..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          )}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          >
            {isSidebarCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
        <ScrollArea className="flex-1">
          {filteredFriends.map((friend) => (
            <button
              key={friend.id}
              className={`w-full flex items-center gap-3 p-4 hover:bg-accent transition-colors ${
                activeFriendId === friend.id ? 'bg-accent' : ''
              }`}
              onClick={() => setActiveFriendId(friend.id)}
            >
              <div className="relative">
                <Avatar>
                  <AvatarImage src={friend.avatar} alt={friend.name} />
                  <AvatarFallback>{friend.name[0]}</AvatarFallback>
                </Avatar>
                <div className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-background rounded-full ${
                  friend.isOnline ? 'bg-green-500' : 'bg-gray-400'
                }`} />
              </div>
              {!isSidebarCollapsed && (
                <div className="flex-1 text-left">
                  <div className="font-medium">{friend.name}</div>
                  <div className="text-sm text-muted-foreground truncate">
                    {friend.isOnline ? 'Online' : `Last seen ${friend.lastSeen}`}
                  </div>
                </div>
              )}
            </button>
          ))}
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b flex items-center gap-3">
          {activeFriend && (
            <>
              <Avatar>
                <AvatarImage src={activeFriend.avatar} alt={activeFriend.name} />
                <AvatarFallback>{activeFriend.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="font-semibold text-lg">{activeFriend.name}</h1>
                <p className="text-sm text-muted-foreground">
                  {activeFriend.isOnline ? 'Online' : `Last seen ${activeFriend.lastSeen}`}
                </p>
              </div>
            </>
          )}
        </div>

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
                <div className="flex items-center gap-2">
                  <span className="text-xs opacity-70">{message.timestamp}</span>
                </div>
                <p className="mt-1">{message.content}</p>
              </Card>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

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