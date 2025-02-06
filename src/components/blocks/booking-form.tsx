import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function BookingForm() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [bookingType, setBookingType] = useState('scheduled')

  return (
    <Card className="p-6 backdrop-blur-lg bg-white/30 dark:bg-slate-900/30 border-none shadow-lg">
      <form className="space-y-6">
        <div className="space-y-4">
          <Label>Service Type</Label>
          <RadioGroup
            defaultValue="scheduled"
            onValueChange={setBookingType}
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
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your area" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="area1">Downtown</SelectItem>
              <SelectItem value="area2">North Side</SelectItem>
              <SelectItem value="area3">South Side</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <Label>Service</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="checkup">Regular Check-up</SelectItem>
              <SelectItem value="vaccination">Vaccination</SelectItem>
              <SelectItem value="emergency">Emergency Care</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <Label>Pet Information</Label>
          <Input placeholder="Pet's Name" />
          <Select>
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
          />
        </div>

        <div className="space-y-4">
          <Label>Available Time Slots</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="9">9:00 AM</SelectItem>
              <SelectItem value="10">10:00 AM</SelectItem>
              <SelectItem value="11">11:00 AM</SelectItem>
              <SelectItem value="14">2:00 PM</SelectItem>
              <SelectItem value="15">3:00 PM</SelectItem>
              <SelectItem value="16">4:00 PM</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
          Book Appointment
        </Button>
      </form>
    </Card>
  )
}