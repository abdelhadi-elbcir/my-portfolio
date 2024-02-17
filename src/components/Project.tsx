interface ProjectProps{
    readonly img:string;
    readonly title:string;
    readonly description:string;
}

const Project = ({ img, title , description }:ProjectProps) => {

    

    return (
        <div className="details-container color-container">
            <div className="article-container">
                <img
                    src={img}
                    alt="Project 1"
                    className="project-img"
                />
            </div>
            <h2 className="experience-sub-title project-title">{title}</h2>
            <p>
                {description}
            </p>
            <div className="btn-container">
                <button
                    className="btn btn-color-2 project-btn"
                >
                    Github
                </button>
                <button
                    className="btn btn-color-2 project-btn"
                >
                    Live Demo
                </button>
            </div>
        </div>
    )
}

export default Project