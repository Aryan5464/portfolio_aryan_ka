import About from './components/about/About'
import Hero from './components/hero/Hero'
import LeftBar from "./components/leftbar/LeftBar"
import Navbar from "./components/navbar/Navbar"

const App = () => {
  return (
    <div>
      <LeftBar />
      <Navbar />
      <div className="container">
        <Hero />
        <About />
      </div>
    </div>
  )
}

export default App