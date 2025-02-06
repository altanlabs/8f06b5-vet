import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ServiceSelectorProps {
  onSelect: (serviceId: string) => void
}

const SERVICES = [
  {
    id: "medicina-general-equina",
    name: "Medicina General Equina",
    description: "Examen complet i diagnòstic general",
    price: "80€"
  },
  {
    id: "medicina-esportiva-equina",
    name: "Medicina Esportiva Equina",
    description: "Avaluació i tractament per a cavalls esportius",
    price: "120€"
  },
  {
    id: "odontologia-equina",
    name: "Odontologia Equina",
    description: "Cura dental completa i manteniment",
    price: "90€"
  },
  {
    id: "medicina-general",
    name: "Medicina General",
    description: "Consulta i examen general per a altres animals",
    price: "50€"
  },
  {
    id: "urgencies",
    name: "Urgències",
    description: "Atenció immediata per a casos urgents",
    price: "120€"
  }
]

export function ServiceSelector({ onSelect }: ServiceSelectorProps) {
  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger>
        <SelectValue placeholder="Selecciona un servei" />
      </SelectTrigger>
      <SelectContent>
        {SERVICES.map((service) => (
          <SelectItem key={service.id} value={service.id}>
            <div className="flex flex-col">
              <span className="font-medium">{service.name}</span>
              <span className="text-sm text-muted-foreground">{service.description}</span>
              <span className="text-sm font-medium">{service.price}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}