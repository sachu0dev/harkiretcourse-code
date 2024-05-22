import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Landing from "./components/Landing";
import { CountContext } from "./context";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <CountContext.Provider value={{ count, setCount }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </CountContext.Provider>
    </>
  );
}

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
      <button onClick={() => navigate("/")}>Landing</button>
    </div>
  );
};

export default App;
