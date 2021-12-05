//Order



export default function Order(props){

    if(!props.order) {
        return null;
    }

    const beerArr = ["El Hefe", "Fairy Tale Ale", "GitHop", "Hollaback Lager", "Hoppily Ever After", "Mowintime", "Row 26", "Ruined Childhood", "Sleighride", "Steampunk"];

    const beerMapOrd = beerArr.map((b) => {
        
        if (props.order.includes(b)){

            const noB = props.order.filter(f => f === b).length;

            if (noB>1) {
                return <li>{noB} x {b}</li>
            }

            return <li>{b}</li>;
        }

        return;
        
    })

    const mapped = props.order.map((ord) => <li>{ord}</li>);

    const sortOrders = props.order.sort()
    // console.log(beerMapOrd)

    return (<article className="order" key={props.no}>
        <p className="order_id" >{props.no}</p>
        <ul className="order_beer">{beerMapOrd}</ul>
    </article>)

    
}