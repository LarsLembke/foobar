//Circletimer
import Numbertimer from "./Numbertimer";
export default function Circletimer(props){

  const circleProgress = {
    strokeDashoffset: props.checkTime * 0.000694445
  }



    return <figure id="circle_timer">
        <h2 className="closing_in">CLOSING IN</h2>
        <div className="circle_timer_div">
        <Numbertimer timeToClose={props.timeToClose} checkTime={props.checkTime}/>
        <svg className="circle_timer_svg" viewBox="0 0 200 200" preserveAspectRatio="XMidYMin" >
      <path
        id="bg"
        d="
        M 100, 100
        m -75, 0
        a 75,75 0 1,0 150,0
        a 75,75 0 1,0 -150,0
        "
        pathLength="1"
        style={circleProgress}
      />
      <path
        id="draw3"
        d="
        M 100, 100
        m -75, 0
        a 75,75 0 1,0 150,0
        a 75,75 0 1,0 -150,0
        "
        pathLength="1"
        style={circleProgress}
      />
      <path
        id="draw"
        d="
        M 100, 100
        m -75, 0
        a 75,75 0 1,0 150,0
        a 75,75 0 1,0 -150,0
        "
        pathLength="1"
        style={circleProgress}
      />



<path
        id="draw2"
        d="
        M 100, 100
        m -75, 0
        a 75,75 0 1,0 150,0
        a 75,75 0 1,0 -150,0
        "
        pathLength="1"
        style={circleProgress}
      />


    </svg>
    </div>
    </figure>
}

