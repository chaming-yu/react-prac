import logo from "./logo.svg";
import "./App.css";

function App() {
  for (let i = 2; i <= 9; i++) {
    console.log(`${i}단`);
    if (i === 4) {
      console.log("4단은 출력안해요.");
      continue;
    }
    for (let j = 1; j <= 9; j++) {
      console.log(`${i} X ${j} = ${i * j}`);
    }
  }

  return <div className="App">테스트</div>;
}

export default App;
