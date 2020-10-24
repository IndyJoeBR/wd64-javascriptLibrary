import React, { useState } from 'react';
import NytResults from './NytResults';

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'AgRGQivYLCNUNJpdiHPKjkn0MP4PG1gG';                                 // original key straight from NYT gold badge

const NytApp = () => {
  const [ search, setSearch ] = useState('');
  const [ startDate, setStartDate ] = useState('');
  const [ endDate, setEndDate ] = useState('');
  const [ pageNumber, setPageNumber ] = useState(0);
  const [ results, setResults ] = useState([]); 

  const fetchResults = () => {
    let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${search}`;       // URL created as before
    url = startDate ? url + `&begin_date=${startDate}` : url;                   // ternary adds startDate to URL if there is a startDate
    url = endDate ? url + `&end_date=${endDate}` : url;                         // ternary adds endDate to URL if there is an endDate

    fetch(url)                                        // fetch defaults to GET and uses pre-constructed URL
      .then(response => response.json())              // JSONify the response from NYT
      .then(data => setResults(data.response.docs))   // that 'data' is saved to the results array state value
      .catch(err=> console.log(err));
  };

  const handleSubmit = (event) => {           // when the form is submitted, it creates a browser 'event'
    event.preventDefault();                   // refresh is suppressed
    setPageNumber(0);                         // page # is reset to zero with submit
    console.log("Search Submitted for: ", search);
    fetchResults();                           // the fetch method is triggered
  };


  const changePageNumber = (event, direction) => {   // direction tells us up or down
    event.preventDefault();                         // the event allows us to suppress the default refresh
    if(direction === 'down') {              // if the direction is down, 
      if(pageNumber > 0) {                  // check if the page is already 0
        setPageNumber(pageNumber - 1);      // if not, subtract 1
          fetchResults();                   // and re-run the fetch
        }
      }
 
  if(direction === 'up') {            // if the direction is up,
    setPageNumber(pageNumber + 1);    // we add 1
    fetchResults();                   // and re-run the fetch
    }
  };


  return (
 <div className="main">
   <div className="mainDiv">
     <form onSubmit={(event) => handleSubmit(event)}>
       <span>Enter a single search term (required) : </span>
       <input type="text" name="search" onChange={(event) => setSearch(event.target.value)} required />
       <br />
       <span>Enter a start date: </span>
       <input type="date" name="startDate" pattern="[0-9]{8}" onChange={(event) => setStartDate(event.target.value)} />
       <br />
       <span>Enter an end date: </span>
       <input type="date" name="endDate" pattern="[0-9]{8}" onChange={(event) => setEndDate(event.target.value)} />
       <br />
       <button className="submit">Submit search</button>
     </form>
     {
       results.length > 0 ? <NytResults results={ results } changePage={ changePageNumber } /> : null 
     }
    </div>
  </div>
 );

      // the closing ternary looks at the results length, if it is 0, it displays nothing, if it is >0 it calls the NytResults component, passing it 'results' and 'changePage' as props 

};

export default NytApp;
