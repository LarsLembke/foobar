//Inprogress

import Order from "./Order";
import { useState, useEffect } from "react";


export default function Inprogress(props){

    console.log(props)

    const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("https://foobarspacemonkeys.herokuapp.com/")
    .then(res => res.json())
    .then(data => setOrder(data.serving));
  }, []);

    

    const mapped = order.map((ord) => <Order no={ord.id} order={ord.order}/>);


    console.log(order)

    return <div id="in_progress">
        {mapped}

    </div>
}