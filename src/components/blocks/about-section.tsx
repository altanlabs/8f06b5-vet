import { motion } from "framer-motion";

const images = [
  "https://api.altan.ai/platform/media/17036913-0ad7-4416-884e-07d32271904c?account_id=8cd115a4-5f19-42ef-bc62-172f6bff28e7",
  "https://api.altan.ai/platform/media/d2a7d8ee-d2ef-434b-abf8-4943ce31457a?account_id=8cd115a4-5f19-42ef-bc62-172f6bff28e7",
  "https://api.altan.ai/platform/media/f16329fa-7bba-49c2-af99-dfb58551cdc6?account_id=8cd115a4-5f19-42ef-bc62-172f6bff28e7"
];

export function AboutSection() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-primary">Sobre mi</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            Hola! Sóc la Maria, tinc 26 anys i sóc veterinària llicenciada per la Universitat de Girona.
          </p>
          <p>
            Tot i que estimo tots els animals, la meva passió són els cavalls. Vaig estudiar a València i posteriorment
            vaig tenir l'oportunitat de treballar a França, on la cirurgia equina està molt avançada.
          </p>
          <p>
            Aquesta experiència internacional m'ha permès desenvolupar tècniques i coneixements especialitzats
            en el tractament i cura dels cavalls, que ara poso al servei dels meus pacients.
          </p>
        </div>
      </motion.div>

      {/* Images Grid */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-6 grid-rows-5 gap-4 h-[500px]"
      >
        <motion.div
          className="col-span-4 row-span-3 relative overflow-hidden rounded-xl"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={images[0]}
            alt="Maria amb un cavall"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          className="col-span-2 row-span-5 relative overflow-hidden rounded-xl"
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
          className="col-span-4 row-span-2 relative overflow-hidden rounded-xl"
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
  );
}