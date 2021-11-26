//Col1
import Inprogress from "./Inprogress"
import Inqueue from "./Inqueue"

export default function Col1(props){

    console.log(props.order);

    return <section id="col1">
        <Inprogress order={props.order} reload={props.reload}/>
        <Inqueue order={props.order.queue}/>
    </section>
}