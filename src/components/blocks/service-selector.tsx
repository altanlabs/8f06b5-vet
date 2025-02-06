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

export function ServiceSelector({ onSelect }: ServiceSelectorProps) {
  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Selecciona un servei" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="medicina-general-equina">Medicina General Equina - 80€</SelectItem>
        <SelectItem value="medicina-esportiva-equina">Medicina Esportiva Equina - 120€</SelectItem>
        <SelectItem value="odontologia-equina">Odontologia Equina - 90€</SelectItem>
        <SelectItem value="cirurgia-equina">Cirurgia Equina - 500€</SelectItem>
        <SelectItem value="reproduccio-equina">Reproducció Equina - 150€</SelectItem>
        <SelectItem value="rehabilitacio-equina">Rehabilitació Equina - 100€</SelectItem>
        <SelectItem value="medicina-preventiva-equina">Medicina Preventiva Equina - 70€</SelectItem>
        <SelectItem value="medicina-general">Medicina General - 50€</SelectItem>
        <SelectItem value="cirurgia-general">Cirurgia General - 200€</SelectItem>
        <SelectItem value="odontologia">Odontologia - 80€</SelectItem>
        <SelectItem value="medicina-preventiva">Medicina Preventiva - 45€</SelectItem>
        <SelectItem value="urgencies">Urgències - 120€</SelectItem>
      </SelectContent>
    </Select>
  )
}