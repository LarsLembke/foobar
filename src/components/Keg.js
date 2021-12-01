//Kegs

export default function Kegs(props){
    return <article className="keg">
        <figure className="niveauindikator">
        <img src='niveauindikator.png'/>
        </figure>
        <figcaption></figcaption>
        <p>{props.beer}</p>
        <p>{props.level / 100}L : {props.capacity / 100}L</p>
    </article>
}