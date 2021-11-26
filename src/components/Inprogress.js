//Inprogress

import Order from "./Order";

export default function Inprogress(props){

    console.log(props.order)

    const inps = props.order

    const mapped = inps.map((inp) => <Order name={inp.order} id={props.id}/>);

    console.log(mapped)

    return <div id="in_progress">
        {mapped}
    </div>
}