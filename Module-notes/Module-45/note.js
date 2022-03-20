// Reacts 6 core concepts 

// JSX ( Javascript XML )
/*
JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.
JSX stands for JavaScript syntax extension. It is a JavaScript extension that allows us to describe React's object tree using a syntax that resembles that of an HTML template. It is just an XML-like extension that allows us to write JavaScript that looks like markup and have it returned from a component

https://reactjs.org/docs/jsx-in-depth.html

JSX =>
    - allows us to wire HTML in React.
    - makes it easier to write and add HTML in React
    
    - JSX helps us in keeping our code simpler and elegant when writing large pieces of code.

    - most developer find it helpful as a visual aid when working with UI inside the JavaScript code

    - JSX also allows React to show more useful error and warning messages.

    - If programming language (XML) one is familiar with HTML, it is quite easy to use JSX when building React application

    - Faster than normal JavaScript as it performs optimizations while translating to regular JavaScript.

JSX conditions =>
    - Adjacent JSx elements must be wrapped in an enclosing tag 
*/

/* Components:-

Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. 
We have to pass the data we want like an html code (nearly) but the react component will give us the data like a parameter.

Ex:-

function Person(props) {

  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}

*/

