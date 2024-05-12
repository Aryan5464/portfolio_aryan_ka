import './Experience.css'
import Bubble from './Bubble';
import { GiCrystalGrowth } from "react-icons/gi";

const Experience = () => {
    return (
        <section className='experienceSection' id='experience'>
            <div className="expCard">
                <GiCrystalGrowth className='growthIcon' />
                <p className='expHeading'>Full-Stack Developer</p>
                <p className="expSubHeading">Freelance</p>
                <Bubble str='June 2023 - Present'/>
                <p className="expDescription">
                    - Full-stack freelancer dedicated to crafting intuitive, user-friendly websites and continually expanding skills.
                    <br />
                    - Gained hands-on project management experience, by leading teams to successful project outcomes.
                </p>

            </div>
            <div className="expCard">
                <GiCrystalGrowth className='growthIcon' />
                <p className='expHeading'>Front-End Intern</p>
                <p className="expSubHeading">Duranz IT Solutions</p>
                <Bubble str='July 2023 - Sep 2023' />
                <p className="expDescription">
                    - I developed Rentellar, a comprehensive SaaS application, utilizing Next.js, Golang, and MongoDB.
                    <br />
                    - This project provided valuable hands-on experience in Agile Software Development principles.
                </p>

            </div>
            <div className="expCard">
                <GiCrystalGrowth className='growthIcon' />
                <p className='expHeading'>Open-Source Contributor</p>
                <p className="expSubHeading">GSSOC</p>
                <Bubble str='May 2023 - Aug 2023' />
                <p className="expDescription">
                    - Active contributor to open source projects, recognized within the top 1% and ranked among the top 200 contributors nationwide out of 17,000.
                    <br />
                    - Emphasized the value of technical documentation and gained proficiency in multiple programming languages.
                </p>

            </div>
            <div className="expCard">
                <GiCrystalGrowth className='growthIcon' />
                <p className='expHeading'>Front-end Developer</p>
                <p className="expSubHeading">Raise Digital</p>
                <Bubble str='July 2022 - Nov 2022' />
                <p className="expDescription">
                - I completed a remote internship with Raise Digital, where I gained foundational knowledge in web development and design.
                <br />
                - I learned basic backend logic.
                </p>

            </div>
        </section>
    )
}

export default Experience