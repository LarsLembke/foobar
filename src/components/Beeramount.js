//Beeramount

export default function Beeramount(){

    const beerAmount = localStorage.getItem('servedBeer').split(',').length

    return <figure id="beer_amount">
      
        <p>{beerAmount} BEERS SOLD</p>
     
    </figure>
}