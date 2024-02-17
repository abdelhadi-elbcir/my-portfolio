import arrow from '../assets/image/arrow.png';
import Project from '../components/Project';

const Projects = () => {

  const projects = [
    { 
        img: "path/to/html-image.jpg",
        title: "Wadifaty Mobile",
        description: "Android Mobile App",
        repo: "https://github.com/html-project",
        link: "https://example.com/html-project"
    },
    { 
        img: "path/to/css-image.jpg",
        title: "Wadifaty Website",
        description: "Wadifaty blogging website",
        repo: "https://github.com/css-project",
        link: "https://example.com/css-project"
    },
    { 
        img: "path/to/sass-image.jpg",
        title: "Conférence Managment",
        description: "Website to managed a confrence",
        repo: "https://github.com/sass-project",
        link: "https://example.com/sass-project"
    },
    { 
        img: "path/to/js-image.jpg",
        title: "Travel Easy Hotel",
        description: "Website to manage an hotel",
        repo: "https://github.com/js-project",
        link: "https://example.com/js-project"
    },
    { 
        img: "path/to/ts-image.jpg",
        title: "IRISI Hopspitale",
        description: "Website to manage a hospitale",
        repo: "https://github.com/ts-project",
        link: "https://example.com/ts-project"
    },
    { 
        img: "path/to/material-ui-image.jpg",
        title: "Offres Exclusives",
        description: "Website and Mobile(Android)",
        repo: "https://github.com/material-ui-project",
        link: "https://example.com/material-ui-project"
    },
];

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {
            projects.map((item, index) => {
              return <Project
                  key={index}
                  img={item.img}
                  title={item.title}
                  description={item.description}
          
              />;
          })
          }
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

export default Projects