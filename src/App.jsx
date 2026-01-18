import { motion } from 'framer-motion'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import HeroSlider from './components/home/HeroSlider'
import Features from './components/home/Features'
import Awards from './components/home/Awards'
import WhyChooseUs from './components/home/WhyChooseUs'
import FeaturedExperiences from './components/home/FeaturedExperiences'
import GuestExperiences from './components/home/GuestExperiences'
import SocialFloatingButton from './components/shared/SocialFloatingButton'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SocialFloatingButton />
      <main>
        <HeroSlider />
        <Features />
        <Awards />
        <WhyChooseUs />
        <FeaturedExperiences />
        <GuestExperiences />

        {/* Experience the Extraordinary Section */}
        <section className="section-padding bg-slate-50/50">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl mb-6 text-[#22455C]">Experience the Extraordinary</h2>
              <p className="text-xl opacity-70 max-w-3xl mx-auto italic text-slate-600">
                Discover the timeless beauty of Egypt with personalized tours that bridge history and luxury.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
