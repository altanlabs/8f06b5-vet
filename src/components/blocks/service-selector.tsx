import { useDatabase } from "@altanlabs/database";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect } from "react";

interface ServiceSelectorProps {
  onSelect: (serviceId: string) => void;
}

export function ServiceSelector({ onSelect }: ServiceSelectorProps) {
  const { records = [], isLoading, refresh } = useDatabase("veterinary_services", {
    sort: [{ field: "service_name", direction: "asc" }]
  });

  useEffect(() => {
    refresh();
  }, []);

  return (
    <Select onValueChange={onSelect} disabled={isLoading}>
      <SelectTrigger>
        <SelectValue placeholder={isLoading ? "Loading services..." : "Select service"} />
      </SelectTrigger>
      <SelectContent>
        {records?.map((service) => (
          <SelectItem key={service.id} value={service.id}>
            {service.fields?.service_name} (${service.fields?.price || 0})
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}