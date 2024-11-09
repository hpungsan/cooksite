'use client'

import { useState } from 'react'
import { format, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isSameDay, addMonths, addDays, addWeeks, subDays, subWeeks } from 'date-fns'
import { DayPicker } from "react-day-picker"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Event = {
  date: Date;
  title: string;
}

export default function CookingCalendar() {
  const [isOpen, setIsOpen] = useState(false)
  const [view, setView] = useState<'daily' | 'weekly' | 'monthly'>('monthly')
  const [currentDate, setCurrentDate] = useState(new Date())
  const [events, setEvents] = useState<Event[]>([
    { date: new Date(), title: 'Test Event 1' },
    { date: addDays(new Date(), 1), title: 'Test Event 2' },
  ])
  const [newEvent, setNewEvent] = useState<Event>({ 
    date: new Date(),
    title: ''
  })

  const handleAddEvent = () => {
    if (!newEvent.title) return

    // Convert string date to Date object properly
    const eventDate = new Date(newEvent.date)
    if (isNaN(eventDate.getTime())) {
      console.error('Invalid date')
      return
    }

    // Set time to noon to avoid timezone issues
    eventDate.setHours(12, 0, 0, 0)

    setEvents(prevEvents => [...prevEvents, {
      title: newEvent.title,
      date: eventDate
    }])

    console.log('Added new event:', {
      title: newEvent.title,
      date: eventDate
    })
    
    // Reset form and close dialog
    setNewEvent({ date: new Date(), title: '' })
    setIsOpen(false)
  }

  const navigateDate = (direction: 'prev' | 'next') => {
    switch (view) {
      case 'daily':
        setCurrentDate(prev => direction === 'prev' ? subDays(prev, 1) : addDays(prev, 1))
        break
      case 'weekly':
        setCurrentDate(prev => direction === 'prev' ? subWeeks(prev, 1) : addWeeks(prev, 1))
        break
      case 'monthly':
        setCurrentDate(prev => direction === 'prev' ? addMonths(prev, -1) : addMonths(prev, 1))
        break
    }
  }

  const getNavigationLabel = () => {
    switch (view) {
      case 'daily':
        return format(currentDate, 'MMMM d, yyyy')
      case 'weekly':
        const weekStart = startOfWeek(currentDate)
        const weekEnd = endOfWeek(currentDate)
        return `${format(weekStart, 'MMM d')} - ${format(weekEnd, 'MMM d, yyyy')}`
      case 'monthly':
        return format(currentDate, 'MMMM yyyy')
    }
  }

  const renderDailyView = () => (
    <div className="border rounded-lg p-6 bg-white">
      <h2 className="text-2xl font-bold mb-4">{format(currentDate, 'MMMM d, yyyy')}</h2>
      <ul className="space-y-2">
        {events
          .filter(event => isSameDay(new Date(event.date), currentDate))
          .map((event, index) => (
            <li key={index} className="p-3 bg-secondary rounded-lg shadow">
              {event.title} - {format(event.date, 'MM/dd/yyyy')}
            </li>
          ))}
      </ul>
    </div>
  )

  const renderWeeklyView = () => {
    const start = startOfWeek(currentDate)
    const end = endOfWeek(currentDate)
    const days = eachDayOfInterval({ start, end })

    return (
      <div className="border rounded-lg p-6 bg-white">
        <div className="grid grid-cols-7 gap-4">
          {days.map((day, index) => (
            <div 
              key={index} 
              className={cn(
                "text-center p-2 border rounded-lg cursor-pointer hover:bg-secondary/50 transition-colors",
                isSameDay(day, currentDate) && "bg-secondary"
              )}
              onClick={() => {
                setCurrentDate(day);
                setView('daily');
              }}
            >
              <div className="font-bold">{format(day, 'EEE')}</div>
              <div className="text-lg">{format(day, 'd')}</div>
              <ul className="mt-2 space-y-1">
                {events
                  .filter(event => isSameDay(event.date, day))
                  .map((event, eventIndex) => (
                    <li key={eventIndex} className="text-xs p-2 bg-secondary rounded-lg">
                      {event.title}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderMonthlyView = () => (
    <div className="border rounded-lg p-6 bg-white">
      <DayPicker
        mode="single"
        selected={currentDate}
        onSelect={(date) => {
          if (date) {
            setCurrentDate(date);
            setView('weekly');
          }
        }}
        className={cn("p-6 flex justify-center", "rounded-md border")}
        showOutsideDays={true}
        classNames={{
          months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
          month: "space-y-8",
          caption: "hidden",
          caption_label: "text-xl font-medium",
          nav: "hidden",
          nav_button: cn(
            buttonVariants({ variant: "outline" }),
            "h-10 w-10 bg-transparent p-0 opacity-50 hover:opacity-100"
          ),
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1",
          table: "w-full border-collapse space-y-3",
          head_row: "flex w-full",
          head_cell: "text-muted-foreground rounded-md w-14 font-normal text-[1.1rem] flex-1",
          row: "flex w-full mt-3",
          cell: cn(
            "relative p-0 text-center text-lg focus-within:relative focus-within:z-20 flex-1",
            "[&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
            "[&:has([aria-selected])]:rounded-md"
          ),
          day: cn(
            buttonVariants({ variant: "ghost" }),
            "h-14 w-14 p-0 font-normal aria-selected:opacity-100 text-lg mx-auto"
          ),
          day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
          day_today: "bg-accent text-accent-foreground",
          day_outside: "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
          day_disabled: "text-muted-foreground opacity-50",
        }}
        components={{
          IconLeft: ({ ...props }) => <ChevronLeft className="h-6 w-6" />,
          IconRight: ({ ...props }) => <ChevronRight className="h-6 w-6" />,
        }}
        modifiers={{
          event: (date) => events.some(event => 
            isSameDay(new Date(event.date), date)
          )
        }}
        modifiersStyles={{
          event: { 
            backgroundColor: 'var(--secondary)',
            color: 'var(--secondary-foreground)'
          }
        }}
        month={currentDate}
      />
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 bg-gray-50">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Cooking Calendar</h1>
        <Select value={view} onValueChange={(value: 'daily' | 'weekly' | 'monthly') => setView(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select view" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-between items-center">
        <Button variant="outline" onClick={() => navigateDate('prev')}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-lg font-semibold">{getNavigationLabel()}</span>
        <Button variant="outline" onClick={() => navigateDate('next')}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="min-h-[400px]">
        {view === 'daily' && renderDailyView()}
        {view === 'weekly' && renderWeeklyView()}
        {view === 'monthly' && renderMonthlyView()}
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="w-full">Add Cooking Event</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Event for {format(currentDate, 'MMMM d, yyyy')}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="event-title">Title</Label>
              <Input
                id="event-title"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ 
                  date: currentDate, // Use currently selected date
                  title: e.target.value 
                })}
                className="col-span-3"
              />
            </div>
          </div>
          <Button onClick={handleAddEvent} className="w-full">Add Event</Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}