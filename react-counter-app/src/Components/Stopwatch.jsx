import React, { useEffect, useState } from "react";

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    function handleStartStop() {
        setIsRunning((prev) => !prev);
    }

    function handleReset() {
        setTime(0);
        clearInterval(intervalId);
        setIsRunning(false);
    }

    useEffect(() => {
        if (isRunning) {
            const id = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
            setIntervalId(id);
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [isRunning, intervalId]);

    function formatTime(time) {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        const h = hours < 10 ? `0${hours}` : hours;
        const m = minutes < 10 ? `0${minutes}` : minutes;
        const s = seconds < 10 ? `0${seconds}` : seconds;
        return `${h}:${m}:${s}`;
    }

    return (
        <div>
            <h1>Stopwatch App</h1>
            <h2>Timer: {formatTime(time)}</h2>
            <button onClick={handleStartStop}>
                {isRunning ? "Stop" : "Start"}
            </button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Stopwatch;
