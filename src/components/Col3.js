//Col3
import Countdown from "./Countdown";
import Sales from "./Sales";

export default function Col3(props){

    if(!props.data){
        return null;
    }

    return <section id="col3">
        <Countdown bar={props.data.bar}/>
        <Sales/>
    </section>
}