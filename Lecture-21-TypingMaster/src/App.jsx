import { useRef, useState } from 'react';
import './App.css'

function App() {
  const [userInput, setUserInput] = useState("");
  const inputRef = useRef();
  const paragraph = "Brainzima As a proud venture under the esteemed umbrella of Brainzima Innovation Pvt Ltd, we are your gateway to a dynamic fusion of IT excellence and cutting - edge computer education. Brainzima Innovation Institute is where innovation thrives and knowledge transcends boundaries.Nestled within the powerhouse of Brainzima Innovation Pvt Ltd, we specialize in two core domains: Web Development and Computer Education.";

  const handleFocus = () => {
    inputRef.current.focus();
  }
  return (
    <>
      <div className="container" onClick={handleFocus}>
        <h1>Typing Master</h1>  <hr />
        <div className="display-text">
          {
            paragraph.split('').map((char, index) => (
              <span key={index}>{char}</span>
              
            ))
          }
        </div>

        <input
          type="text"
          value={userInput}
          onChange={(e)=>setUserInput(e.target.value)}
          ref={inputRef}
          autoFocus
        />
      </div>

    </>
  )
}

export default App
