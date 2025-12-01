import { useState } from "react";
import "./App.css";

function App() {
  const [counter, chaiCounter] = useState(0);
  

  const addValue = () => {
    if(counter >= 20) return
    chaiCounter(counter + 1);
    //if counter is asked to update multiple times in a single method like this 
    // chaiCounter(counter + 1);
    // chaiCounter(counter + 1);
    // chaiCounter(counter + 1);
    // it will only update once because react batches the state updates for performance reasons.
    // To handle such cases, we can use functional updates like this:
    // chaiCounter((prevCounter) => prevCounter + 1);
    // chaiCounter((prevCounter) => prevCounter + 1);
    // chaiCounter((prevCounter) => prevCounter + 1);
  }
  const removeValue = () => {
    if(counter <=0) return
    chaiCounter(counter - 1);
  }

  return (
    <div>
      <h1>Kd & Counter</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Increment</button>
      <button onClick={removeValue}>Decrement</button>
    </div>
  )
}

export default App
