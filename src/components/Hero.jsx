import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToListings = () => {
    const el = document.getElementById('featured')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Spline ocean animation */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Atmospheric overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.25),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
          >
            Dominion <span className="text-emerald-300">Lake</span> Property
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 max-w-xl text-lg sm:text-xl text-blue-100"
          >
            Exclusive lakefront homes and prime investment properties in nature’s most serene locations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-10 flex items-center gap-4"
          >
            <button onClick={scrollToListings} className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold shadow-lg shadow-emerald-600/20 hover:from-emerald-400 hover:to-blue-500 transition">
              View Listings
            </button>
            <a href="#about" className="px-6 py-3 rounded-full border border-white/30 text-white/90 hover:bg-white/10 transition">Learn more</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
