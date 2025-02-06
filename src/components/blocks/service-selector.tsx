import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface ServiceSelectorProps {
  onSelect: (serviceId: string) => void
}

const SERVICES = [
  {
    id: "equine-general",
    name: "Medicina General Equina",
    description: "Examen complet i diagnòstic general",
    price: "80€"
  },
  {
    id: "equine-sports",
    name: "Medicina Esportiva Equina",
    description: "Avaluació i tractament per a cavalls esportius",
    price: "120€"
  },
  {
    id: "equine-dental",
    name: "Odontologia Equina",
    description: "Cura dental completa i manteniment",
    price: "90€"
  },
  {
    id: "general-medicine",
    name: "Medicina General",
    description: "Consulta i examen general per a altres animals",
    price: "50€"
  },
  {
    id: "emergency",
    name: "Urgències",
    description: "Atenció immediata per a casos urgents",
    price: "120€"
  }
]

export function ServiceSelector({ onSelect }: ServiceSelectorProps) {
  return (
    <Card className="p-4">
      <RadioGroup onValueChange={onSelect} className="space-y-3">
        {SERVICES.map((service) => (
          <div key={service.id} className="flex items-start space-x-3 space-y-0">
            <RadioGroupItem value={service.id} id={service.id} />
            <Label
              htmlFor={service.id}
              className="grid gap-1 font-normal cursor-pointer"
            >
              <div className="font-medium">{service.name}</div>
              <div className="text-sm text-muted-foreground">
                {service.description}
              </div>
              <div className="text-sm font-medium text-primary">
                {service.price}
              </div>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </Card>
  )
}