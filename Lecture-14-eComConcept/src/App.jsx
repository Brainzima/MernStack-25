import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './componets/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Products from "./pages/Products"
import Footer from './componets/Footer'
import ProductDetails from './pages/ProductDetils'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path="/ProductDetails/:id" element={<ProductDetails />} />

        </Routes>
      </BrowserRouter>
      <Footer />

    </>
  )
}

export default App
