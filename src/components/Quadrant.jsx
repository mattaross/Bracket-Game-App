import React from "react";
import Round from "./Round";

function Quadrant(props) {
    return (
        <div className="quadrant">
            <Round
                roundSide={props.quadSide}
                roundNum={props.quadSide === "left" ? 1 : 4}
                quadNum={props.quadNum}
            />
            <Round
                roundSide={props.quadSide}
                roundNum={props.quadSide === "left" ? 2 : 3}
                quadNum={props.quadNum}
            />
            <Round
                roundSide={props.quadSide}
                roundNum={props.quadSide === "left" ? 3 : 2}
                quadNum={props.quadNum}
            />
            <Round
                roundSide={props.quadSide}
                roundNum={props.quadSide === "left" ? 4 : 1}
                quadNum={props.quadNum}
            />
        </div>
    );
}

export default Quadrant;