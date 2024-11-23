import { Button } from "./ui/button";

function Timer() {
    return (
        <div className="w-1/3 shadow-md p-6">
            <div className="w-full flex flex-col items-center justify-center gap-6">
                <div className="inline-flex gap-4">
                    <Button>Pomodoro</Button>
                    <Button>Short Break</Button>
                    <Button>Long Break</Button>
                </div>
                <div>
                    <h1 className="text-9xl font-semibold">00:00</h1>
                </div>
                <div className="">
                    <Button className="py-6 px-16 text-xl">START</Button>
                </div>
            </div>
        </div>
    );
}

export default Timer;
