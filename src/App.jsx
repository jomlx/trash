import { useState } from 'react'
import Navbar from './components/Navbar'
import Timer from './components/Timer'
import Library from './pages/Library'
import Main from './pages/Main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register'
import Reviewer from './pages/Reviewer'
function App() {

  return (
    <Router>
      <Routes>
        {/* Define routes for Main and Auth */}
        <Route path="/" element={<Main />}>
          <Route index element={<Library />} />
          <Route path="reviewer" element={<Reviewer />} />
          {/* Add other nested routes here */}
        </Route>
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}/>
      </Routes>
    </Router>
  )
}

export default App
