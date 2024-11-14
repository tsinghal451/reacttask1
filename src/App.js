import React, { useState } from "react";
import "./App.css";
function App() {
  const [currentTask, setCurrentTask] = useState(null);

  // State for Task 1
  const [showElement, setShowElement] = useState(true);
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [inputText, setInputText] = useState("");
  const [components, setComponents] = useState([]);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  // State for Task 2
  const [counter, setCounter] = useState(0);

  // State for Task 3
  const records = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecords = records.filter((record) =>
    record.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>React Basic Tasks</h1>
      <button onClick={() => setCurrentTask("task1")}>Task 1</button>
      <button onClick={() => setCurrentTask("task2")}>Task 2</button>
      <button onClick={() => setCurrentTask("task3")}>Task 3</button>

      {currentTask === "task1" && (
        <div>
          <h2>Task 1: Small Programming Learning Tasks</h2>

          {/* Display simple JSX */}
          <div>
            <h3>Display simple JSX</h3>
            <p>Hello, World!</p>
          </div>

          {/* Display an array of records */}
          <div>
            <h3>Display an array of records on screen</h3>
            <ul>
              {records.map((record, index) => (
                <li key={index}>{record}</li>
              ))}
            </ul>
          </div>

          {/* Show/Hide Element on Screen */}
          <div>
            <h3>Show/Hide Element on Screen</h3>
            <button onClick={() => setShowElement(!showElement)}>
              {showElement ? "Hide" : "Show"} Element
            </button>
            {showElement && <p>This is a toggleable element.</p>}
          </div>

          {/* Enable/Disable a button */}
          <div>
            <h3>Enable/Disable a button</h3>
            <button onClick={() => setButtonEnabled(!buttonEnabled)}>
              {buttonEnabled ? "Disable" : "Enable"} Button
            </button>
            <button disabled={!buttonEnabled}>Click Me</button>
          </div>

          {/* 2-way data binding using textbox */}
          <div>
            <h3>2-way data binding using textbox</h3>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <p>Text: {inputText}</p>
          </div>

          {/* Dynamically add child components */}
          <div>
            <h3>Dynamically add child components</h3>
            <button
              onClick={() => setComponents([...components, "New Component"])}
            >
              Add Component
            </button>
            {components.map((comp, index) => (
              <p key={index}>{comp}</p>
            ))}
          </div>

          {/* Do Sum of Two Numbers */}
          <div>
            <h3>Do Sum of Two Numbers</h3>
            <input
              type="number"
              onChange={(e) => setNum1(+e.target.value)}
              placeholder="Enter first number"
            />
            <input
              type="number"
              onChange={(e) => setNum2(+e.target.value)}
              placeholder="Enter second number"
            />
            <p>Sum: {num1 + num2}</p>
          </div>
        </div>
      )}

      {currentTask === "task2" && (
        <div>
          <h2>Task 2: Create a Counter</h2>
          <button onClick={() => setCounter(counter + 1)}>Increase</button>
          <button onClick={() => setCounter(counter - 1)}>Decrease</button>
          <p>Counter: {counter}</p>
        </div>
      )}

      {currentTask === "task3" && (
        <div>
          <h2>Task 3: Build Search Filter</h2>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ul>
            {filteredRecords.map((record, index) => (
              <li key={index}>{record}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
