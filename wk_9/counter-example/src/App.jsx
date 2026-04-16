import { useState, useRef } from 'react'

import './App.css'

function App() {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);

  const handleClick = () => {
    refCount.current += 1;
    setStateCount((c) => c + 1);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>useState vs useRef</h2>

      <p>State Count (re-renders): {stateCount}</p>
      <p>Ref Count (no re-render): {refCount.current}</p>

      <button onClick={handleClick}>Increment</button>
    </div>
  );

  // Implementation 2
  // const [stateCount, setStateCount] = useState(0);
  // const refCount = useRef(0);

  // return (
  //   <div style={{ padding: 20 }}>
  //     <p>State: {stateCount}</p>
  //     <p>Ref: {refCount.current}</p>

  //     <button onClick={() => setStateCount(c => c + 1)}>
  //       Increment State
  //     </button>

  //     <button onClick={() => {
  //       refCount.current += 1;
  //       console.log("Ref:", refCount.current);
  //     }}>
  //       Increment Ref
  //     </button>
  //   </div>
  // );
}

export default App
