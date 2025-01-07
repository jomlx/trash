import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="w-[400px] shadow-md flex justify-center items-center py-4">
        <div className="inline-flex w-full justify-evenly">
            <Link to="/"> <span>Library</span></Link>
            <Link to='/reviewer'> <span>Reviewer</span></Link>
            <span>Notes</span>
            <span>Settings</span>
        </div>
        </nav>
    )
}

export default Navbar;