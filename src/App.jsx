import { useState } from 'react'
import Auth from './pages/Auth'
import Navbar from './components/Navbar'
import Timer from './components/Timer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Timer/>
    <Auth></Auth>
    </>
  )
}

export default App
