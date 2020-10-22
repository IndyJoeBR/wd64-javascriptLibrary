import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import FatArrowIMage from '../../Assets/The-Fat-Arrow-Function-in-ES6-cover-image.jpg';
import RJSHelloWorld from '../../Assets/ReactJSHelloWorld.png';

const FunctionalComponentDemo = () => {

  let fatArrow = "=>";


  return (
    <div className="main">

      <div className="mainDiv">
        <h2>Functional Component</h2>
        <p>Functional Components are the primary tool in React to build
          a small, modular piece of your page.</p>
        <dl>
          <dt>Can use state</dt>
          <dd>With the 'useState' hook, functional components can now both
              render a display to the page and update the information to
              be shown.
          </dd>
          <dt>No 'this' keyword</dt>
          <dd>Older class components use 'this', functional components have
              no 'this' object.
          </dd>
          <dt>Can use effects</dt>
          <dd>With the 'useEffect' hook, functional components can perform
              side effect with any props or state changes
          </dd>
          <dt>return()</dt>
          <dd>Must return a single element, but this element may have nested
              elements inside.
          </dd>
        </dl>
        <h2>Functional Syntax versus Arrow Function</h2>
      </div>

      <hr/>

      <div>
        <h2>Challenge</h2>
        <p></p>
        <Card className="displayCard">
          <CardImg top width="400px" src={FatArrowIMage} alt="Card image cap" />
          <CardBody>
            <CardTitle>Fat Arrow Function</CardTitle>
            <CardSubtitle>A JS Library</CardSubtitle>
            <CardText>const HellowWorld = () {fatArrow} </CardText>
            <Button>Go Somewhere Man</Button>
          </CardBody>
        </Card>

        <Card className="displayCard">
          <CardImg top width="400px" src={RJSHelloWorld} alt="Card image cap" />
          <CardBody>
            <CardTitle>Regular Ol' Function</CardTitle>
            <CardSubtitle>A JS Library</CardSubtitle>
            <CardText>const HelloWorld = function() </CardText>
            <Button>Go Somewhere, yo</Button>
          </CardBody>
        </Card>
      </div>


    </div>
  );
};

export default FunctionalComponentDemo;