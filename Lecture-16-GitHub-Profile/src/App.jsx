import { useEffect, useState } from 'react'
import './App.css'
import ProfileCard from './components/ProfileCard'
import RepoList from './components/RepoList'

function App() {
  const [userData, setUserData] = useState('')
  const [repos, setRepos] = useState([])
  const [invalue, setInvalue] = useState('rahman4ktr')
  function handleInput(e){
    setInvalue(e.target.value)
  }
  async function fetchData(){
    try {
      const res = await fetch(`https://api.github.com/users/${invalue}`)
      const data = await res.json()
      setUserData(data)
      const resr = await fetch(`https://api.github.com/users/${invalue}/repos`)
      const datar = await resr.json()
      setRepos(datar)
    } catch (error) {
      alert(error)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>
    <input type="text" value={invalue} onChange={handleInput} />
    <button onClick={fetchData}>Search</button>
      <ProfileCard userData={userData} />
      <RepoList repositories={repos} />
    </>
  )
}

export default App
