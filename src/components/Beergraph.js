//Beergraph

export default function Beergraph(){

    const beers = localStorage.getItem('servedBeer').split(',').sort(sortBeers)

    function sortBeers (a,b) {
        if (a>b) {
            return 1
        }
        return -1
    }

    const elHefe = beers.filter(beer => beer === 'El Hefe').length
    const hollabackLager = beers.filter(beer => beer === 'Hollaback Lager').length
    const hoppilyEA = beers.filter(beer => beer === 'Hoppily Ever After').length
    const row26 = beers.filter(beer => beer === 'Row 26').length
    const steamPunk = beers.filter(beer => beer === 'Steampunk').length
    const fairyTA = beers.filter(beer => beer === 'Fairy Tale Ale').length
    const mowintime = beers.filter(beer => beer === 'Mowintime').length
    const ruinedChildhood = beers.filter(beer => beer === 'Ruined Childhood').length
    const sleighride = beers.filter(beer => beer === 'Sleighride').length


    return <figure id="beer_graph">
        <h2 className="distribution">DISTRIBUTION</h2>
        <p>El Hefe: {elHefe}</p>
        <p>Hollaback Lager: {hollabackLager}</p>
        <p>Hoppily Ever After: {hoppilyEA}</p>
        <p>Row 26: {row26}</p>
        <p>Steampunk: {steamPunk}</p>
        <p>Fairy Tale Ale: {fairyTA}</p>
        <p>Mowintime: {mowintime}</p>
        <p>Ruined Childhood: {ruinedChildhood}</p>
        <p>Sleighride: {sleighride}</p>
        
    </figure>
}