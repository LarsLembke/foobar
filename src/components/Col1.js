//Col1
import Inprogress from "./Inprogress"
import Inqueue from "./Inqueue"

export default function Col1(props){

    // console.log(props.order.bartenders);

    return <section id="col1">
        <img src="foobar_logo.png" alt="foobar logo" className="foobar_logo_mobile" />
        <Inprogress order={props.order.serving} reload={props.reload} bartender={props.order.bartenders}/>
        <Inqueue order={props.order.queue}/>
    </section>
}