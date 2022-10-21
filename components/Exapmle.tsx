import { useState } from "react";

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [countR, setCountR] = useState(5);
  return (
    
    <>
      <p>You clicked {countR} times</p>
      <button onClick={() => setCountR(countR + 1)}>
        Click me
      </button>
    </>
  )
}


export default Example
