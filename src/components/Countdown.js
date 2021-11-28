//Countdown

import Circletimer from "./Circletimer";
import Numbertimer from "./Numbertimer";


export default function Countdown(props){

    if(!props.bar) {
        return null;
    }

    // console.log(props.bar)

    const closingTime = props.bar.closingTime
    const today = new Date()

    // console.log(closingTime.slice(6,8))
    // console.log(timeToClose());


    function checkTime () {
        if (today.getHours() <= parseInt(closingTime.slice(0,2)) || today.getHours() > 13){
            return "open"
        }
        return "closed"
    }

    function timeToClose () {
        const ttHrs =  parseInt(closingTime.slice(0,2)) - today.getHours()
        const ttMts = parseInt(closingTime.slice(3,5)) - today.getMinutes() + 59;
        const ttScs = parseInt(closingTime.slice(6,8)) - today.getSeconds() + 59;

        return `${ttHrs}:${ttMts}:${ttScs}`
    }


    return <div id="countdown">
        <Circletimer/>
        <Numbertimer timeToClose={timeToClose()} checkTime={checkTime()}/>
    </div>
}