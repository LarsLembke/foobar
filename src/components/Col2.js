//Col2

import Kegs from "./Kegs";
import History from "./History";

export default function Col2(props){

    if(!props.data){
        return null;
    }

    return <section id="col2">
        <Kegs taps={props.data.taps} storage={props.data.storage}/>
        <History order={props.data.serving}/>
    </section>
}