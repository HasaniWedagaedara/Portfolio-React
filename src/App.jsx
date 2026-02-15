import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Experience from './pages/Experience/Experience'
import Education from './pages/Education/Education'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Education/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
