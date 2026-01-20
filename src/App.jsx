import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import SocialFloatingButton from './components/shared/SocialFloatingButton'
import './App.css'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './components/shared/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navbar />
      <SocialFloatingButton />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
