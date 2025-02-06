import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ServiceSelector } from "./service-selector"
import { TimeSlotSelector } from "./time-slot-selector"
import { toast } from "sonner"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nom ha de tenir almenys 2 caràcters.",
  }),
  email: z.string().email({
    message: "Si us plau, introdueix un email vàlid.",
  }),
  phone: z.string().min(9, {
    message: "Si us plau, introdueix un número de telèfon vàlid.",
  }),
  serviceId: z.string({
    required_error: "Si us plau, selecciona un servei.",
  }),
  timeSlot: z.string({
    required_error: "Si us plau, selecciona una hora.",
  }),
})

export function BookingForm() {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [formData, setFormData] = useState<z.infer<typeof formSchema> | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceId: "",
      timeSlot: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setFormData(values)
    setShowConfirmDialog(true)
  }

  function handleConfirmBooking() {
    if (formData) {
      // Here you would send the form data to your backend
      console.log(formData)
      
      // Show success message
      toast.success("Cita reservada correctament!", {
        description: "T'enviarem un email amb la confirmació.",
      })
      
      // Reset form and close dialog
      form.reset()
      setShowConfirmDialog(false)
      setFormData(null)
    }
  }

  const handleServiceSelect = (serviceId: string) => {
    form.setValue("serviceId", serviceId);
  };

  const handleTimeSelect = (timeSlot: string) => {
    form.setValue("timeSlot", timeSlot);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input placeholder="El teu nom" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="El teu email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telèfon</FormLabel>
                <FormControl>
                  <Input placeholder="El teu telèfon" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="serviceId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Servei</FormLabel>
                <FormControl>
                  <ServiceSelector onSelect={handleServiceSelect} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="timeSlot"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hora</FormLabel>
                <FormControl>
                  <TimeSlotSelector 
                    onSelect={handleTimeSelect}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">Continuar</Button>
        </form>
      </Form>

      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar Reserva</DialogTitle>
            <DialogDescription>
              Si us plau, confirma les dades de la teva reserva:
              {formData && (
                <div className="mt-4 space-y-2">
                  <p><strong>Nom:</strong> {formData.name}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Telèfon:</strong> {formData.phone}</p>
                  <p><strong>Data i Hora:</strong> {formData.timeSlot}</p>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-2">
            <Button variant="outline" onClick={() => setShowConfirmDialog(false)}>
              Cancel·lar
            </Button>
            <Button onClick={handleConfirmBooking}>
              Reservar Cita
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}