import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { BookingForm } from "@/components/blocks/booking-form"
import { Suspense } from "react"
import { Card } from "@/components/ui/card"

function LoadingCard() {
  return (
    <Card className="p-6 backdrop-blur-lg bg-white/30 dark:bg-slate-900/30 border-none shadow-lg">
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-blue-200 rounded w-1/4"></div>
        <div className="h-10 bg-blue-200 rounded"></div>
        <div className="h-4 bg-blue-200 rounded w-1/3"></div>
        <div className="h-10 bg-blue-200 rounded"></div>
        <div className="h-4 bg-blue-200 rounded w-1/2"></div>
        <div className="h-10 bg-blue-200 rounded"></div>
      </div>
    </Card>
  )
}

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8 md:py-16 space-y-12">
        {/* Hero Section */}
        <motion.section 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100">
            Book Your Pet Care
          </Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Professional Pet Care
            <br />
            At Your Doorstep
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
            Schedule veterinary services for your beloved pets with ease. Choose between regular visits in service areas or urgent care with travel options.
          </p>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-6 rounded-lg backdrop-blur-lg bg-white/30 dark:bg-slate-900/30 border-none shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Scheduled Visits</h3>
            <p className="text-gray-600 dark:text-gray-300">Book regular check-ups and treatments in our service areas with no travel fee.</p>
          </div>
          <div className="p-6 rounded-lg backdrop-blur-lg bg-white/30 dark:bg-slate-900/30 border-none shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Urgent Care</h3>
            <p className="text-gray-600 dark:text-gray-300">24/7 emergency services available with additional travel fee for your pet's urgent needs.</p>
          </div>
          <div className="p-6 rounded-lg backdrop-blur-lg bg-white/30 dark:bg-slate-900/30 border-none shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Easy Booking</h3>
            <p className="text-gray-600 dark:text-gray-300">Simple online booking system with real-time availability in your area.</p>
          </div>
        </motion.section>

        {/* Booking Form Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">Book an Appointment</h2>
          <Suspense fallback={<LoadingCard />}>
            <BookingForm />
          </Suspense>
        </motion.section>

        {/* Contact Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="p-6 rounded-lg backdrop-blur-lg bg-white/30 dark:bg-slate-900/30 border-none shadow-lg max-w-xl mx-auto">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Need Immediate Assistance?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              For emergency situations or immediate support, please contact our 24/7 hotline:
            </p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              1-800-VET-CARE
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}