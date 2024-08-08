import './LeftBar.css'
import A_logo_v1 from '/images/A_logo_v1.png'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const LeftBar = () => {
    return (

        <section className='leftBar'>
            <div className="leftBarTop">
                <div className="A_logo">
                    <img src={A_logo_v1} width={"35px"} alt="A_logo" />
                </div>
            </div>

            <div className="leftBarMiddle">
                <p>LETS GO - 2024</p>
            </div>

            <div className="leftBarBottom">
                <div className="socialIcons">
                    <a href="https://github.com/Aryan5464"><FaGithub /></a>
                </div>
                <div className="socialIcons">
                    <a href="https://www.linkedin.com/in/aryanhuman/"><FaLinkedin /></a>
                </div>
                <div className="socialIcons">
                    <a href="https://twitter.com/Aryanjainy"><BsTwitterX /></a>
                </div>
                <div className="socialIcons">
                    <a href="https://www.instagram.com/aryan_.__.___/"><FaInstagram /></a>
                </div>
                <div className="socialIcons">
                    <a href="https://wa.me/+919116562979"><FaWhatsappSquare /></a>
                </div>
            </div>
        </section >
    )
}

export default LeftBar