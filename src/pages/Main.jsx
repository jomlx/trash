import Navbar from '../components/Navbar'
import Timer from '../components/Timer'
import Library from './Library';

function Main() {
    return (
        <div className='w-full justify-center mt-4 inline-flex gap-4'>
            <div className='flex-col '>
                <Navbar/>
                <Timer/>
            </div>
            <div>
                <Library/>
            </div>
        </div>
    )
}

export default Main;