import React from 'react'
import {useState,useEffect} from 'react'
const Stopwatch = () => {
const [isrunning,setIsrunning]=useState(false)
const [time,setTime]=useState(0);
const [validid,setValidid]=useState(null)
function handleStartStop(){
    setIsrunning((p)=>!p)
    clearInterval(validid)
}
function handleReset(){
    setTime(0);
    clearInterval(validid)
}
useEffect(()=>{
    if(isrunning){
    const id=setInterval(()=>{
        setTime((time)=>(time+1))
    },1000)
    setValidid(id);
}
return ()=>clearInterval(validid)
},[isrunning])
function formattime(time){
    const hours=Math.floor(time/3600);
    const h=hours<10?('0'+hours):hours;
    const minutes=Math.floor((time%3600)/60);
    const m=minutes<10?('0'+minutes):minutes;
    const seconds=time%60;
    const s=seconds<10?('0'+seconds):seconds;
    return `${h}:${m}:${s}`
}
return (
    <div>
    <h1>stop watch App</h1>
    <h1>{formattime(time)}</h1>
    <button onClick={handleStartStop}>{isrunning?'Stop':'Start'}</button>
    <button onClick={handleReset}>Reset</button>
    </div>
)
}

export default Stopwatch