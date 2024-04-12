import React, { useState } from "react";

function App() {
  // Part 1 solution
  const currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime); // Destructuring for useState hook

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  // Part 2 solution
  setInterval(updateTime, 1000); // Call updateTime every 1000 milliseconds

  return (
    <div className="container">
      <h1>{ time }</h1>
      <button onClick={ updateTime }>Get Time</button>
    </div>
  );
}

export default App;
