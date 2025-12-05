import React, { useState, useEffect } from 'react';

// Browser check
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = 'en-US';

function App() {
  const [isListening, setIsListening] = useState(false);
  const [text, setText] = useState(null);
  const [bgColor, setBgColor] = useState('#16213e'); // Background color state

  useEffect(() => {
    handleListen();
  }, [isListening]);

  useEffect(()=>{
    if(!text) return;
    const command = text.toLowerCase()
    // console.log(command) 
    if (command.includes('open google')) {
        window.open('https://google.com','_blank')
    }

    // more command... 
  },[text])
  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log("continue..");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("Stopped Mic on Click");
      };
    }

    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
      console.log(transcript);
      setText(transcript);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  return (
    // Dynamic Background Color
    <div className="main-container" style={{ backgroundColor: bgColor, minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <div className="container">
        <h1>Voice Assistant 🎙️</h1>

        <div className="box">
          <p>{isListening ? 'Listening... 👂' : 'Click Start to Speak'}</p>

          <button 
            className={`btn-style ${isListening ? 'stop-btn listening' : 'start-btn'}`}
            onClick={() => setIsListening(prevState => !prevState)}
          >
            {isListening ? 'Stop' : 'Start'}
          </button>

          <button className="btn-style reset-btn" onClick={() => setText("")}>
            Reset
          </button>
        </div>

        <div className="main-content">
          {text}
        </div>

      </div>
    </div>
  );
}

export default App;