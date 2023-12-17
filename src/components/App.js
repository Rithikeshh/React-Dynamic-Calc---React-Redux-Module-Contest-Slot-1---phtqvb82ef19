import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
  const [valu1, setValue1] = useState('');
  const [valu2, setValue2] = useState('');
  const [result, setResult] = useState(0);
  useEffect(()=>{
    setResult(parseInt(value1)+parseInt(value2)}
  },[value1,value2])
  return (
    <div id="main">
      <input id='input1' value={value2} onChange={(e)=>{
    setValue1(e.target.value)
      }}/>
       +
      <input id='input2' value={value2} onChange={(e)=>{
    setValue2(e.target.value)
      }}/> 
      
      <p id='result'></p>
    </div>
  )
}


export default App;
