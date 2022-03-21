// Importing in react

/* 
Importing is an operation that requires the permission of the module. Importing is possible only if the module or named property to be imported has been exported in its declaration. In React we use the keyword export to export a particular module or a named parameter or a combination. 
*/

// Exporting in react

/*
Default export is used to export a single class, primitive, or function from a module. There are different ways to use default export . Usually, the default export is written after the function, like the example below.
*/

// Importing and Exporting example:

/* 

import './App.css'; <-- Importing the css of app function

import data from './data/data';


function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App; <-- Exporting app as the default function

if we want to import the 'data' in the App.js file we have to export the data from the data.jsx at first to get the return value of 'data'  

*/

// Relative path 

/* 

import './App.css'; <-- './App.css' means

the path name or the location of the App.css file

*/

// Exporting multiple function from another file  

/* 
function something(){...} 
function something2(){...}

export{something,something2}

*/






