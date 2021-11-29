//History

import Order from "./Order";


export default function History(props){

    if(!props.order) {
        return null
    }

    // const url = 'https://etall-acc0.restdb.io/rest/foobarhistory'

    // const idMap = props.order.map((ord) => ord.id);
    // const currentOrders = props.order

    // console.log(idMap);
    // console.log(currentOrders);

    // saveOrders();

    // function saveOrders (param) {

    //     if (!param) {
    //         postData();

    //         console.log('param')
    //     } else {
    
    //         const idHistory = param.map((p) => p.id)
    
    //         console.log(idHistory, 'stored')
    
    //     }
    //     }



    // async function postData() {


    //     const coString = JSON.stringify(currentOrders);

    //     const response = await fetch(url, {
    //         method: "post",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "x-apikey": "61769dcc8597142da1745a44",
    //             "cache-control": "no-cache"
    //         },
    //         body: coString
    //     });
    //     const data = await response.json();
    //     console.log(data);
    //     getData();

    // }



    // async function getData() {

    //     const response = await fetch(url, {
    //         method: "get",
    //         headers: {

    //             Accept: "application/json",
    //             "Content-Type": "application/json",
    //             "x-apikey": "61769dcc8597142da1745a44"
    //         }
    //     });
    //     const data = await response.json();
    //     console.log(data);
        
    // }





    //get ids, get stored ids

    return <div id="history">
        <Order/>
    </div>
}