//Numbertimer

export default function Numbertimer(props){

    if (!props.timeToClose || !props.checkTime) {
        return null
    }


    return <figure id="number_timer">
        <p className="time_to_close">{props.timeToClose}</p>
        <p  className="open_closed">{props.checkTime}</p>
    </figure>
}