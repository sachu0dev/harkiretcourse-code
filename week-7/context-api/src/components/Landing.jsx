import { useContext } from "react";
import { CountContext } from "../context";

const Landing = () => {
  const { count } = useContext(CountContext);
  return (
    <div>
      <h1>Landing</h1>
      <h1>{count}</h1>
    </div>
  );
};

export default Landing;
