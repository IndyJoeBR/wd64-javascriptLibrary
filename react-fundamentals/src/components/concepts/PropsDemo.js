import React, { useState } from 'react';
import PropTypes from 'prop-types';

// This will pass a string to FunctionalComponent
const PropsDemo = () => {

  const [ color, setColor ] = useState( 'white');
  const [ backgroundColor, setBackgroundColor ] = useState( 'purple');
  const [ borderRadius, setBorderRadius ] = useState( '5px');
  const [ borderStyle, setBorderStyle ] = useState( 'dashed');
  const [ display, setDisplay ] = useState( 'inline-block');
  const [ width, setWidth ] = useState( '350px');
  const [ textAlign, setTextAlign ] = useState( 'center');

  let styles = {
    color: color,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    borderStyle: borderStyle,
    display: display,
    width: width,
    textAlign: textAlign
  }

  const toggleColor = () => {
    color === "white" ? setColor("pink") : setColor("white")
  };

  const toggleBackgroundColor = () => {
    backgroundColor === "purple" ? setBackgroundColor("green") : setBackgroundColor("purple")
  };

  const toggleBorderRadius = () => {
    borderRadius === "5px" ? setBorderRadius("50px") : setBorderRadius("5px")
  };

  const toggleBorderStyle = () => {
    borderStyle === "dashed" ? setBorderStyle("solid") : setBorderStyle("dashed")
  };


  return (
    <div className="main">
      <div className="mainDiv">
        <div style={styles}>
          <FunctionalComponent string="Will this display?" 
                               function={toggleColor} 
                               buttonString="Toggle Color"
                               selectedStyle={color}
          />
          <FunctionalComponent string="Apparently so." 
                               function={toggleBackgroundColor}
                               buttonString="Toggle BackgroundColor"
                               selectedStyle={backgroundColor}
           />
          <FunctionalComponent string="Why are we doing this?" 
                               function={toggleBorderRadius}
                               buttonString="Toggle Border Radius"
                               selectedStyle={borderRadius}
           />
          <FunctionalComponent string="[shrugs]" 
                               function={toggleBorderStyle}
                               buttonString="Toggle Border Style"
                               selectedStyle={borderStyle}
           />
        </div>
      </div>
    </div>
  )
}


const FunctionalComponent = (props) => {

  return (
    <div>
      <p>{props.string}</p>
      <button onClick={props.function}> {props.buttonString} </button>
      <TinyComponent selectedStyle={ props.selectedStyle } />
    </div>
  )
}


const TinyComponent = (props) => {
  return (
    <div>
      <p>The current style is: {props.selectedStyle}</p>
    </div>
  )
};


FunctionalComponent.defaultProps = {
  string: "Not sure what went wrong!",
  function: () => console.log('Can I see this in my dev tools?'),
  selectedStyle: "What style?",
  buttonString: "Button is Cursed"
};

FunctionalComponent.propTypes = {
  string: PropTypes.string.isRequired,
  function: PropTypes.func.isRequired,
  selectedStyle: PropTypes.string.isRequired,
  buttonString: PropTypes.string.isRequired
};


export default PropsDemo;