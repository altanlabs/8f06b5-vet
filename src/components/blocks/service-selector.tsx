import { useDatabase } from "@altanlabs/database";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect } from "react";

interface ServiceSelectorProps {
  onSelect: (serviceId: string) => void;
}

export function ServiceSelector({ onSelect }: ServiceSelectorProps) {
  const { records, isLoading, refresh } = useDatabase("veterinary_services", {
    sort: [{ field: "service_name", direction: "asc" }]
  });

  useEffect(() => {
    refresh();
  }, []);

  if (isLoading) {
    return (
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Loading services..." />
        </SelectTrigger>
      </Select>
    );
  }

  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger>
        <SelectValue placeholder="Select service" />
      </SelectTrigger>
      <SelectContent>
        {records.map((service) => (
          <SelectItem key={service.id} value={service.id}>
            {service.fields.service_name} (${service.fields.price})
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}