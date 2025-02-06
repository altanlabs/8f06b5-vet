import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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

export function TimeSlotSelector({ onSelect }: TimeSlotSelectorProps) {
  const [date, setDate] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")

  const handleDateSelect = (newDate: string) => {
    setDate(newDate)
    setSelectedTime("")
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    if (date) {
      onSelect(`${date} ${time}`)
    }
  }

  // Get today's date in YYYY-MM-DD format for min attribute
  const today = new Date().toISOString().split('T')[0]
  // Get date 30 days from now for max attribute
  const maxDate = new Date()
  maxDate.setDate(maxDate.getDate() + 30)
  const maxDateStr = maxDate.toISOString().split('T')[0]

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="date-select">Selecciona una data</Label>
        <Input
          id="date-select"
          type="date"
          value={date}
          min={today}
          max={maxDateStr}
          onChange={(e) => handleDateSelect(e.target.value)}
          className="w-full mt-1"
        />
      </div>

      {date && (
        <Card className="p-4">
          <Label>Selecciona una hora</Label>
          <ScrollArea className="h-[200px] mt-2">
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