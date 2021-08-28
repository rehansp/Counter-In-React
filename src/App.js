import { Button } from "react-bootstrap";
import "./styles.css";
import { useState } from "react";

export default function App() {
  let [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button onClick={() => setCount(count - 1)}> - </Button>
      <input type="text" placeholder="counter" value={count} />
      <Button onClick={() => setCount(count + 1)}> + </Button>
    </div>
  );
}
