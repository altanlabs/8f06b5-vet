import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./button"
import { cn } from "@/lib/utils"

interface SimpleCalendarProps {
  value?: Date
  onChange?: (date: Date) => void
  className?: string
  disablePastDates?: boolean
}

export function SimpleCalendar({
  value,
  onChange,
  className,
  disablePastDates = true,
}: SimpleCalendarProps) {
  const [currentDate, setCurrentDate] = React.useState(value || new Date())
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(value)

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
  const startingDayOfWeek = firstDayOfMonth.getDay()
  const daysInMonth = lastDayOfMonth.getDate()

  const months = [
    "Gener", "Febrer", "Març", "Abril", "Maig", "Juny",
    "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"
  ]

  const weekDays = ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"]

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    setSelectedDate(newDate)
    onChange?.(newDate)
  }

  const isDateDisabled = (day: number) => {
    if (!disablePastDates) return false
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    return date < new Date(new Date().setHours(0, 0, 0, 0))
  }

  const isToday = (day: number) => {
    const today = new Date()
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    )
  }

  const isSelected = (day: number) => {
    return selectedDate?.getDate() === day &&
      selectedDate?.getMonth() === currentDate.getMonth() &&
      selectedDate?.getFullYear() === currentDate.getFullYear()
  }

  return (
    <div className={cn("p-4 space-y-4 bg-background rounded-lg border", className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrevMonth}
          disabled={disablePastDates && currentDate.getMonth() === new Date().getMonth()}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="font-semibold">
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </div>
        <Button variant="ghost" size="icon" onClick={handleNextMonth}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Week days */}
      <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium text-muted-foreground">
        {weekDays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: startingDayOfWeek }).map((_, index) => (
          <div key={`empty-${index}`} className="h-9" />
        ))}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const day = index + 1
          const disabled = isDateDisabled(day)
          return (
            <Button
              key={day}
              variant="ghost"
              className={cn(
                "h-9 w-full p-0 font-normal",
                isSelected(day) && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
                isToday(day) && !isSelected(day) && "border border-primary",
                disabled && "text-muted-foreground opacity-50 cursor-not-allowed"
              )}
              disabled={disabled}
              onClick={() => !disabled && handleDateClick(day)}
            >
              {day}
            </Button>
          )
        })}
      </div>
    </div>
  )
}