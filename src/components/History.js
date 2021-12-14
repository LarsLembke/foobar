//History

import Order from "./Order";


export default function History(props){

    if(!props.order) {
        return null
    }

    const idMap = props.order.map((ord) => ord.id);
    const currentOrders = props.order


    let map4Orders = '';

    saveOrders(map4Orders);
    

    function saveOrders () {

        currentOrders.map((lOrd) => localStorage.setItem(lOrd.id, lOrd.order))



        if (!localStorage.orderIds) {

            localStorage.setItem('orderIds', idMap);

        } else {

        const savedIds = localStorage.getItem('orderIds').split(',');

        idMap.map((ns) => {
            const stringNS = ns.toString()
            if (savedIds.includes(stringNS)){
             
            } else {


                localStorage.setItem('orderIds', savedIds.concat(ns))
            }
            
        });


        }

        const localOrder4Map = localStorage.getItem('orderIds').split(',')
        const toNumber = localOrder4Map.map((a) => parseInt(a)) 
        

        const localOrder4MapSort = toNumber.sort(sortOrders)

        function sortOrders (a,b) {
            if (a<b) {
                return 1
            }
            return -1
        }

        map4Orders = localOrder4MapSort.map((lo4m) => {

            if (!idMap.includes(lo4m)) {

            const order4 = localStorage.getItem(lo4m).split(',');
            const lo4mNO = parseInt(lo4m)

            return<Order no={lo4mNO} order={order4}/>
               
            
            }
        })

        return map4Orders;
    
    }



    return <div id="history">
        <h2 className="order_history">ORDER HISTORY</h2>
        {map4Orders}
        
    </div>
}