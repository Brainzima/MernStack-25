import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [image, setImage] = useState(null)
  const [oburl, setOburl] = useState(null)
  
  const handleInput = (e) =>{
    setImage(e.target.files[0])
  }
  useEffect(()=>{
    if(image){
      const obm = URL.createObjectURL(image)
      setOburl(obm)
    }
  },[image])
  return (
    <>
      <div className='container bg-light'>
          <div className="row">
            <div className="col">
              <input type="file" name="" onChange={handleInput} id="" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card">
                <img src={oburl} alt=""  className="img-top" />
                </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
