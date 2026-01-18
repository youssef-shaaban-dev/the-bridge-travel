import { motion } from 'framer-motion'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import HeroSlider from './components/home/HeroSlider'
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
        <WhyChooseUs />
        <FeaturedExperiences />
        <GuestExperiences />
      </main>
      <Footer />
    </div>
  )
}

export default App
