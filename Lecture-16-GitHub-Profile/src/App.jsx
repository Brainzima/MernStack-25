import { useEffect, useState } from 'react'
import './App.css'
import ProfileCard from './components/ProfileCard'

function App() {
  const [userData, setUserData] = useState('')
  async function fetchData(){
    try {
      const res = await fetch(`https://api.github.com/users/rahman4ktr`)
      const data = await res.json()
      setUserData(data)
    } catch (error) {
      alert(error)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>
      <ProfileCard userData={userData} />
    </>
  )
}

export default App
