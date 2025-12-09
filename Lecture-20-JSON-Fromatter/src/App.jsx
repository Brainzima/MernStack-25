import { useState } from 'react'
import './App.css'

function App() {
  const [jsonInput, setJsonInput] = useState("data");

  const handleClear = () => {
    setJsonInput("")
  }

  return (
    <>
      <div className="container-fluid">
        <h1 className='text-center'>JSON Formatter</h1>
        <div className="row text-center">
          <div className="col">
            <button className='btn btn-success m-2'>Format / Beautify</button>
            <button className='btn btn-primary m-2'>Minify</button>
            <button className='btn btn-danger m-2' onClick={handleClear}>Clear</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <textarea name="" id="" rows={30} className='form-control'>
              {jsonInput}
            </textarea>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
