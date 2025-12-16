import { useState } from 'react'
import './App.css'

function App() {
  const [hori, setHori] = useState(5)
  const [vert, setVert] = useState(5)
  const [blur, setBlur] = useState(5)
  const [spread, setSpread] = useState(5)
  const [color, setColor] = useState("#563d7c")
  const [inset, setInset] = useState(false)

  let boxShadowValue = `${inset?'inset':''} ${hori}px ${vert}px ${blur}px ${spread}px ${color}`
  // console.log(boxShadow)
  const copyCode = ()=>{
    navigator.clipboard.writeText(`box-shadow: ${boxShadowValue};`)
    alert("CSS Copied")
  }
  return (
    <>
      <div className="container bg-light">
        <div className="row text-center mt-5 pt-3">
          <div className="col">
            <h1>Box Shadow Generator</h1>
          </div>
        </div>
        <div className="row p-5 ">
          <div className="col-8 bg-info">
            <h2>Configure:</h2>
            <label htmlFor="horizontal">Horizontal - [{hori}]px</label>

            <input
              onChange={(e) => setHori(e.target.value)}
              value={hori}
              type="range"
              className='form-range'
              id='horizontal'
              min={0}
              max={100}
            />

            <label htmlFor="vertical">Vertical - [{vert}]px</label>
            <input onChange={(e) => setVert(e.target.value)} value={vert} type="range" className='form-range' id='vertical' min={0} max={100} />
            <label htmlFor="blur">Blur - [{blur}]px</label>
            <input onChange={(e) => setBlur(e.target.value)} value={blur} type="range" className='form-range' id='blur' min={0} max={100} />
            <label htmlFor="spread">Spread - [{spread}]px</label>
            <input onChange={(e) => setSpread(e.target.value)} value={spread} type="range" className='form-range' id='spread' min={0} max={100} />
            <label htmlFor="exampleColorInput" className="form-label">Color picker - [{color}]</label>
            <input onChange={(e) => setColor(e.target.value)} type="color" className="form-control form-control-color" id="exampleColorInput" value={color} title="Choose your color" />
            <div className="form-check">
              <input className="form-check-input" onChange={(e)=>setInset(e.target.checked)} checked={inset} type="checkbox" id="checkDefault" />
              <label className="form-check-label" htmlFor="checkDefault">
                Inset Type
              </label>
            </div>
          </div>
          <div className="col-4 bg-white d-flex justify-content-center align-items-center">
            <div style={{
              width: "200px",
              height: "200px",
              backgroundColor: "white",
              border: "1px solid",
              boxShadow: boxShadowValue
            }}></div>
          </div>
        </div>
        <div className="row">
          <div className="col bg-dark rounded-pill p-4 m-3 text-center">
            <code onClick={copyCode}>box-shadow: {boxShadowValue};</code>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
