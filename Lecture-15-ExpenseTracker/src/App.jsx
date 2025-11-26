import './App.css'
import Dashboard from './components/Dashboard'
import ExpenseIncomeList from './components/ExpenseIncomeList'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import TransactionForm from './components/TransactionForm'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/transaction' element={<ExpenseIncomeList/>}/>
        <Route path='/add' element={<TransactionForm/>}/>
      </Routes>
    </Router>
      <Footer/>
    </>
  )
}

export default App
