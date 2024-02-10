import React from "react";
import { useState, useEffect } from "react";

const Timer = ({ hours = 0, minutes = 0, seconds = 0}) => {
    const [pause, setPause] = useState(false);
    const [over, setOver] = useState(false);
    const [[h, m, s], setTime] = useState([hours, minutes, seconds]);

    const tick = () => {
        if (pause || over) {
            return;
        }

        if (h === 0 && m === 0 && s === 0) {
            setOver(true);
        } else if (m === 0 && s === 0) {
            setTime(prev => [prev[0] - 1, 59, 59]);
        } else if (s === 0) {
            setTime(prev => [prev[0], prev[1] - 1, 59]);
        } else {
            setTime(prev => [prev[0], prev[1], prev[2] - 1]);
        }
    }

    const reset = () => {
        setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
        setPause(false);
        setOver(false);
    }

    useEffect(() => {
        let timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    })
    return (
        <div>
            <p>
                <strong>
                {
                `${h.toString().padStart(2, 0)} : 
                ${m.toString().padStart(2, 0)} :
                ${s.toString().padStart(2,0)}`
                }
                </strong>
            </p>
            <h2>{ over && "Time's UP!" }</h2>
            <p>
                <button onClick={() => setPause(prev => !prev)}>
                    { pause ? 'Resume' : 'Pause' }
                </button>
                <button onClick={() => reset()}>Restart</button>
            </p>
        </div>
    )
}

export default Timer;