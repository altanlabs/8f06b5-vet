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
      <SelectTrigger>
        <SelectValue placeholder="Selecciona un servei" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="medicina-general-equina">
          Medicina General Equina - 80€
        </SelectItem>
        <SelectItem value="medicina-esportiva-equina">
          Medicina Esportiva Equina - 120€
        </SelectItem>
        <SelectItem value="odontologia-equina">
          Odontologia Equina - 90€
        </SelectItem>
        <SelectItem value="medicina-general">
          Medicina General - 50€
        </SelectItem>
        <SelectItem value="urgencies">
          Urgències - 120€
        </SelectItem>
      </SelectContent>
    </Select>
  )
}