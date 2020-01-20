import React from "react";
import "./styles.css";
import HeartButton from "./components/HeartButton";

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <HeartButton
        count={count}
        incrementCount={() => setCount(count => count + 1)}
      />
    </div>
  );
}
