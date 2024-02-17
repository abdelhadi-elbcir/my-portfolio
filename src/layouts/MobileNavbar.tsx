const MobileNavbar = () => {

    function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu?.classList.toggle("open");
        icon?.classList.toggle("open");
      }
      

  return (
    <nav id="hamburger-nav">
      <div className="logo">Abdelhadi</div>
      <div className="hamburger-menu">
        <div className="hamburger-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="menu-links">
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </div>
      </div>
    </nav>
  )
}

export default MobileNavbar