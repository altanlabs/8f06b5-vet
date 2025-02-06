import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { BookingForm } from "@/components/blocks/booking-form"
import { Suspense } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/34660428065', '_blank');
  };

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
            Reserva la teva cita veterinària
          </Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Cura Professional
            <br />
            per a les teves Mascotes
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
            Programa serveis veterinaris per als teus animals de companyia amb facilitat. Tria entre visites regulars a les zones de servei o atenció urgent amb opcions de desplaçament.
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
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Visites Programades</h3>
            <p className="text-gray-600 dark:text-gray-300">Reserva revisions i tractaments regulars a les nostres zones de servei sense cost de desplaçament.</p>
          </div>
          <div className="p-6 rounded-lg backdrop-blur-lg bg-white/30 dark:bg-slate-900/30 border-none shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Atenció Urgent</h3>
            <p className="text-gray-600 dark:text-gray-300">Serveis d'emergència 24/7 disponibles amb taxa de desplaçament addicional per a les necessitats urgents de la teva mascota.</p>
          </div>
          <div className="p-6 rounded-lg backdrop-blur-lg bg-white/30 dark:bg-slate-900/30 border-none shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Reserva Fàcil</h3>
            <p className="text-gray-600 dark:text-gray-300">Sistema de reserva en línia senzill amb disponibilitat en temps real a la teva zona.</p>
          </div>
        </motion.section>

        {/* Booking Form Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">Reserva una Cita</h2>
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
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Necessites Assistència Immediata?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Per a situacions d'emergència o suport immediat, contacta amb la Dra. Maria Serrat:
            </p>
            <div className="space-y-4">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                (34) 660 428 065
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white mx-auto"
              >
                Contacta per WhatsApp
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}