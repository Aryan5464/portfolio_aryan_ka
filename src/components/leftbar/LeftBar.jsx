import './LeftBar.css'
import A_logo_v1 from '../../images/A_logo_v1.png'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

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
                        <FaLinkedin />
                    </div>
                    <div className="socialIcons">
                        <BsTwitterX />
                    </div>
                    <div className="socialIcons">
                        <FaInstagram />
                    </div>
                    <div className="socialIcons">
                        <FaWhatsappSquare />
                    </div>
                </div>
        </section >
    )
}

export default LeftBar