import ProjectCard from './ProjectCard'
import './Projects.css'
import about from '../../images/about.png'


const Projects = () => {
    return (
        <section className='projectSection' id='projects'>
            <div className='projectSectionHeading'>Projects Worked On</div>
            <div className="projectsContainer">
                <ProjectCard imgUrl={about} name='Rentellar' description='Elevate inventory management with Renteller: intuitive interface, real time updates, analytics, and full control over stock, orders, and suppliers.' liveLink='https://www.rentellar.com/' githubLink='#' />
                <ProjectCard imgUrl={about} name='Rentellar' description='Elevate inventory management with Renteller: intuitive interface, real time updates, analytics, and full control over stock, orders, and suppliers.' liveLink='https://www.rentellar.com/' githubLink='#' />
                <ProjectCard imgUrl={about} name='Rentellar' description='Elevate inventory management with Renteller: intuitive interface, real time updates, analytics, and full control over stock, orders, and suppliers.' liveLink='https://www.rentellar.com/' githubLink='#' />
                <ProjectCard imgUrl={about} name='Rentellar' description='Elevate inventory management with Renteller: intuitive interface, real time updates, analytics, and full control over stock, orders, and suppliers.' liveLink='https://www.rentellar.com/' githubLink='#' />
                <ProjectCard imgUrl={about} name='Rentellar' description='Elevate inventory management with Renteller: intuitive interface, real time updates, analytics, and full control over stock, orders, and suppliers.' liveLink='https://www.rentellar.com/' githubLink='#' />
            </div>
        </section>
    )
}

export default Projects