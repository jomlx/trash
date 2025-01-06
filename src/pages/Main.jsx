import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Timer from '../components/Timer'
import Library from './Library';
import Auth from './Auth';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom"

function Main() {
    const [showAuth, setShowAuth] = useState(false);

    return (
        <>
        {!showAuth ? (
            <div className='w-full flex flex-col justify-center mt-2 px-20'>
                <Header setShowAuth={setShowAuth}/>
                <div className='w-full justify-center inline-flex gap-4'>
                    <div className='flex-col '>
                        <Navbar/>
                        <Timer/>
                    </div>
                    <div>
                        <Router>
                            <Routes>
                                <Route path="/" element={<Library/>}/>
                                <Route path="/library" element={<Library/>}/>
                            </Routes>
                        </Router>
                    </div>
                </div>
            </div>
        ) : (
            <Auth />
        )}
        </>
    )
}

export default Main;