import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"; // To preview solution, replace this line with "import Solution from "./components/Solution"...

ReactDOM.render(<App />, document.getElementById("root")); // ...and replace the '<App />' in this line with '<Solution />'


// React Hooks Practice Set

// Part 1
// Given that we can grab and log the current time in our locale with the following snippet:
//   let time = new Date().toLocaleTimeString();
//   console.log(time);
// you will update the code in "components/App.jsx" to display the latest time in the <h1> whenever the Get Time button is pressed.


// Part 2 (extra credit)
// 2. As an extra challenge, make the time in your <h1> update every second, such as to mimic the function of a real clock!

// Hint: you can get code to be called every second using the setInterval method.