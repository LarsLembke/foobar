import logo from './logo.svg';
import { useState, useEffect } from "react";
import './index.scss';
import Col1 from "./components/Col1";
import Col2 from "./components/Col2";
import Col3 from "./components/Col3";

function App() {

  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("https://foobarspacemonkeys.herokuapp.com/")
    .then(res => res.json())
    .then(data => setOrder(data));
  }, []);



  return (



    <div className="App">
      <h1>FOOBAR</h1>
      <img scr="foobar_logo.png"/>
      <Col1 order={order}/>
      <Col2 />
      <Col3 />

    </div>
  );
}

export default App;
