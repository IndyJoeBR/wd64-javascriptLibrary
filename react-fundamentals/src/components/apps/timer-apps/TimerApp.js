import React, {useState, useEffect} from 'react';

const TimerApp = () => {
    const [secondsElapsed, setSecondsElapsed] = useState(0);


    useEffect(() => {
        let interval = setInterval(() => tick(), 1000);   // setInterval triggers tick() every 1000ms (1 second)
        return () => clearInterval(interval);
    })
   

    const tick = () => setSecondsElapsed(secondsElapsed + 1);


    // this will changed the displayed state, being updated every second (1000ms)
    return (
        <div>
            <h1 className="section-title">React Timer</h1>
            <div>Seconds Elapsed: {secondsElapsed}</div>
        </div>
    )
}

export default TimerApp;