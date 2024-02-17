import arrow from '../assets/image/arrow.png';
import Project from '../components/Project';

const Projects = () => {

  const projects = [
    { 
        title: "Wadifaty Mobile",
        description: "Android Mobile App",
        repo: "https://github.com/abdelhadi-elbcir",
        link: "https://play.google.com/store/apps/details?id=com.app.wadifaty"
    },
    { 
        title: "Wadifaty Website",
        description: "Wadifaty blogging website",
        repo: "https://github.com/abdelhadi-elbcir",
        link: "https://www.wadifaty.ma/"
    },
    { 
        title: "Conférence Managment",
        description: "Website to managed a confrence",
        repo: "https://github.com/abdelhadi-elbcir",
        link: "https://github.com/abdelhadi-elbcir"
    },
    { 
        title: "Travel Easy Hotel",
        description: "Website to manage an hotel",
        repo: "https://github.com/abdelhadi-elbcir",
        link: "https://github.com/abdelhadi-elbcir"
    },
    { 
        title: "IRISI Hopspitale",
        description: "Website to manage a hospitale",
        repo: "https://github.com/abdelhadi-elbcir",
        link: "https://github.com/abdelhadi-elbcir"
    },
    { 
        title: "Offres Exclusives",
        description: "Website and Mobile(Android)",
        repo: "https://github.com/abdelhadi-elbcir",
        link: "http://offresexclusives.org/"
    },
];

const changeURL = (url: string) => {
  window.location.href = url;
};
  
  return (
    <section id="projects">
      <hr/>
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {
            projects.map((item, index) => {
              return <Project
                  key={index}
                  title={item.title}
                  description={item.description}
                  repo={item.repo}
                  link={item.link}
              />;
          })
          }
        </div>
      </div>
      <img
        src={arrow}
        onClick={()=>changeURL('#contact')}
        alt="Arrow icon"
        className="icon arrow"
      />
    </section>
  )
}

export default Projects