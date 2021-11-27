//Sales

import Beeramount from "./Beeramount";
import Beergraph from "./Beergraph";

export default function Sales(props){

    if(!props.data.serving) {
        return null
    }




    // function getBeers() {

    //     const beerBeerBeer = [];

    //     const eachOrder = []

    //     console.log(props.data.serving, 'sales')

    //     const orderMap = props.data.serving.map((ord) => eachOrder.concat(ord.order));
    //     const beerMap = orderMap.map((beers) => beers.map((beer) => beerBeerBeer.concat(beer)));
    
    //     // console.log(servedBeer)
    
    //     console.log(orderMap, 'orderMap')
    //     console.log(beerMap, 'beerMap')
    //     console.log(beerMap.toString(","), 'servedBeer')
    //     console.log(beerMap.toString(",").split(","), 'servedBeer')
    
    //     const servedBeer = beerMap.toString(",").split(",")

    // }

    // function getOrderId() {}

    // function saveBeers() {

    //     if(!localStorage.getItem(servedBeer)) {

    //         localStorage.setItem(servedBeer, servedBeer);
        
        
    //         } else {
        
    //             const savedBeer = localStorage.getItem(servedBeer).split(',');
        
    //             const beerUpdate = servedBeer.concat(savedBeer)
            
    //             console.log(beerUpdate)
                
    //         }
        
        
        
    //     console.log(localStorage.getItem(servedBeer).split(","), 'storage')

    // }

 

    

    return <div id="sales">
        <Beeramount />
        <Beergraph/>
    </div>
}