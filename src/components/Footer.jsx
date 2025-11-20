import { Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <p className="font-semibold text-white">Dominion Lake Property</p>
          <p className="text-slate-400 text-sm mt-1">© {new Date().getFullYear()} All rights reserved.</p>
          <p className="text-slate-400 text-sm mt-1">Privacy • Terms • Disclosures</p>
        </div>
        <div className="md:justify-self-end flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram /></a>
          <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin /></a>
        </div>
      </div>
    </footer>
  )
}
