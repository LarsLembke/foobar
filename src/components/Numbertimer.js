//Numbertimer

export default function Numbertimer(props){

    if (!props.timeToClose || !props.checkTime) {
        return null
    }


    return <figure id="number_timer">
        <p>{props.timeToClose}</p>
        <p>{props.checkTime}</p>
    </figure>
}