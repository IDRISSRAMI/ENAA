import { useState } from 'react'
import './App.css'
import Login from './assets/pages/Login'
import SignUp from './assets/pages/Register'
import ComingSoon from './assets/pages/Soon'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
function App() {
  const [count, setCount] = useState(0)

  return (
   
   <Router>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='/' element={<SignUp />} /> {/* default page */}
    </Routes>
   </Router>

  )
}

export default App
