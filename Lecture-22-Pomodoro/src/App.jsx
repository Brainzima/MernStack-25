import { useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState("");
  const [status, setStatus] = useState(false);

  const handlePomo = () => {
    setStatus((prev) => !prev);
  }

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="card bg-warning col-6">
          <div className="card-body text-center">
            <h1 id="time">25:00</h1>
            <div class="d-grid gap-2">
              <button onClick={handlePomo} className={status ? 'btn btn-danger' : 'btn btn-success'}>{status ? 'Stop' : 'Start'}</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
