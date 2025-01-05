import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Timer from '../components/Timer'
import Library from './Library';
import Auth from './Auth';
import { useState } from 'react';

function Main() {
    const [showAuth, setShowAuth] = useState(false);

    return (
        <>
        {!showAuth ? (
            <>
            <Header setShowAuth={setShowAuth}/>
            <div className='w-full justify-center mt-2 inline-flex gap-4'>
                <div className='flex-col '>
                    <Navbar/>
                    <Timer/>
                </div>
                <div>
                    <Library/>
                </div>
            </div>
            </>
        ) : (
            <Auth />
        )}
        </>
    )
}

export default Main;