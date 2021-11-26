//Order



export default function Order(props){

    if(!props.order) {
        return null;
    }

    const mapped = props.order.map((ord) => <li>{ord}</li>);

    return (<article className="order" key={props.no}>
        <p className="order_id" >{props.no}</p>
        <ul className="order_beer">{mapped}</ul>
    </article>)

    
}