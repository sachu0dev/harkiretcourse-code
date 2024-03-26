import { memo, useState } from "react";
function App() {
  const [randomNo, setRandomNo] = useState("sushil");
  function handelClick() {
    const no = Math.random();
    setRandomNo(no);
  }

  return (
    <>
      <button onClick={handelClick}>Click to change</button>
      <Header title={randomNo} />
      <Header title="second title" />
      <Header title="second title" />
      <Header title="second title" />
      <Header title="second title" />
      <Header title="second title" />
    </>
  );
}
const Header = memo(function Header({ title }) {
  console.log(title);
  return (
    <div>
      <h1>this is title : {title}</h1>
    </div>
  );
});

export default App;
