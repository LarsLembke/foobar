//Inqueue

import Order from "./Order";


export default function Inqueue(props){

    if(!props.order) {
      return null;
    }

    const mapped = props.order.map((ord) => <Order no={ord.id} order={ord.order}/>);

    return <div id="in_queue">
        <h2>QUEUE</h2>
        {mapped}
    </div>
}