import { useState, useEffect } from "react";
import './index.scss';
import Col1 from "./components/Col1";
import Col2 from "./components/Col2";
import Col3 from "./components/Col3";

function App() {

  const [order, setOrder] = useState([]);
  const [history, setHistory] = useState([]);

  const url = 'https://etall-acc0.restdb.io/rest/foobarhistory'


  // const [time, setTime] = useState(Date.now());


  useEffect(() => {

    const interval = setInterval(() =>

    fetch("https://foobarspacemonkeys.herokuapp.com/")
    .then(res => res.json())
    .then(data => setOrder(data))
  , 5000)}, []);


    // useEffect(() => {
    //     fetch(url, {
    //       method: "post",
    //       headers: {
    //           "Content-Type": "application/json",
    //           "x-apikey": "61769dcc8597142da1745a44",
    //           "cache-control": "no-cache"
    //       }, body: stringOrd
    //     })

    //       .then((res) => res.json())
    //       .then((data) => {
    //         setHistory(data);
    //       });
    //   }, []);

    //   function stringOrd () {

    //   if (!order) {
    //     return [];

    //   }

    //   const currentOrders = order.serving.map((ord) => ord)
    //   const coString = JSON.stringify(currentOrders);

    //   return coString
      
    // }


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
