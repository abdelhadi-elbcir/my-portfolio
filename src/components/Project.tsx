interface ProjectProps{
    readonly title:string;
    readonly description:string;
    readonly link:string;
    readonly repo:string;
}

const Project = ({ title , description , link ,repo }:ProjectProps) => {

    const changeURL = (url: string) => {
        window.location.href = url;
      };

    return (
        <div className="details-container color-container">
            {/* <div className="article-container">
                <img
                    src={img}
                    alt="Project 1"
                    className="project-img"
                />
            </div> */}
            <h2 className="experience-sub-title project-title">{title}</h2>
            <p>
                {description}
            </p>
            <div className="btn-container">
                <button
                    className="btn btn-color-2 project-btn"
                    onClick={()=>changeURL(repo)}
                >
                    Github
                </button>
                <button
                    className="btn btn-color-2 project-btn"
                    onClick={()=>changeURL(link)}
                >
                    Live Demo
                </button>
            </div>
        </div>
    )
}

export default Project