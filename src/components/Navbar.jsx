import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="w-[400px] shadow-md flex justify-center items-center py-4">
        <div className="inline-flex w-full justify-evenly">
            <Link to="/" className="relative text-gray-800 hover:text-blue-500 after:absolute after:left-0 after:bottom-0
            hover:after:scale-x-100 after:h-[3px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            Library
            </Link>
            <Link to='/reviewer' className="relative text-gray-800 hover:text-blue-500 after:absolute after:left-0 after:bottom-0
            hover:after:scale-x-100 after:h-[3px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
                Reviewer
            </Link>
            <span>Notes</span>
            <span>Settings</span>
        </div>
        </nav>
    )
}

export default Navbar;