import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { ThemeContext } from './ThemeContext'

function App() {
  const [theme, setTheme] = useState(false)

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 120
    })
  }, [])

  return (
    <div className={`${theme ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen transition-colors duration-300`}>
      <ThemeContext.Provider value={{theme, setTheme}} >  
        <Navbar />
        <Home />
      </ThemeContext.Provider>
    </div>

  )
}

export default App
