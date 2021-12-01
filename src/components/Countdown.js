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
        let hrs =  parseInt(closingTime.slice(0,2)) - today.getHours();
        let mts = parseInt(closingTime.slice(3,5)) - today.getMinutes() + 59;

        return (hrs * 60) + mts;

    }

    function timeToClose () {
        let ttHrs =  parseInt(closingTime.slice(0,2)) - today.getHours();
        let ttMts = parseInt(closingTime.slice(3,5)) - today.getMinutes() + 59;
        let ttScs = parseInt(closingTime.slice(6,8)) - today.getSeconds() + 59;

        ttMts = ttMts < 10 ? '0' + ttMts : ttMts;
        ttScs = ttScs < 10 ? '0' + ttScs : ttScs;


        return `${ttHrs}:${ttMts}:${ttScs}`;
    }


    return <div id="countdown">
        <Circletimer timeToClose={timeToClose()} checkTime={checkTime()}/>
    </div>
}