import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { BookingForm } from "@/components/blocks/booking-form"
import { Suspense } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function LoadingCard() {
  return (
    <Card className="p-6 backdrop-blur-lg bg-white/30 dark:bg-slate-900/30 border-none shadow-lg">
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-primary/20 rounded w-1/4"></div>
        <div className="h-10 bg-primary/20 rounded"></div>
        <div className="h-4 bg-primary/20 rounded w-1/3"></div>
        <div className="h-10 bg-primary/20 rounded"></div>
        <div className="h-4 bg-primary/20 rounded w-1/2"></div>
        <div className="h-10 bg-primary/20 rounded"></div>
      </div>
    </Card>
  )
}

const EQUINE_SERVICES = [
  { name: "Medicina General Equina", price: 80, description: "Examen complet i diagnòstic general" },
  { name: "Medicina Esportiva Equina", price: 120, description: "Avaluació i tractament per a cavalls esportius" },
  { name: "Odontologia Equina", price: 90, description: "Cura dental completa i manteniment" },
  { name: "Reproducció Equina", price: 150, description: "Serveis reproductius i obstetrícia" },
  { name: "Cirurgia Equina", price: 500, description: "Procediments quirúrgics especialitzats" },
  { name: "Rehabilitació Equina", price: 100, description: "Teràpia i recuperació post-lesió" },
  { name: "Medicina Preventiva Equina", price: 70, description: "Vacunacions i controls preventius" },
];

const OTHER_SERVICES = [
  { name: "Medicina General", price: 50, description: "Consulta i examen general" },
  { name: "Cirurgia General", price: 200, description: "Procediments quirúrgics estàndard" },
  { name: "Odontologia", price: 80, description: "Tractaments dentals complets" },
  { name: "Medicina Preventiva", price: 45, description: "Vacunacions i controls rutinaris" },
  { name: "Urgències", price: 120, description: "Atenció immediata per a casos urgents" },
];

export default function IndexPage() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/34660428065', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="container mx-auto px-4 py-8 md:py-16 space-y-12">
        {/* Hero Section */}
        <motion.section 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="mb-4 bg-secondary text-secondary-foreground">
            Veterinària Especialista en Equins i Cirurgia
          </Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
            Cura Professional
            <br />
            Especialitzada
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            La Dra. Maria Serrat ofereix serveis veterinaris especialitzats en equins i cirurgia avançada. 
            Amb anys d'experiència en el tractament de cavalls i altres animals, garantim una atenció professional i d'alta qualitat.
          </p>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-6 rounded-lg backdrop-blur-lg bg-secondary/10 border border-border shadow-lg">
            <h3 className="text-xl font-semibold text-primary mb-2">Especialista en Equins</h3>
            <p className="text-muted-foreground">Atenció especialitzada per a cavalls, amb experiència en tractaments específics i cura integral equina.</p>
          </div>
          <div className="p-6 rounded-lg backdrop-blur-lg bg-secondary/10 border border-border shadow-lg">
            <h3 className="text-xl font-semibold text-primary mb-2">Cirurgia Avançada</h3>
            <p className="text-muted-foreground">Procediments quirúrgics d'alta complexitat amb tecnologia moderna i tècniques avançades.</p>
          </div>
          <div className="p-6 rounded-lg backdrop-blur-lg bg-secondary/10 border border-border shadow-lg">
            <h3 className="text-xl font-semibold text-primary mb-2">Atenció 24/7</h3>
            <p className="text-muted-foreground">Servei d'emergència disponible les 24 hores per a quan més ho necessitis.</p>
          </div>
        </motion.section>

        {/* Pricing Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-center mb-8 text-primary">Serveis i Tarifes</h2>
          <Tabs defaultValue="equine" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="equine">Serveis Equins</TabsTrigger>
              <TabsTrigger value="other">Altres Animals</TabsTrigger>
            </TabsList>
            <TabsContent value="equine">
              <div className="grid gap-4">
                {EQUINE_SERVICES.map((service, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg bg-secondary/10 border border-border flex justify-between items-center hover:bg-secondary/20 transition-colors"
                  >
                    <div>
                      <h3 className="font-semibold text-primary">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                    <div className="text-xl font-bold text-primary whitespace-nowrap ml-4">
                      {service.price}€
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="other">
              <div className="grid gap-4">
                {OTHER_SERVICES.map((service, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg bg-secondary/10 border border-border flex justify-between items-center hover:bg-secondary/20 transition-colors"
                  >
                    <div>
                      <h3 className="font-semibold text-primary">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                    <div className="text-xl font-bold text-primary whitespace-nowrap ml-4">
                      {service.price}€
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          <p className="text-sm text-muted-foreground text-center mt-4">
            * Els preus poden variar segons la complexitat del cas. Consulta per a casos específics.
          </p>
        </motion.section>

        {/* Booking Form Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-center mb-8 text-primary">Reserva una Cita</h2>
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
          <div className="p-6 rounded-lg backdrop-blur-lg bg-secondary/10 border border-border shadow-lg max-w-xl mx-auto">
            <h3 className="text-xl font-semibold text-primary mb-4">Necessites Assistència Immediata?</h3>
            <p className="text-muted-foreground mb-4">
              Per a emergències o consultes urgents, contacta amb la Dra. Maria Serrat:
            </p>
            <div className="space-y-4">
              <p className="text-2xl font-bold text-primary">
                (34) 660 428 065
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white mx-auto flex items-center gap-2"
              >
                <img 
                  src="https://api.altan.ai/platform/media/dfe7c772-7476-4fdc-85de-2db1aeede1b2?account_id=8cd115a4-5f19-42ef-bc62-172f6bff28e7" 
                  alt="WhatsApp"
                  className="w-5 h-5"
                />
                Contacta per WhatsApp
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}