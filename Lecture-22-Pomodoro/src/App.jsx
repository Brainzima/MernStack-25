import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [timeLeft, setTimeLeft] = useState(10);
  const [status, setStatus] = useState(false);
  const alarm = useRef(new Audio('audio path'))

  useEffect(() => {
    let interval = null;

    if(status && timeLeft > 0){
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1)
        console.log(timeLeft)
      }, 1000)
    }else if(timeLeft == 0){
      setStatus(false)
      alarm.current.play();
      alert("TimeUp")
    }

    return () => clearInterval(interval) 
  }, [timeLeft, status])

  const handlePomo = () => {
    if(status){
      setStatus(false)
    }else{
      setStatus(true)
    }
  }

  const formatTime = (seconds) =>{
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    const time = `${min.toString().padStart(2, 0)}:${sec.toString().padStart(2, 0)}`
    return time;
  }

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="card bg-warning col-8">
          <div className="card-body text-center">
            <h1 id="time">{formatTime(timeLeft)}</h1>
            <div className="d-grid gap-2">
              <button onClick={handlePomo} className={status ? 'btn btn-danger' : 'btn btn-success'}>{status ? 'Stop' : 'Start'}</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
