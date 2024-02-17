import arrow from "../assets/image/arrow.png";
import Experience from '../components/Experience';

const Experiences = () => {
    const backendExpreiences = [
        { title: "JavaScript", level: "Intermediate" },
        { title: "TypeScript", level: "Basic" },
        { title: "React", level: "Experienced" },
        { title: "Bootstrap", level: "Experienced" },
        { title: "Node", level: "Intermediate" },
        { title: "Springboot", level: "Experienced" },
    ];
    
    const devopsExpreiences = [
        { title: "Git", level: "Experienced" },
        { title: "Github Actions", level: "Basic" },
        { title: "Docker", level: "Intermediate" },
        { title: "Shell Script", level: "Intermediate" },
        { title: "Docker Swarm", level: "Intermediate" },
    ]
    return (
        <section id="experience">
            <p className="section__text__p1">Explore My</p>
            <h1 className="title">Experience</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    <div className="details-container">
                        <h2 className="experience-sub-title">Backend & Frontend Development</h2>
                        <div className="article-container">
                            {
                                backendExpreiences.map((experience, index) => {
                                    return <Experience key={index} title={experience.title} level={experience.level} />;
                                })
                            }
                        </div>
                    </div>
                    <div className="details-container">
                        <h2 className="experience-sub-title">Devops Development</h2>
                        <div className="article-container">
                        {
                                devopsExpreiences.map((experience, index) => {
                                    return <Experience key={index} title={experience.title} level={experience.level} />;
                                })
                            }
                        </div>
                    </div>
                    
                </div>
            </div>
            <img
                src={arrow}
                alt="Arrow icon"
                className="icon arrow"
            />
        </section>
    )
}

export default Experiences