//Order
import { useState, useEffect } from "react";


export default function Order(props){

    console.log(props)

    if(!props.order) {
        return null;
    }

    const beerOrder = props.order;

    const mapped = props.order.map((ord) => <li>{ord}</li>);

    function Beer(props) {
        return <li>{props.name}</li>;
    }

    return (<article className="order" key={props.no}>
        <p className="order_id" >{props.no}</p>
        <ul className="order_beer">{mapped}</ul>
    </article>)

    
}