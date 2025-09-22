import { useState } from 'react'
import './App.css'
import  About  from './components/pages/About'
import  Contact  from './components/pages/Contact'
import  Home  from './components/pages/Home'
import  Services  from './components/pages/Services'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
