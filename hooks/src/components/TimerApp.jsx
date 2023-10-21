import React, { useState, useEffect } from "react";

function TimerApp() {
    const [timevalue, setTimeValue] = useState(0)
    useEffect(() => {
        let timer = setInterval(() => {
            setTimeValue(timevalue + 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    })
    return (
        <div>
            <h1>{showCurrentTime(timevalue)}</h1>
        </div>
    )
}
function showCurrentTime(timeNumber) {
    let hour = Math.floor(timeNumber / (60 * 60))
    timeNumber = timeNumber % (60 * 60)
    let minute = Math.floor(timeNumber / 60)
    timeNumber = timeNumber % 60
    return `${hour} : ${minute} : ${timeNumber}`
}
export default TimerApp