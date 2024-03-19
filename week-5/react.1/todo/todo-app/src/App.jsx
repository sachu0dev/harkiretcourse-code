import { useState } from "react";
import "./App.css";

function App() {
  const 
  const [count, setCount] = useState(0);
  return (
    <>
      <CustomButton count={count} setCount={setCount} />
    </>
  );
}
const CustomButton = (props) => {
  function onClickHandler() {
    props.setCount(props.count + 1);
  }
  return <button onClick={onClickHandler}>Counter {props.count}</button>;
};

export default App;
