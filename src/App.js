import { useState, useEffect } from "react";
import './index.scss';
import Col1 from "./components/Col1";
import Col2 from "./components/Col2";
import Col3 from "./components/Col3";

function App() {

  const [order, setOrder] = useState([]);

  // const [time, setTime] = useState(Date.now());


  useEffect(() => {

    const id = setInterval(() =>

    fetch("https://foobarspacemonkeys.herokuapp.com/")
    .then(res => res.json())
    .then(data => setOrder(data))
  , 5000)}, []);



// //useEffect(() => {
//   const interval = setInterval(() => setTime(Date.now()), 1000);
//   return () => {
//     clearInterval(interval);
//   };
// }, []);


  return (



    <div className="App">
      
      <img src="foobar_logo.png" alt="foobar logo" className="foobar_logo" />
      <div className="cols">
      <Col1 order={order} reload={setOrder}/>
      <Col2 data={order}/>
      <Col3 data={order}/>
      </div>
    </div>
  );
}


export default App;
