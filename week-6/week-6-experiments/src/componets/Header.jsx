import { useState } from "react";
export const Header = ({ title }) => {
  return (
    <div>
      <h1>Name or number: {title}</h1>
    </div>
  );
};

export const HeaderWithBtn = () => {
  const [randomNo, setRandomNo] = useState("sushil");
  function handelClick() {
    const no = Math.random();
    setRandomNo(no);
  }

  return (
    <>
      <button onClick={handelClick}>Click to change</button>
      <Header title={randomNo} />
    </>
  );
};
