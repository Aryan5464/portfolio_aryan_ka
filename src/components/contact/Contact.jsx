import CI from '/images/contact_aryan.jpg';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact_section">
      <div className="contact_section_left">
        <div className="contact_image">
          <img src={CI} alt="" />
        </div>
        <div className="contact_logos">
          <div className="contact_icons">
            <a href="https://github.com/Aryan5464"><FaGithub /></a>
          </div>
          <div className="contact_icons">
            <a href="https://www.linkedin.com/in/aryanhuman/"><FaLinkedin /></a>
          </div>
          <div className="contact_icons">        
            <a href="https://twitter.com/Aryanjainy"><BsTwitterX /></a>
          </div>
          <div className="contact_icons">
            <a href="https://www.instagram.com/aryan_.__.___/"><FaInstagram /></a>
          </div>
          <div className="contact_icons">
            <a href="https://wa.me/+919116562979"><FaWhatsappSquare /></a>
          </div>
        </div>
      </div>
      <div className="contact_section_right">
        <div className="thnxmsg">
          Thank you for visiting <span>:)</span> <br />
          Feel free to reach out if you have any questions or would like to discuss potential collaborations.
        </div>
        <form  className="contact_form" autoComplete="off">
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email' />
          <input type="tel" placeholder='Ph.no' />
          <textarea placeholder='Message' />
          <button className='smbtBTN' type="submit"> Send &gt; </button>
        </form>
      </div>

    </section>
  )
}

export default Contact