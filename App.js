import logo from "./logo.svg";
import "./App.css";
import GuguUsingForLoop from "./components/guguUsingForLoop";
import GuguUsingMap from "./components/guguUsingMap";

function App() {
  return (
    <div className="App">
      {/* <GuguUsingForLoop /> */}
      <GuguUsingMap 사용이름은내마음대로="전달할데이터" 사용2="데이터2" />
      <GuguUsingMap 사용이름은내마음대로="복사한놈1" 사용2="복사한놈2" />
    </div>
  );
}

export default App;
