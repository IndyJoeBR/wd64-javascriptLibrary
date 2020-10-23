import React, { useState, useEffect } from 'react';

const Hooks = () => {
 const [query, setQuery] = useState('');
 const [results, setResults] = useState({});

 const fetcher = () => {
  fetch(`https://swapi.co/api/people/${query}`)     // Search the Star Wars AP
   .then(response => response.json())                         // when complete, response data is jsonified
   .then(json => {                                  // when complete, the jsonified response
    console.log(json)                               // is logged
    setResults(json);                               // and stored in the 'results' state variable
   })
 }

 return (
  <div className="main">
   <div className="mainDiv">
    <input value={query} onChange={event => setQuery(event.target.value)} placeholder="enter your star wars character number" />
    <button onClick={() => fetcher()}>Click for Character!</button>
    {results ? <h2>{results.name}</h2> : <div></div>}
   </div>
  </div>
 );
};


const Hooks2 = () => {
 const [results, queryNum, setQueryNum] = useNumHook('');
 const [clicks, setClicks] = useClicks(0);

 return(
  <div className="main">
   <div className="mainDiv">
    <h3>Enter a number below to see a number fact.</h3>
    <input value={queryNum} onChange={event => setQueryNum(event.target.value)} placeholder="enter a number" />
    {results ? <h2>{results}</h2> : <div></div>}
    <button onClick={() => setClicks(clicks + 1)}>Click to update document title</button>
   </div>
  </div>
 );
};

const useNumHook = (num) => {                     // actually a function that takes an parameter, the number of a character
 const [queryNum, setQueryNum] = useState(num);   // storing the character query number
 const [results, setResults] = useState('');      // providing a function to set the results

 useEffect(() => {                                // when queryNum changes
  if(queryNum !== ''){                            // checks to see if there is a nonempty string (is there a #), if so...
   fetch(`http://numbersapi.com/${queryNum}`)     // it queries the Star Wars API
    .then(response => response.text())                      // when complete, the response data is jsonified   ??????????
    .then(json => {                               // when complete, the jsonified reponse
     console.log(json);                           // is stored in the 'results' state variable
     setResults(json);                            // and logged
    });
  };
 }, [queryNum]);                                  // determines what will fire this useEffect

 return [results, queryNum, setQueryNum];
};

const useClicks = (initCount) => {
 const [clicks, setClicks] = useState(initCount);

 useEffect(() => {
  document.title = `You have clicked ${clicks} times`;
 }, [clicks])
 return [clicks, setClicks]
}

export default Hooks2;