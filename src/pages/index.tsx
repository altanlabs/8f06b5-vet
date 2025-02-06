import { Badge } from "@/components/ui/badge"
import { motion, useScroll, useTransform } from "framer-motion"
import { BookingForm } from "@/components/blocks/booking-form"
import { AboutSection } from "@/components/blocks/about-section"
import { Suspense, useRef } from "react"
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

const MotionCard = motion(Card);

export default function IndexPage() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/34660428065', '_blank');
  };

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen overflow-hidden" ref={containerRef}>
      <motion.div 
        className="fixed inset-0 -z-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
      </motion.div>

      <div className="container mx-auto px-4 py-8 md:py-16 space-y-24">
        {/* Hero Section */}
        <motion.section 
          className="text-center space-y-6 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y: textY }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4 bg-secondary text-secondary-foreground">
              Veterinària Especialista en Equins i Cirurgia
            </Badge>
          </motion.div>
          <motion.h1 
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Cura Professional
            <br />
            Especialitzada
          </motion.h1>
          <motion.p 
            className="mx-auto max-w-[700px] text-muted-foreground md:text-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            La Dra. Maria Serrat ofereix serveis veterinaris especialitzats en equins i cirurgia avançada. 
            Amb anys d'experiència en el tractament de cavalls i altres animals, garantim una atenció professional i d'alta qualitat.
          </motion.p>
        </motion.section>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <AboutSection />
        </motion.section>

        {/* Features Section */}
        <motion.section
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 text-center"
        >
          {[
            {
              title: "Especialista en Equins",
              description: "Atenció especialitzada per a cavalls, amb experiència en tractaments específics i cura integral equina."
            },
            {
              title: "Cirurgia Avançada",
              description: "Procediments quirúrgics d'alta complexitat amb tecnologia moderna i tècniques avançades."
            },
            {
              title: "Atenció 24/7",
              description: "Servei d'emergència disponible les 24 hores per a quan més ho necessitis."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-6 rounded-lg backdrop-blur-lg bg-secondary/10 border border-border shadow-lg 
                        transition-colors hover:bg-secondary/20 cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Pricing Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            className="text-2xl font-bold text-center mb-8 text-primary"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Serveis i Tarifes
          </motion.h2>
          <Tabs defaultValue="equine" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="equine">Serveis Equins</TabsTrigger>
              <TabsTrigger value="other">Altres Animals</TabsTrigger>
            </TabsList>
            <TabsContent value="equine">
              <motion.div 
                className="grid gap-4"
                variants={staggerChildren}
                initial="initial"
                animate="animate"
              >
                {EQUINE_SERVICES.map((service, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-lg bg-secondary/10 border border-border flex justify-between items-center 
                              hover:bg-secondary/20 transition-all duration-300 cursor-pointer"
                  >
                    <div>
                      <h3 className="font-semibold text-primary">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                    <div className="text-xl font-bold text-primary whitespace-nowrap ml-4">
                      {service.price}€
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            <TabsContent value="other">
              <motion.div 
                className="grid gap-4"
                variants={staggerChildren}
                initial="initial"
                animate="animate"
              >
                {OTHER_SERVICES.map((service, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-lg bg-secondary/10 border border-border flex justify-between items-center 
                              hover:bg-secondary/20 transition-all duration-300 cursor-pointer"
                  >
                    <div>
                      <h3 className="font-semibold text-primary">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                    <div className="text-xl font-bold text-primary whitespace-nowrap ml-4">
                      {service.price}€
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
          <motion.p 
            className="text-sm text-muted-foreground text-center mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            * Els preus poden variar segons la complexitat del cas. Consulta per a casos específics.
          </motion.p>
        </motion.section>

        {/* Booking Form Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <motion.h2 
            className="text-2xl font-bold text-center mb-8 text-primary"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Reserva una Cita
          </motion.h2>
          <Suspense fallback={<LoadingCard />}>
            <BookingForm />
          </Suspense>
        </motion.section>

        {/* Contact Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <MotionCard 
            className="p-6 backdrop-blur-lg bg-secondary/10 border border-border shadow-lg max-w-xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold text-primary mb-4">Necessites Assistència Immediata?</h3>
            <p className="text-muted-foreground mb-4">
              Per a emergències o consultes urgents, contacta amb la Dra. Maria Serrat:
            </p>
            <div className="space-y-4">
              <motion.p 
                className="text-2xl font-bold text-primary"
                whileHover={{ scale: 1.05 }}
              >
                (34) 660 428 065
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-[#25D366] hover:bg-[#20BD5A] text-white mx-auto flex items-center gap-2
                           transition-all duration-300 hover:shadow-lg"
                >
                  <img 
                    src="https://api.altan.ai/platform/media/dfe7c772-7476-4fdc-85de-2db1aeede1b2?account_id=8cd115a4-5f19-42ef-bc62-172f6bff28e7" 
                    alt="WhatsApp"
                    className="w-5 h-5"
                  />
                  Contacta per WhatsApp
                </Button>
              </motion.div>
            </div>
          </MotionCard>
        </motion.section>
      </div>
    </div>
  )
}