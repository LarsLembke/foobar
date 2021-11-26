//Kegs

export default function Kegs(props){
    return <article className="keg">
        <figure></figure>
        <figcaption></figcaption>
        <p>{props.level} : {props.capacity}</p>
    </article>
}