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
  { id: "equine-general", name: "Medicina General Equina", price: 80 },
  { id: "equine-sports", name: "Medicina Esportiva Equina", price: 120 },
  { id: "equine-dental", name: "Odontologia Equina", price: 90 },
  { id: "equine-repro", name: "Reproducció Equina", price: 150 },
  { id: "equine-surgery", name: "Cirurgia Equina", price: 500 },
  { id: "equine-rehab", name: "Rehabilitació Equina", price: 100 },
  { id: "equine-prevent", name: "Medicina Preventiva Equina", price: 70 },
  { id: "general-med", name: "Medicina General", price: 50 },
  { id: "general-surgery", name: "Cirurgia General", price: 200 },
  { id: "general-dental", name: "Odontologia", price: 80 },
  { id: "general-prevent", name: "Medicina Preventiva", price: 45 },
  { id: "emergency", name: "Urgències", price: 120 },
]

export function ServiceSelector({ onSelect }: ServiceSelectorProps) {
  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger>
        <SelectValue placeholder="Selecciona un servei" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="">Selecciona un servei</SelectItem>
        {SERVICES.map((service) => (
          <SelectItem key={service.id} value={service.id}>
            {service.name} - {service.price}€
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}