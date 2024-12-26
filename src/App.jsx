import { useState } from 'react'
import Auth from './pages/Auth'
import Navbar from './components/Navbar'
import Timer from './components/Timer'
import Library from './pages/Library'
import Main from './pages/Main'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Main/>
    <Auth></Auth>
    <Library/>
    </>
  )
}

export default App
