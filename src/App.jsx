import Hero from './components/Hero'
import About from './components/About'
import FeaturedListings from './components/FeaturedListings'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Hero with Spline ocean animation and CTA */}
      <Hero />

      {/* About */}
      <About />

      {/* Featured Listings */}
      <FeaturedListings />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Gallery */}
      <Gallery />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
