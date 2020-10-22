import React, {useState} from 'react';

const State = () => {

  return(
    <div className="main">
      <div className="mainDiv">
        <dl>
          <dt>useState is Unique to Functional Components</dt>
          <dd>Class components have a separate means of using and changing state</dd>
          <dt>useState Uses Array Destructuring</dt>
          <dd>useState proves a state variable and a setState function</dd>
          <dt>useState is a Hook</dt>
          <dd>useState is a hook backed into React</dd>
          <dt>Triggers re-renders</dt>
          <dd>Like with proprs, changing the state of a component re-renders the whole component</dd>
        </dl>

        <StateExample />

      </div>
    </div>
  );
};


function StateExample() {
  const [text, setText] = useState('initial value');
  const [likeNum, setLikeNum] = useState(0);
  const [textColor, setTextColor] = useState('blue');

  return (
    <div>
      <input value={text} onChange={event => setText(event.target.value)} />
      <br />
      <img
        style={{ width: '50px', height: '50px', margin: '20px'}}
        src="https://upload.wikimedia.org/wikipedia/commons/1/13/Facebook_like_thumb.png" alt="a thumbs up"
        onClick={event => setLikeNum(likeNum +1)}
      />
      <span>{likeNum}</span>
      <br />
      <br />
      <p
        style={{ color: textColor }}
        onMouseEnter={event => setTextColor('red')}
        onMouseLeave={event => setTextColor('blue')}
      >This text should be able to change colors</p>
    </div>
  );
};



export default State;
