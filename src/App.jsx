import About from './components/about/About'
import Experience from './components/experience/Experience'
import Hero from './components/hero/Hero'
import LeftBar from "./components/leftbar/LeftBar"
import Navbar from "./components/navbar/Navbar"
import Skills from './components/skills/Skills'

const App = () => {
  return (
    <div>
      <LeftBar />
      <Navbar />
      <div className="container">
        <Hero />
        <About />
        <Skills />
        <Experience />
      </div>
    </div>
  )
}

export default App