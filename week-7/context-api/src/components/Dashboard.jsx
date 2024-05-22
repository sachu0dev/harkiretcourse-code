import { useContext } from "react";
import { CountContext } from "../context";

const Dashboard = () => {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default Dashboard;
