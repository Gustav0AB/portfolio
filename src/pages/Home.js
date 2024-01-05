import backgroundVideo from '../resources/background.mp4';
import examplesData from '../assets/data/examples.json'
import experienceData from '../assets/data/experiences.json'
import { Profile } from '../components/Profile/Profile'
import { Alert } from '../components/Alert/Alert'

export const Home = () => {

    return(
        <>
            <Alert/>
            <div className="video-background">
                <video id='bg-video' src={backgroundVideo} autoPlay loop muted />
                <div className='video-background--content'>
                    <div className='txt'><span className='first-line'>Gustavo Alvarado.</span></div>
                    <div className='txt'><span className='second-line'>Sun is Rising.</span></div>
                </div>
            </div>
            <div className='experience-row'>
                <div className='experience_container container'>
                    <div className='experience_container-cards'>
                        {
                            experienceData.map(job => (
                                <div className='experience_container--card' key={job.id}>
                                    <h3>{job.position} <span>at {job.company}</span> </h3>
                                    <p>Duties</p>
                                    <ul>
                                        { job.responsabilities.map(responsability => (
                                            <li>{responsability.description}</li>
                                        ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='practical-row'>
                <div className='container'>
                    <h3>Practical <span>Examples</span></h3>
                    <Profile/>
                    <ul className='practical-examples row-btn'> 
                        {
                            examplesData.map( element => (
                                <li key={element.id}>
                                    <a href={element.link}><span>{element.name}</span></a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className='knowlage-row'>
                <p>what I know to do technices, tech and skills</p>
            </div>
            <div className='about-row'>
                <p>about me and social media</p>
            </div>
        </>
    );
}