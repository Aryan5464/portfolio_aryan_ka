import './Navbar.css'
import aryanLogo from '../../images/AryanLogo_dark.png'

const Navbar = () => {
  return (
    <section className="navContainer">
      <div className="navLeft"><img src={aryanLogo} width={'50px'} alt="Aryan" /></div>

      <div className="navMid">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#">Skills</a>
        <a href="#">Experience</a>
        <a href="#">Projects</a>
      </div>

      <div className="navRight">
        <div className="GITbtn">
          Get in touch
        </div>
      </div>
    </section>

  )
}

export default Navbar