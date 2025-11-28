import './App.css'
import AllTransactions from './components/AllTransactions'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import TransactionForm from './components/TransactionForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main className="bg-slate-50 min-h-[750px]">
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/transaction' element={<AllTransactions />} />
            <Route path='/add' element={<TransactionForm />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </>
  )
}

export default App
