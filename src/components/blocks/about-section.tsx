import { motion } from "framer-motion";

const images = [
  "https://api.altan.ai/platform/media/17036913-0ad7-4416-884e-07d32271904c?account_id=8cd115a4-5f19-42ef-bc62-172f6bff28e7",
  "https://api.altan.ai/platform/media/d2a7d8ee-d2ef-434b-abf8-4943ce31457a?account_id=8cd115a4-5f19-42ef-bc62-172f6bff28e7",
  "https://api.altan.ai/platform/media/f16329fa-7bba-49c2-af99-dfb58551cdc6?account_id=8cd115a4-5f19-42ef-bc62-172f6bff28e7"
];

export function AboutSection() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-primary">Sobre mi</h2>
                <div className="w-20 h-1 bg-primary rounded"></div>
              </div>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Hola! Sóc la Maria, tinc 26 anys i sóc veterinària llicenciada per la Universitat de Girona.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Tot i que estimo tots els animals, la meva passió són els cavalls. Vaig estudiar a València i posteriorment
                  vaig tenir l'oportunitat de treballar a França, on la cirurgia equina està molt avançada.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Aquesta experiència internacional m'ha permès desenvolupar tècniques i coneixements especialitzats
                  en el tractament i cura dels cavalls, que ara poso al servei dels meus pacients.
                </motion.p>
              </div>
            </motion.div>

            {/* Images Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[600px] grid grid-cols-2 gap-4"
            >
              {/* Main large image */}
              <motion.div
                className="col-span-2 h-72 relative overflow-hidden rounded-2xl shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={images[0]}
                  alt="Maria amb un cavall"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>

              {/* Two smaller images */}
              <motion.div
                className="h-64 relative overflow-hidden rounded-2xl shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={images[1]}
                  alt="Treballant amb animals"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                className="h-64 relative overflow-hidden rounded-2xl shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={images[2]}
                  alt="En cirurgia"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}