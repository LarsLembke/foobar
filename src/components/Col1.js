//Col1
import Inprogress from "./Inprogress"
import Inqueue from "./Inqueue"

export default function Col1(props){

    return <section id="col1">
        <img src="foobar_logo.png" alt="foobar logo" className="foobar_logo_mobile" />
        <Inprogress order={props.order.serving} bartender={props.order.bartenders}/>
        <Inqueue order={props.order.queue}/>
      <p style={{color: "white", fontSize: "3rem", transform: "translateY(-10vw)" }}>. <span style={{color: "grey"}}>. .</span></p>

    </section>
}