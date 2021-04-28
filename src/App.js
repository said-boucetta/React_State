import { useState } from "react";
function App() {
  const [counter, setConter] = useState(0);
  const [counter2, setConter2] = useState(0);
  const inc = () => {
    setConter(counter + 1); // counter = counter + 1
  };
  const dec = () => {
    setConter(counter - 1); // counter = counter - 1
  };
  return (
    <div>
      <p>counter : {counter}</p>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <p>counter2 : {counter2}</p>
      <button onClick={() => setConter2(counter2 + 2)}>+</button>
      <button onClick={() => setConter2(counter2 - 2)}>-</button>
    </div>
  );
}
export default App;
