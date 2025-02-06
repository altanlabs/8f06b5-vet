import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ServiceAreaSelector } from './service-area-selector'
import { ServiceSelector } from './service-selector'
import { TimeSlotSelector } from './time-slot-selector'
import { useDatabase } from '@altanlabs/database'
import { toast } from 'sonner'

export function BookingForm() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [bookingType, setBookingType] = useState<'scheduled' | 'urgent'>('scheduled')
  const [selectedAreaId, setSelectedAreaId] = useState<string>()
  const [selectedServiceId, setSelectedServiceId] = useState<string>()
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>()
  const [petName, setPetName] = useState('')
  const [petType, setPetType] = useState('')
  
  const { addRecord } = useDatabase('appointments')
  const { addRecord: addPet } = useDatabase('pets')
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // First create the pet record
      const petResponse = await addPet({
        pet_name: petName,
        species: petType
      })
      
      // Then create the appointment
      if (petResponse && date && selectedAreaId && selectedServiceId && selectedTimeSlot) {
        await addRecord({
          appointment_date: date.toISOString(),
          service_type: bookingType,
          service_area_id: [selectedAreaId],
          service_id: [selectedServiceId],
          pet_id: [petResponse.id],
          status: 'Scheduled'
        })
        
        toast.success('Appointment booked successfully!')
        
        // Reset form
        setDate(undefined)
        setSelectedAreaId(undefined)
        setSelectedServiceId(undefined)
        setSelectedTimeSlot(undefined)
        setPetName('')
        setPetType('')
      }
    } catch (error) {
      toast.error('Failed to book appointment. Please try again.')
    }
  }

  return (
    <Card className="p-6 backdrop-blur-lg bg-white/30 dark:bg-slate-900/30 border-none shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <Label>Service Type</Label>
          <RadioGroup
            defaultValue="scheduled"
            onValueChange={(value) => setBookingType(value as 'scheduled' | 'urgent')}
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="scheduled" id="scheduled" />
              <Label htmlFor="scheduled">Scheduled Visit (No Travel Fee)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="urgent" id="urgent" />
              <Label htmlFor="urgent">Urgent Service (+ Travel Fee)</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <Label>Location</Label>
          <ServiceAreaSelector 
            onSelect={setSelectedAreaId} 
            bookingType={bookingType}
          />
        </div>

        <div className="space-y-4">
          <Label>Service</Label>
          <ServiceSelector onSelect={setSelectedServiceId} />
        </div>

        <div className="space-y-4">
          <Label>Pet Information</Label>
          <Input 
            placeholder="Pet's Name" 
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
          <Select onValueChange={setPetType}>
            <SelectTrigger>
              <SelectValue placeholder="Pet Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dog">Dog</SelectItem>
              <SelectItem value="cat">Cat</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <Label>Select Date</Label>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
            disabled={(date) => date < new Date()}
          />
        </div>

        <div className="space-y-4">
          <Label>Available Time Slots</Label>
          <TimeSlotSelector
            onSelect={setSelectedTimeSlot}
            selectedDate={date}
            selectedAreaId={selectedAreaId}
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700"
          disabled={!date || !selectedAreaId || !selectedServiceId || !selectedTimeSlot || !petName || !petType}
        >
          Book Appointment
        </Button>
      </form>
    </Card>
  )
}