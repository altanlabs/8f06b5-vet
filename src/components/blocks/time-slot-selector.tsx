import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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

// Generate next 30 days for the dropdown
const getDates = () => {
  const dates = [];
  const today = new Date();
  
  for (let i = 0; i < 30; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);
    dates.push({
      value: date.toISOString().split('T')[0],
      label: date.toLocaleDateString('ca-ES', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    });
  }
  return dates;
};

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

  return (
    <div className="space-y-4">
      <Select onValueChange={handleDateSelect}>
        <SelectTrigger>
          <SelectValue placeholder="Selecciona una data" />
        </SelectTrigger>
        <SelectContent>
          {getDates().map((date) => (
            <SelectItem key={date.value} value={date.value}>
              {date.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {date && (
        <Card className="p-4">
          <ScrollArea className="h-[200px]">
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