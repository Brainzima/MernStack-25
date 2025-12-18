import { useState } from 'react'
import './App.css'
import QRCode from 'react-qr-code'
function App() {
  const [text, setText] = useState("")

  return (
    <>
      <h3>QR Code Generator</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div style={{ height: "auto", marginTop: "15px", maxWidth: "200px", width: "100%" }}>
        {text !== '' && 
          <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={text}
          viewBox={`0 0 256 256`}
        />
        }
      </div>
    </>
  )
}

export default App
