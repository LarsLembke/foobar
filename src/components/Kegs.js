//Kegs

import Keg from "./Keg";

export default function Kegs(props){

    if(!props.taps) {
        return null;
    }

    const mapped = props.taps.map((tap) => <Keg level={tap.level}  capacity={tap.capacity} />);
    const storageMap = props.storage.map((sto) => <p>{sto.amount}</p>);



    return <section id="kegs">
        {mapped}
        {storageMap}
    </section>
}