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
        <Kegs taps={props.data.taps} storage={props.data.storage}/>
        <History order={props.data.serving}/>
    </section>
}