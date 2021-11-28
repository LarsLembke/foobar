//History

import Order from "./Order";


export default function History(props){

    if(!props.order) {
        return null
    }

    console.log(props.order);

    //get ids, get stored ids

    return <div id="history">
        <Order/>
    </div>
}