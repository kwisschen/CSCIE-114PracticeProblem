import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"; // Change to "import Solution from "./components/Solution" to view solution

ReactDOM.render(<App />, document.getElementById("root"));


// Part 1
// Given that we can fetch and log the current time using the snippet below:
//   let time = new Date().toLocaleTimeString();
//   console.log(time);
// you will update the code in the App component to show the latest time in the <h1> whenever the Get Time button is pressed.


// Part 2 (extra credit)
// 2. As an extra challenge, get the time in your <h1> to update every second, such as to mimic the function of a real clock!

// Hint: you can get code to be called every second using the setInterval method.