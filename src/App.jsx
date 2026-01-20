import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import SocialFloatingButton from './components/shared/SocialFloatingButton'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-white"> 
      <Navbar />
      <SocialFloatingButton />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </div>
  )
}

export default App
