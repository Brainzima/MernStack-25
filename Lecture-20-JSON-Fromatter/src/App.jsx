import { useState } from 'react'
import './App.css'

function App() {
  const [jsonInput, setJsonInput] = useState("");

  const handleFormat = () => {
    const parsedData = JSON.parse(jsonInput);
    const formatedData = JSON.stringify(parsedData, null, 2);
    setJsonInput(formatedData);
  }

  const handleMinify = () => {
    const parsedData = JSON.parse(jsonInput);
    const formatedData = JSON.stringify(parsedData);
    setJsonInput(formatedData);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonInput)
    alert("Data Copied!");
  }

  const handleClear = () => {
    setJsonInput("")
  }

  return (
    <>
      <div className="container-fluid">
        <h1 className='text-center'>JSON Formatter</h1>
        <div className="row text-center">
          <div className="col">
            <button onClick={handleFormat} className='btn btn-success m-2'>Format / Beautify</button>
            <button onClick={handleMinify} className='btn btn-primary m-2'>Minify</button>
            <button className='btn btn-danger m-2' onClick={handleClear}>Clear</button>
            <button className='btn btn-warning m-2' onClick={handleCopy}>Copy</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <textarea name="" id="" 
            value={jsonInput} 
            onChange={(e)=>setJsonInput(e.target.value)} 
            rows={30} className='form-control' />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
