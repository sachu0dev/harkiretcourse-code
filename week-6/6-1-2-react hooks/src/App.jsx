import { useEffect } from "react";
function App() {
  useEffect(() => {
    alert("hi there");
  }, []);
  return (
    <>
      <CardWrapper>
        <TextComponet />
      </CardWrapper>

      <CardWrapper>
        <TextComponet />
      </CardWrapper>
    </>
  );
}

const TextComponet = () => {
  return <div>hi there</div>;
};

const CardWrapper = ({ children }) => {
  return (
    <div className="shadow-inherit mb-4 border border-x-1  border-black p-4">
      {children}
    </div>
  );
};

export default App;
