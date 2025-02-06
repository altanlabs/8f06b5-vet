import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TimeSlotSelectorProps {
  onSelect: (timeSlot: string) => void;
  selectedDate: Date | undefined;
  selectedAreaId: string | undefined;
}

// Generate time slots from 9:00 to 20:00
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 9; hour < 20; hour++) {
    slots.push({
      id: `${hour}:00`,
      time: `${hour}:00`,
      available: Math.random() > 0.3 // Simulate availability
    });
    slots.push({
      id: `${hour}:30`,
      time: `${hour}:30`,
      available: Math.random() > 0.3 // Simulate availability
    });
  }
  return slots;
};

export function TimeSlotSelector({ onSelect, selectedDate, selectedAreaId }: TimeSlotSelectorProps) {
  if (!selectedDate || !selectedAreaId) return null;

  const timeSlots = generateTimeSlots();
  const availableSlots = timeSlots.filter(slot => slot.available);

  if (availableSlots.length === 0) {
    return (
      <Select disabled>
        <SelectTrigger>
          <SelectValue placeholder="No hi ha hores disponibles" />
        </SelectTrigger>
      </Select>
    );
  }

  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger>
        <SelectValue placeholder="Selecciona l'hora" />
      </SelectTrigger>
      <SelectContent>
        {availableSlots.map((slot) => (
          <SelectItem key={slot.id} value={slot.id}>
            {slot.time}h
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}