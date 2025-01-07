import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function Header() {

    return (
        <header className="w-full inline-flex justify-between pt-2 items-center">
            <span className="text-3xl font-bold">Learnt</span>
            <Link to='login'>
                <Button>Login</Button>
            </Link>
        </header>
    )
}

export default Header;