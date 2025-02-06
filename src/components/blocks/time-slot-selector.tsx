import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"
import { format } from "date-fns"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"

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

  return (
    <div className="space-y-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Selecciona una data</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <input
            type="date"
            className="w-full p-2 border rounded-md"
            min={new Date().toISOString().split('T')[0]}
            max={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
            onChange={(e) => handleDateSelect(e.target.value ? new Date(e.target.value) : undefined)}
          />
        </PopoverContent>
      </Popover>

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