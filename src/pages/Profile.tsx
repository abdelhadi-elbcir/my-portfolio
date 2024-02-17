import img from '../assets/image/pdf.jpeg';
import linkedin from '../assets/image/linkedin.png';
import github from '../assets/image/github.png';

const Profile = () => {

  const changeURL = (url: string) => {
    window.location.href = url;
  };
  

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img style={{borderRadius:"50%" , boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"}} src={img} alt="Abdelhadi El Bcir profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">El Bcir Abdelhadi</h1>
        <p className="section__text__p2">Java & React Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={()=>changeURL('')}
          >
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={()=>changeURL('')}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedin}
            alt="My LinkedIn profile"
            className="icon"
            onClick={()=>changeURL('')}
          />
          <img
            src={github}
            alt="My Github profile"
            className="icon"
            onClick={()=>changeURL('')}
          />
        </div>
      </div>
      
    </section>
  );
};

export default Profile;
