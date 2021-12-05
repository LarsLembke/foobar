//Inprogress

import Order from "./Order";


export default function Inprogress(props){
  
    if(!props.order ) {
      return null;
    }

 

    const mapped = props.order.map((ord) => {

      // const barT = props.bartender.filter(b => b.servingCustomer === ord.id)

      // return <Order no={ord.id} order={ord.order} bartender={barT}/>
      return <Order no={ord.id} order={ord.order}/>
  });

    return <div id="in_progress">

      <h2>IN PROGRESS</h2>
        {mapped}

    </div>
}