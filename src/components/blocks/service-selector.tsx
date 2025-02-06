import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

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
    <RadioGroup onValueChange={onSelect} className="space-y-4">
      {SERVICES.map((service) => (
        <div key={service.id} className="flex items-start space-x-3">
          <RadioGroupItem value={service.id} id={service.id} className="mt-1" />
          <div className="grid gap-1.5">
            <Label htmlFor={service.id} className="font-medium">
              {service.name}
            </Label>
            <p className="text-sm text-muted-foreground">
              {service.description}
            </p>
            <p className="text-sm font-medium">
              {service.price}
            </p>
          </div>
        </div>
      ))}
    </RadioGroup>
  )
}