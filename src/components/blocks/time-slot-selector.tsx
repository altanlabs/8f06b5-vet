import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"

interface TimeSlotSelectorProps {
  onSelect: (timeSlot: string) => void
  selectedDate?: Date
  selectedAreaId?: string
}

// Available time slots
const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "16:00", "16:30",
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"
]

export function TimeSlotSelector({ onSelect, selectedDate }: TimeSlotSelectorProps) {
  const [date, setDate] = useState<Date | undefined>(selectedDate)
  const [selectedTime, setSelectedTime] = useState<string>()

  const handleDateSelect = (newDate: Date | undefined) => {
    setDate(newDate)
    setSelectedTime(undefined)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    if (date) {
      const dateString = date.toISOString().split('T')[0]
      onSelect(`${dateString} ${time}`)
    }
  }

  // Disable weekends and past dates
  const disabledDays = {
    before: new Date(),
    after: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
  }

  return (
    <div className="space-y-4">
      <Card className="p-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          disabled={disabledDays}
          className="rounded-md border"
        />
      </Card>

      {date && (
        <Card className="p-4">
          <ScrollArea className="h-[200px] pr-4">
            <div className="grid grid-cols-3 gap-2">
              {TIME_SLOTS.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  onClick={() => handleTimeSelect(time)}
                  className="w-full"
                >
                  {time}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </Card>
      )}
    </div>
  )
}