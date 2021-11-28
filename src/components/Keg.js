//Kegs

export default function Kegs(props){
    return <article className="keg">
        <figure className="niveauindikator">
        <img src='niveauindikator.png'/>
        </figure>
        <figcaption></figcaption>
        <p>{props.level} : {props.capacity}</p>
    </article>
}