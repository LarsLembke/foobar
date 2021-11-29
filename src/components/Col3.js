//Col3
import Countdown from "./Countdown";

import Beeramount from "./Beeramount";
import Beergraph from "./Beergraph";

export default function Col3(props){

    if(!props.data){
        return null;
    }

    if(!props.data.serving) {
        return null
    }



    getOrderId();


    function getOrderId() {

        const idMap = props.data.serving.map((ord) => ord.id)

        const smallestId = idMap[0]

        const latestId = idMap[idMap.length - 1]

        //console.log(smallestId, latestId)

        if (!localStorage.id) {
            localStorage.setItem('id', latestId)

            getBeers();
        } else {
            const currentId = localStorage.getItem('id')

            // console.log(currentId, smallestId)

            if(currentId < smallestId) {
                localStorage.setItem('id', latestId)
                getBeers();

            }
        }

    }



    function getBeers() {
        const beerBeerBeer = [];

        const eachOrder = []

        const orderMap = props.data.serving.map((ord) => eachOrder.concat(ord.order));
        const beerMap = orderMap.map((beers) => beers.map((beer) => beerBeerBeer.concat(beer)));

        const servedBeer = beerMap.toString(",").split(",")

        saveBeers(servedBeer);

    }


    function saveBeers(param) {

        const servedBeer = param

        if(!localStorage.getItem('servedBeer')) {

            localStorage.setItem('servedBeer', servedBeer);
        
        
            } else {
        
                const savedBeer = localStorage.getItem('servedBeer').split(',');
        
                const beerUpdate = servedBeer.concat(savedBeer)

                localStorage.setItem('servedBeer', beerUpdate)
                
            }
      
    //  console.log(localStorage.getItem('servedBeer').split(","), 'storage')

    }

    return <section id="col3">
        <Countdown bar={props.data.bar}/>
        <Beeramount />
        <Beergraph/>
    </section>
}