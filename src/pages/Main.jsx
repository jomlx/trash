import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Timer from '../components/Timer'
import Library from './Library';
import Reviewer from './Reviewer';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Main() {
    return (
        <>
            <div className='w-full flex flex-col justify-center mt-2 px-20'>
                <Header />
                <div className='w-full justify-center inline-flex gap-4'>
                    <div className='flex-col '>
                        <Navbar/>
                        <Timer/>
                    </div>
                    <div>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;