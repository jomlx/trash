import { Button } from "./ui/button";
import { useState } from "react";

function Header({setShowAuth}) {

    return (
        <header className="w-full inline-flex justify-between pt-2 items-center">
            <span className="text-3xl font-bold">Learnt</span>
            <Button onClick= {() => setShowAuth(true)}>Login</Button>
        </header>
    )
}

export default Header;