import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'

function App() {
  const [todos, setTodos] = useState([])
  const fetchData=async()=>{
    // const res =await useFetch('https://jsonplaceholder.typicode.com/todos')
    setTodos(await useFetch('https://jsonplaceholder.typicode.com/todos'))
  }
  useEffect(() => {    
    fetchData()
  }, [])
  return (
    <>
      <ul>
        {
          todos.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))
        }
      </ul>

    </>
  )
}

export default App
