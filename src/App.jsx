import './App.css'
import { Footer, Nav } from './components'
import { AboutMe, ContactMe, Hero, MyProjects } from './pages'

function App() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <AboutMe/>
      <MyProjects/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App
