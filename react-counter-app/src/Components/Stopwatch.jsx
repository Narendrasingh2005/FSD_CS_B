import React, { useEffect, useState } from 'react'
import { useState } from 'react'

const Stopwatch = () => {
    const [isrunning,setIsrunning]=useState(false)
    const [time,setTime]=useState(0)
    function handleStartStop(){
        setIsrunning((p)=>!p)
    }
    function handleReset{
        setTime(0);
        clearInterval()
    }
    useEffect(()=>{
        if (isrunning) {
            const id=setInterval(()=>{
                setTime((p)=>p+1)
            },1000)
            setValidId(id);
        }
        return ()=>clearInterval(setValidId)
    },[isrunning])
return (
    <div>
    <h1>stop watch App</h1>
    <h1>Timer</h1>
    <button onClick={handleStartStop}>{isrunning?'Stop':'Start'}</button>
    <button onClick={handleReset}>Reset</button>
    </div>
)
}

export default Stopwatch