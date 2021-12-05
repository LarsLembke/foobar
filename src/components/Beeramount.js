//Beeramount

export default function Beeramount(){

    const beerAmount = localStorage.getItem('servedBeer').split(',').length

    return <figure id="beer_amount">
        <div className="inner_border">
        <p>{beerAmount} BEERS SOLD</p>
        </div>
    </figure>
}