import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Ums from './Ums'
import Login from './Login'
import Dashboard from './Dashboard'
export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Ums />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
  )
}
