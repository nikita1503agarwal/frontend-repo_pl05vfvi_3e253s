import { Shield, Stars, Trees, Landmark } from 'lucide-react'

const benefits = [
  { icon: Shield, title: 'Trusted Agents', desc: 'Seasoned experts with deep local insight and global reach.' },
  { icon: Stars, title: 'Exclusive Access', desc: 'Curated, off-market opportunities tailored to your goals.' },
  { icon: Trees, title: 'Scenic Locations', desc: 'Homes immersed in nature—lakes, forests, and mountain views.' },
  { icon: Landmark, title: 'Investment Focus', desc: 'Data-driven guidance for long-term value and returns.' }
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Why Choose Us</h2>
        <p className="mt-4 text-slate-600 max-w-2xl">We bring white-glove service to waterfront living—combining discretion, design, and investment-grade insight.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white hover:shadow-lg hover:shadow-emerald-100/40 transition">
              <div className="w-12 h-12 rounded-lg bg-emerald-600/10 text-emerald-700 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
