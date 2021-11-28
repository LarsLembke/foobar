//Beergraph

export default function Beergraph(){

    const beers = localStorage.getItem('servedBeer').split(',').sort(sortBeers)

    function sortBeers (a,b) {
        if (a>b) {
            return 1
        }
        return -1
    }


    // console.log(beers.filter(beer => beer === 'El Hefe').length, 'El Hefe')

    const elHefe = beers.filter(beer => beer === 'El Hefe').length
    const hollabackLager = beers.filter(beer => beer === 'Hollaback Lager').length
    const hoppilyEA = beers.filter(beer => beer === 'Hoppily Ever After').length
    const row26 = beers.filter(beer => beer === 'Row 26').length
    const steamPunk = beers.filter(beer => beer === 'Steampunk').length
    // const elHeffe = beers.filter(beer => beer === 'El Hefe').length


    return <figure id="beer_graph">
        <p>El Hefe: {elHefe}</p>
        <p>Hollaback Lager: {hollabackLager}</p>
        <p>Hoppily Ever After: {hoppilyEA}</p>
        <p>Row 26: {row26}</p>
        <p>Steampunk: {steamPunk}</p>
        <p></p>
        <p></p>

    </figure>
}