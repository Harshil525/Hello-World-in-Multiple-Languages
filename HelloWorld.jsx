//This code is step by step process to print Hello World as a React.js application.

//Step 1 - To run this code, You need to have Node.js installed on your machine to use npm (Node Package Manager) or Yarn to manage packages.
//         Download and install Node.js from nodejs.org.
//Step 2 - Create a React project easily using create-react-app, which sets up everything for you.
//         In your terminal run this command - npx create-react-app hello-world-app. This command sets up a new React project with all the necessary configurations.
//Step 3 - Navigate to Project Directory (cd hello-world-app).
//Step 4 - Inside the src folder, create a new file HelloWorld.jsx

//HelloWorld.jsx
// Importing React library to use JSX and create components
import React from 'react';

// Creating a functional component called HelloWorld
function HelloWorld() {
  // The component returns JSX, which is a syntax extension for JavaScript
  // The <div> tag is a regular HTML element, and "Hello World" is the text we want to display
  return (
    <div>
      Hello World
    </div>
  );
}

// Exporting the component so it can be used in other parts of the app
export default HelloWorld;


//Step 5 - Then, in src/App.js, import and use your HelloWorld component:

//src/App.js
import React from 'react';
// Importing the HelloWorld component from the HelloWorld.js file
import HelloWorld from './HelloWorld';

function App() {
  return (
    <div>
       {/* Rendering the HelloWorld component */}
      <HelloWorld />
    </div>
  );
}

// Exporting the App component so it can be used in other parts of the app (like index.js)
export default App;

//Start the development server by running: npm start in your terminal.
