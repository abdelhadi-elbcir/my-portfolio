import React, { useEffect } from 'react';

const Footer: React.FC = () => {

  function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  useEffect(() => {
    window.onscroll = function() {
      scrollFunction();
    };
  }, []);

  function scrollFunction() {
    const mybutton = document.getElementById('myBtn');
    if (mybutton) {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = 'block';
      } else {
        mybutton.style.display = 'none';
      }
    }
  }

  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2024 El Bcir Abdelhadi. All Rights Reserved.</p>
      <button onClick={topFunction} id="myBtn" title="Go to top">Top</button>
    </footer>
  );
}

export default Footer;
