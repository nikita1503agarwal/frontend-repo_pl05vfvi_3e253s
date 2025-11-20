const testimonials = [
  { name: 'Evelyn & Marc', quote: 'Our lake home is everything we dreamed of—private, elegant, and effortlessly livable. The team anticipated our needs at every step.' },
  { name: 'Sophie A.', quote: 'Discreet, strategic, and impeccably professional. We gained access to listings we never knew existed.' },
  { name: 'The Whitmores', quote: 'A seamless experience from start to finish. Investment guidance was spot-on.' }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What Clients Say</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
              <p className="text-slate-700">“{t.quote}”</p>
              <p className="mt-4 font-semibold text-slate-900">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
