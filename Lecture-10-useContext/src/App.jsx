import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './components/Box'
import ThemeContext from './ThemeContext'

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')

  function toggleTheme(){
    setTheme((ct)=>(ct=='light' ? 'dark' : 'light'))
  }

  return (
    <>
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <Box />
      </ThemeContext.Provider>
    </>
  )
}

export default App
