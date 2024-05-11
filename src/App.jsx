import LeftBar from "./components/leftbar/LeftBar"
import Navbar from "./components/navbar/Navbar"

const App = () => {
  return (
    <div>
      <LeftBar />
      <div className="container">
        <Navbar />
      </div>
    </div>
  )
}

export default App