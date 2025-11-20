import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Contact Us</h2>
          <p className="mt-4 text-slate-600">Reach our private client team for listings, showings, or portfolio guidance.</p>

          <div className="mt-6 space-y-3 text-slate-700">
            <p className="flex items-center gap-2"><Phone className="w-5 h-5 text-emerald-700" /> +1 (555) 201-0910</p>
            <p className="flex items-center gap-2"><Mail className="w-5 h-5 text-emerald-700" /> contact@dominionlake.com</p>
            <p className="flex items-center gap-2"><MapPin className="w-5 h-5 text-emerald-700" /> 100 Lakefront Ave, Dominion Bay</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" required value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea required rows="5" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} className="mt-1 w-full rounded-lg border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
          </div>
          <button className="mt-6 inline-flex items-center px-5 py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-blue-700 text-white font-semibold hover:from-emerald-500 hover:to-blue-600 transition">
            {sent ? 'Message Sent ✓' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
