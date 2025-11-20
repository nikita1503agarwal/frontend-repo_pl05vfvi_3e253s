import { motion } from 'framer-motion'

const listings = [
  {
    id: 1,
    title: 'Glass Shore Residence',
    price: '$4,200,000',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop',
    description: 'Modern architectural masterpiece with panoramic lake views and private dock.'
  },
  {
    id: 2,
    title: 'Cedar Point Estate',
    price: '$3,480,000',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2000&auto=format&fit=crop',
    description: 'Expansive retreat nestled among pines with infinity-edge pool overlooking the water.'
  },
  {
    id: 3,
    title: 'Willow Cove Villa',
    price: '$2,950,000',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2000&auto=format&fit=crop',
    description: 'Elegant villa featuring floor-to-ceiling windows and serene sunset vistas.'
  },
  {
    id: 4,
    title: 'Marina Vista Haven',
    price: '$3,120,000',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2000&auto=format&fit=crop',
    description: 'Contemporary lines, private mooring, and effortless indoor-outdoor living.'
  },
  {
    id: 5,
    title: 'Birchwood Retreat',
    price: '$2,400,000',
    image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2000&auto=format&fit=crop',
    description: 'Warm, natural finishes surrounded by forest greens and tranquil shoreline.'
  },
  {
    id: 6,
    title: 'Azure Horizon House',
    price: '$5,100,000',
    image: 'https://images.unsplash.com/photo-1505925456693-124134d66749?q=80&w=2000&auto=format&fit=crop',
    description: 'Showstopping blue-water panoramas with expansive terrace and chef’s kitchen.'
  }
]

export default function FeaturedListings() {
  return (
    <section id="featured" className="relative py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Featured Listings</h2>
          <a href="#contact" className="text-emerald-700 hover:text-emerald-600 font-medium">Work with an agent →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((home, i) => (
            <motion.div
              key={home.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-emerald-200/40 hover:border-emerald-200 transition"
            >
              <div className="aspect-[4/3] w-full bg-slate-200">
                <img src={home.image} alt={home.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{home.title}</h3>
                  <span className="text-emerald-700 font-bold">{home.price}</span>
                </div>
                <p className="mt-2 text-slate-600 text-sm">{home.description}</p>
                <button className="mt-4 inline-flex items-center px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition">View details</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
