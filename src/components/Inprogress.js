//Inprogress

import Order from "./Order";


export default function Inprogress(props){
  
    if(!props.order) {
      return null;
    }

    const mapped = props.order.map((ord) => <Order no={ord.id} order={ord.order}/>);

    return <div id="in_progress">

      <h3>I GANG</h3>
        {mapped}

    </div>
}