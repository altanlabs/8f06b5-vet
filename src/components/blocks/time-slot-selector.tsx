import { useDatabase } from "@altanlabs/database";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect } from "react";

interface TimeSlotSelectorProps {
  onSelect: (timeSlot: string) => void;
  selectedDate: Date | undefined;
  selectedAreaId: string | undefined;
}

export function TimeSlotSelector({ onSelect, selectedDate, selectedAreaId }: TimeSlotSelectorProps) {
  const { records = [], isLoading, refresh } = useDatabase("veterinarian_availability", {
    filters: selectedDate ? [
      { 
        field: "available_date", 
        operator: "eq", 
        value: selectedDate.toISOString().split('T')[0] 
      }
    ] : [],
    sort: [{ field: "available_time", direction: "asc" }]
  });

  useEffect(() => {
    if (selectedDate) {
      refresh();
    }
  }, [selectedDate]);

  if (!selectedDate || !selectedAreaId) return null;

  const timeSlots = records?.map(record => {
    const time = new Date(record.fields?.available_time);
    return {
      id: record.id,
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  });

  return (
    <Select onValueChange={onSelect} disabled={isLoading}>
      <SelectTrigger>
        <SelectValue placeholder={isLoading ? "Loading time slots..." : "Select time"} />
      </SelectTrigger>
      <SelectContent>
        {timeSlots?.map((slot) => (
          <SelectItem key={slot.id} value={slot.id}>
            {slot.time}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}