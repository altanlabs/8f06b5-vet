import { useDatabase } from "@altanlabs/database";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect } from "react";

interface ServiceAreaSelectorProps {
  onSelect: (areaId: string) => void;
  bookingType: "scheduled" | "urgent";
}

export function ServiceAreaSelector({ onSelect, bookingType }: ServiceAreaSelectorProps) {
  const { records, isLoading, refresh } = useDatabase("service_areas", {
    sort: [{ field: "name", direction: "asc" }]
  });

  useEffect(() => {
    refresh();
  }, []);

  const filteredAreas = bookingType === "scheduled" 
    ? records.filter(area => area.fields.travel_fee === 0)
    : records;

  if (isLoading) return <SelectTrigger>Loading areas...</SelectTrigger>;

  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger>
        <SelectValue placeholder="Select your area" />
      </SelectTrigger>
      <SelectContent>
        {filteredAreas.map((area) => (
          <SelectItem key={area.id} value={area.id}>
            {area.fields.name}
            {bookingType === "urgent" && area.fields.travel_fee > 0 && 
              ` (+$${area.fields.travel_fee} travel fee)`}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}