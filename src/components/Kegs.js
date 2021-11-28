//Kegs

import Keg from "./Keg";

export default function Kegs(props){

    if(!props.taps || !props.storage) {
        return null;
    }

    const mapped = props.taps.map((tap) => <Keg level={tap.level}  capacity={tap.capacity} />);
    const storageMap = props.storage.map((sto) => <p>{sto.amount}</p>);



    return <section id="kegs">
        <h2 className="kegs_header">KEGS</h2>
        {mapped}
    </section>
}