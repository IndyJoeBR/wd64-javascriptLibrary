import React from 'react';

const NytResults = (props) => {   // props will pass our results from the parent component

  // in the return .map is going to take each result and perform the same action on it
  return (
    <div>
      <div>

        { props.results.map(result => {

          return (
            <div key={result._id}>
            <h2>{result.headline.main}</h2>
            {result.multimedia.length > 1 ? <img alt="article" src={`http://www.nytimes.com/${result.multimedia[1].url}`} /> : ''}
            <p>
              {result.snippet}
              <br />
              {result.keywords.length > 0 ? ' Keywords: ' : ''}
            </p>
            <ul>
              {result.keywords.map(keyword => <li key={keyword.value}>{keyword.value}</li>)}
            </ul>
            <a href={result.web_url}><button>Read It</button></a>
          </div>
          )
        })}
          <div>
            <button onClick={(event) => props.changePageNumber(event, 'down')}>Previous 10</button>
            <button onClick={(event) => props.changePageNumber(event, 'up')}>Next 10</button>
          </div>
      </div>
    </div>
  )
}

//  unique keys are required when you create multiples of the same item (so when you use map). Luckily we have an id to use here.
//  We're taking the main headline and putting it in an h2 tag
//  We use another ternary here to check if there is a more than 1 (AKA at least 2) things in the multimedia property. If there is at least 2, we want to display the image in the 2nd place [1] because that is a "large" size and not the "xl" size of [0].
//  We put the snippet in a <p> tag
//  We have another ternary to check if there are keywords. If there are we display the string ' Keywords: '.
//  Then we use a list, and another map to put every keyword into a list item
//  Lastly, we make a link to the url of the article.

export default NytResults;