import { useState } from 'react'
import './App.css'
import './index.css'
import { Navbar } from './components/Navbar'
import {MobileMenu} from './components/MobileMenu'
import {Home} from './components/sections/Home'
import {About} from './components/sections/About'
import {Projects} from './components/sections/Projects'
import {Contact} from './components/sections/Contact'
import { TracingBeam } from './components/TracingBeam'

function App() {

  
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <TracingBeam>
        <div className="flex flex-col">
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </TracingBeam>
      </div>
    </>
  )
}

export default App
