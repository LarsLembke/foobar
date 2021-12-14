//Kegs

import Keg from "./Keg";

export default function Kegs(props){

    if(!props.taps) {
        return null;
    }

    const mapped = props.taps.map((tap) => <Keg level={tap.level}  capacity={tap.capacity} beer={tap.beer} />);

    return <section id="kegs">
        <h2 className="kegs_header">KEGS</h2>
        {mapped}
    </section>
}