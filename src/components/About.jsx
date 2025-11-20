import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop')] opacity-5 bg-cover bg-center" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900"
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-slate-700 max-w-3xl"
        >
          Dominion Lake Property is a boutique real-estate firm focused exclusively on premier waterfront estates. Our mission is to blend luxury, privacy, and nature—pairing discerning buyers with carefully curated properties and long-term investment potential.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-slate-700 max-w-3xl"
        >
          With trusted agents, deep local knowledge, and exclusive off-market access, we deliver a buying experience defined by discretion, expertise, and results.
        </motion.p>
      </div>
    </section>
  )
}
