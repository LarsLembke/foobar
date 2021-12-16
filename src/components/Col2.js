//Col2

import Kegs from "./Kegs";
import History from "./History";

export default function Col2(props){

    if(!props.data){
        return null;
    }

    return <section id="col2">
        <img src="foobar_logo.png" alt="foobar logo" className="foobar_logo_mobile" />
        <img src="foobar_logo.png" alt="foobar logo" className="foobar_logo" />
        <Kegs taps={props.data.taps}/>
        <History order={props.data.serving}/>
        <p style={{color: "white", fontSize: "3rem", transform: "translateY(-10vw)" }}><span style={{color: "grey"}}>.</span> . <span style={{color: "grey"}}>.</span></p>
    </section>
}   