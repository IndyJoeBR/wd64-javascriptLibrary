import React, {useState, useEffect} from 'react';

// This si going to display, essentially, a digital clock

const getTimeString = () => {
    const date = new Date(Date.now()).toLocaleTimeString();   // gets the current time 
    return date;
}

const ClockApp = () => {
    const [time, setTime] = useState(getTimeString());        // intial value is the current time

    useEffect(() => {                                         
        const interval = setInterval(() => {                  // changes time every second
            
            let date = getTimeString();

            setTime(date);
        }, 1000)

        return () => clearInterval(interval);                 // stops 'interval' until time changes again
    }, [])

    return (
        <div>
            <h1 className="section-title">React Clock</h1>
            <hr className="explanation" />
            <h3>Indianapolis: {time}</h3>
        </div>
    )
}

export default ClockApp;