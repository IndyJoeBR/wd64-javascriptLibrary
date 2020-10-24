import React, { useState, useEffect, useRef } from 'react';

const StopWatchApp = () => {

  const startTimeRef = useRef(0);                       // initial time at start
  const [isRunning, setIsRunning] = useState(false);    // stopwatch is running t/f
  const [time, setTime] = useState(0);                  // resets stopwatch to 0
  const [laps, setLaps] = useState([]);                 // lap recorder

  useEffect( () => {
      if (isRunning) {
          const interval = setInterval(update, 10);

          return () => { clearInterval(interval) }
      }
  });

  const update = () => {
      const delta = Date.now() - startTimeRef.current;
      setTime(time + delta);
      startTimeRef.current = Date.now();
  }

  const start = () => {
      setIsRunning(true);
      startTimeRef.current = Date.now()
  }

  const stop = () => {
      setIsRunning(false);
  }

  const lap = () => {                 // on click of lap, calls method 
      setLaps([...laps, time]);       // saves time and spreads them out into the laps array
  }

  const reset = () => {
      setTime(0);
      setLaps([]);
  }


  // divides and rounds-down time by 1000 and then 60 to get minutes; divides and rounds down time by 1000 and gives the remainder
  return (
      <div>
          <p>
              {Math.floor((time / 1000) / 60).toString()} :&#160; 
              {Math.floor((time / 1000) % 60).toString()}
          </p>
          {isRunning ? <button onClick={stop}>Stop</button> : <button onClick={start}>Start</button>}
          {isRunning ? <button onClick={lap}>Lap</button> : <button onClick={reset}>Reset</button>}
          {laps.map(time => {
              return (
                  <p>
                     {Math.floor((time / 1000 ) / 60).toString()} :
                     {Math.floor((time / 1000) % 60).toString()}
                  </p>
              )
          })
          }
      </div>
  )
}

export default StopWatchApp;