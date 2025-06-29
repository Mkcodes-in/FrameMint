import './App.css'
import About from './Components/About'
import AdvanceFeatures from './Components/AdvanceFeatures'
import FaqSection from './Components/FaqSection'
import Feature from './Components/Feature'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import PriceSection from './Components/PriceSection'
import Testimonialsection from './Components/Testimonialsection'
function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main className="relative z-0">   
        <Home />
        <Feature />
        <About />
        <AdvanceFeatures />
        <Testimonialsection />
        <PriceSection />
        <FaqSection />
      </main>
    </div>
  )
}

export default App