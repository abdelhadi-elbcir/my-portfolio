import arrow from "../assets/image/arrow.png";
import experience from "../assets/image/experience.png";
import education from "../assets/image/education.png";
import aboutPic from "../assets/image/about-pic.jpeg";

const About = () => {
  return (
    <section id="about">
      <hr/>
    <p className="section__text__p1">Get To Know More</p>
    <h1 className="title">About Me</h1>
    <div className="section-container">
      <div className="section__pic-container">
        <img
          src={aboutPic}
          alt="Profile picture"
          className="about-pic"
        />
      </div>
      <div className="about-details-container">
        <div className="about-containers">
          <div className="details-container">
            <img
              src={experience}
              alt="Experience icon"
              className="icon"
            />
            <h3>Experience</h3>
            <p>2+ years <br />Backend Development</p>
          </div>
          <div className="details-container">
            <img
              src={education}
              alt="Education icon"
              className="icon"
            />
            <h3>Education</h3>
            <p>B.Sc. Bacalaureat Degree<br />E.Sc. Engineering Degree</p>
          </div>
        </div>
        <div className="text-container">
          <p>
          A backend developer proficient in Java and Java EE, with a focus on Spring Boot, 
          plays a crucial role in building the server-side components of modern web applications. 
          Java serves as the primary programming language, while frameworks like Java EE and Spring 
          Boot provide a robust foundation for developing scalable, maintainable, and efficient backend 
          systems.
          </p>
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

export default About