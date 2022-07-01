/*import logo from './logo.svg';
import './App.css';*/
import React from 'react'
function App() {
  let colors = ['red', 'green', 'blue', 'yellow']
  let list = colors.map(c => <li>{c}</li>)      //แทรกค่าแบบ JSX
  //list = <li>red</li><li>green</li>...
  return <ul>{list}</ul>

  //หรือเรียกเมธอด map() ใน JSX โดยตรง
  /*
  return (
    <ul>
      {colors.map(c => <li>{c}</li>)}
    </ul>
  )
  */
}
export default App;
