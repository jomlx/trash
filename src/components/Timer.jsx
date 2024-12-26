import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
import { AlarmClock } from 'lucide-react';

function Timer() {
    const [time, setTime] = useState(10);
    const [isRunning, setIsRunning] = useState(false);
    const [selectedTime, setSelectedTime] = useState('pomodoro');
    const [loopCount, setLoopCount] = useState(0);

    const TOTAL_LOOP = 4;

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const FORMAT_TIME = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    const runTimer = () => {
        setIsRunning(true);
    }

    useEffect(() => {
        let timer;

        if (isRunning && time > 0) {
            timer = setTimeout(() => setTime(time - 1), 1000);
        } else if( time === 0) {
            handleLoop();
        }

        return () => clearTimeout(timer);
    }, [time, isRunning]);

    const handleLoop = () => {
        if (loopCount < TOTAL_LOOP - 1) {
            if (selectedTime === 'pomodoro') {
                setTime(300);
                setSelectedTime('shortBreak');
            } else if (selectedTime === 'shortBreak') {
                setTime(1500);
                setSelectedTime('pomodoro');
                setLoopCount(loopCount + 1);
            }
        } else {
            setTime(900);
            setSelectedTime('longBreak');
            setLoopCount(0);
        }
    }

    const timeType = (phase) => {
        switch(phase) {
            case 'pomodoro':
                setTime(10);
                break;
            case 'shortBreak':
                setTime(300);
                break;
            case 'longBreak':
                setTime(900);
                break;
            default:
                setTime(1500);
        }
        setIsRunning(false);
        setSelectedTime(phase);
    } 

    return (
        <div className="w-[400px] shadow-md p-6">
            <div className="w-full flex flex-col items-center justify-center gap-6">
                <div className="inline-flex gap-4">
                    <Button onClick={() => timeType('pomodoro')} >Pomodoro</Button>
                    <Button onClick={() => timeType('shortBreak')} >Short Break</Button>
                    <Button onClick={() => timeType('longBreak')} >Long Break</Button>
                </div>
                <div>
                    <h1 className="text-9xl font-medium">{FORMAT_TIME}</h1>
                </div>
                <div className="">
                    <Button className="py-6 px-16 text-xl"
                    onClick={runTimer}
                    >
                        START
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Timer;
