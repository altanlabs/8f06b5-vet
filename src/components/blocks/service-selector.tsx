import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ServiceSelectorProps {
  onSelect: (serviceId: string) => void;
}

const SERVICES = [
  // Equine Services
  { id: "eq-gen", name: "Medicina General Equina", price: 80 },
  { id: "eq-sport", name: "Medicina Esportiva Equina", price: 120 },
  { id: "eq-dent", name: "Odontologia Equina", price: 90 },
  { id: "eq-repro", name: "Reproducció Equina", price: 150 },
  { id: "eq-surg", name: "Cirurgia Equina", price: 500 },
  { id: "eq-rehab", name: "Rehabilitació Equina", price: 100 },
  { id: "eq-prev", name: "Medicina Preventiva Equina", price: 70 },
  
  // Small Animal Services
  { id: "sa-gen", name: "Medicina General", price: 50 },
  { id: "sa-surg", name: "Cirurgia General", price: 200 },
  { id: "sa-dent", name: "Odontologia", price: 80 },
  { id: "sa-prev", name: "Medicina Preventiva", price: 45 },
  { id: "sa-emerg", name: "Urgències", price: 120 },
];

export function ServiceSelector({ onSelect }: ServiceSelectorProps) {
  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger>
        <SelectValue placeholder="Selecciona el servei" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="header-eq" disabled className="font-semibold text-primary">
          Serveis Equins
        </SelectItem>
        {SERVICES.filter(service => service.id.startsWith('eq-')).map((service) => (
          <SelectItem key={service.id} value={service.id}>
            {service.name} ({service.price}€)
          </SelectItem>
        ))}
        
        <SelectItem value="header-sa" disabled className="font-semibold text-primary mt-2">
          Altres Animals
        </SelectItem>
        {SERVICES.filter(service => service.id.startsWith('sa-')).map((service) => (
          <SelectItem key={service.id} value={service.id}>
            {service.name} ({service.price}€)
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}