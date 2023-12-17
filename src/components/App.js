import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [result, setResult] = useState(0);
  useEffect(() => {
    setResult((prev) => {
      const num1 = isNaN(value1) ? 0 : +value1;
      const num2 = isNaN(value2) ? 0 : +value2;
      return num1 + num2;
    });
  }, [value1, value2]);
  return (
    <div id="main">
      <input
        id="input1"
        value={value1}
        onChange={(e) => {
          setValue1(e.target.value);
        }}
      />
      +
      <input
        id="input2"
        value={value2}
        onChange={(e) => {
          setValue2(e.target.value);
        }}
      />
      <p id="result">{result}</p>
    </div>
  );
}


export default App;
