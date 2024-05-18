import ProjectCard from './ProjectCard'
import './Projects.css'
import RentellarImg from '../../images/RentellarImg.png'
import LegalYodhaImg from '../../images/LegalYodhaImg.png'
import AxsImg from '../../images/AxsImg.png'
import WanderStoriesImg from '../../images/WanderStoriesImg.png'
import ClientPortfolioImg from '../../images/ClientPortfolioImg.png'
import CaraImg from '../../images/CaraImg.png'



const Projects = () => {

    const projects = [
        {
            imgUrl: RentellarImg,
            name: 'Rentellar',
            description: 'Elevate inventory management with Renteller: intuitive interface, real time updates, analytics, and full control over stock, orders, and suppliers.',
            liveLink: 'https://www.rentellar.com/',
            githubLink: '#'
        },
        {
            imgUrl: LegalYodhaImg,
            name: 'Legal Yodha',
            description: 'Developed a responsive website to bring a legal and accounting firm online, projecting professionalism and expertise.',
            liveLink: 'https://legal-yodha-psi.vercel.app/',
            githubLink: '#'
        },
        {
            imgUrl: AxsImg,
            name: 'AXS',
            description: 'Experimented with Three.js to increase user interactivity and overall website design. Made use of technical documentation and online resources to make it hapen.',
            liveLink: 'https://www.rentellar.com/',
            githubLink: '#'
        },
        {
            imgUrl: WanderStoriesImg,
            name: 'Wander Stories ',
            description: 'Travel Blogging Website providing a platform with great User Interface for them to read and share travel blogs with WEB3 technology integrated. ',
            liveLink: 'https://www.rentellar.com/',
            githubLink: '#'
        },
        {
            imgUrl: ClientPortfolioImg,
            name: 'Wander Stories ',
            description: 'Portfolio Website for a Canadian clients.',
            liveLink: 'https://client-portfolio-freelance.vercel.app/',
            githubLink: '#'
        },
        {
            imgUrl: CaraImg,
            name: 'Wander Stories ',
            description: 'Cara is a 100% responsive e-commerce website making it compatible with all the devices.',
            liveLink: 'https://ecommerce-website-project-phi.vercel.app/',
            githubLink: '#'
        },
        // Add more project objects as needed
    ];

    return (
        <section className='projectSection' id='projects'>
            <div className='projectSectionHeading'>Projects Worked On</div>
            <div className="projectsContainer">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index} // Add a unique key prop for each ProjectCard
                        imgUrl={project.imgUrl}
                        name={project.name}
                        description={project.description}
                        liveLink={project.liveLink}
                        githubLink={project.githubLink}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects