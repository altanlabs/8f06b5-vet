import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ServiceAreaSelectorProps {
  onSelect: (areaId: string) => void;
  bookingType: "scheduled" | "urgent";
}

const AREAS = [
  { id: "bcn", name: "Barcelona", travelFee: 0 },
  { id: "gir", name: "Girona", travelFee: 0 },
  { id: "tar", name: "Tarragona", travelFee: 0 },
  { id: "lle", name: "Lleida", travelFee: 0 },
  { id: "and", name: "Andorra", travelFee: 50 },
  { id: "ara", name: "Aragó", travelFee: 50 },
];

export function ServiceAreaSelector({ onSelect, bookingType }: ServiceAreaSelectorProps) {
  const filteredAreas = bookingType === "scheduled" 
    ? AREAS.filter(area => area.travelFee === 0)
    : AREAS;

  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger>
        <SelectValue placeholder="Selecciona la zona" />
      </SelectTrigger>
      <SelectContent>
        {filteredAreas.map((area) => (
          <SelectItem key={area.id} value={area.id}>
            {area.name}
            {bookingType === "urgent" && area.travelFee > 0 && 
              ` (+${area.travelFee}€ desplaçament)`}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}