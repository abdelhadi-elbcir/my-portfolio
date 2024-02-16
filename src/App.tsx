import Footer from './layouts/Footer'
import MobileNavbar from './layouts/MobileNavbar'
import Navbar from './layouts/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Experiences from './pages/Experiences'
import Profile from './pages/Profile'
import Projects from './pages/Projects'

function App() {

  return (
    <>
       <Navbar/>
       <MobileNavbar/>
       <Profile/>
       <About/>
       <Experiences/>
       <Projects/>
       <Contact/>
       <Footer/>
    </>
  )
}

export default App
