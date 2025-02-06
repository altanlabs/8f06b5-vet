import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { registerLocale } from "react-datepicker"
import { ca } from 'date-fns/locale/ca' // Fixed import

registerLocale('ca', ca)

interface TimeSlotSelectorProps {
  onSelect: (timeSlot: string) => void
}

const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "16:00", "16:30",
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"
]

export function TimeSlotSelector({ onSelect }: TimeSlotSelectorProps) {
  const [date, setDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>("")

  const handleDateSelect = (newDate: Date | null) => {
    setDate(newDate)
    setSelectedTime("")
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    if (date) {
      const dateStr = date.toISOString().split('T')[0]
      onSelect(`${dateStr} ${time}`)
    }
  }

  // Get min and max dates
  const minDate = new Date()
  const maxDate = new Date()
  maxDate.setDate(maxDate.getDate() + 30)

  return (
    <div className="space-y-4">
      <div>
        <Label>Selecciona una data</Label>
        <div className="mt-1.5">
          <DatePicker
            selected={date}
            onChange={handleDateSelect}
            minDate={minDate}
            maxDate={maxDate}
            locale="ca"
            dateFormat="dd/MM/yyyy"
            placeholderText="Selecciona una data"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background 
                     placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring 
                     focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            showPopperArrow={false}
            excludeDates={[]} // You can add excluded dates here
            filterDate={(date) => {
              // Disable weekends if needed
              // return date.getDay() !== 0 && date.getDay() !== 6
              return true
            }}
          />
        </div>
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