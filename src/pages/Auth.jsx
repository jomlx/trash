import { BrowserRouter as Router, Routes, Route  } from "react-router-dom"
import Login from "@/components/Login"
import Register from "@/components/Register"

function Auth() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </Router>
    )
}

export default Auth