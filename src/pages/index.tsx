import { Badge } from "@/components/ui/badge"
import { motion, useScroll, useTransform } from "framer-motion"
import { BookingForm } from "@/components/blocks/booking-form"
import { AboutSection } from "@/components/blocks/about-section"
import { Suspense, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// ... (previous imports and constants remain the same)

export default function IndexPage() {
  // ... (previous hooks and handlers remain the same)

  return (
    <div className="min-h-screen overflow-hidden relative" ref={containerRef}>
      {/* Background Image */}
      <div className="fixed inset-0 -z-20">
        <img 
          src="https://api.altan.ai/platform/media/4d84deff-7258-437c-972e-5a93958ccbb1?account_id=8cd115a4-5f19-42ef-bc62-172f6bff28e7"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Gradient Overlay */}
      <motion.div 
        className="fixed inset-0 -z-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background/90" />
      </motion.div>

      <div className="container mx-auto px-4 py-8 md:py-16 space-y-24 relative z-10">
        {/* Rest of the sections remain the same */}
        {/* ... */}
      </div>
    </div>
  )
}