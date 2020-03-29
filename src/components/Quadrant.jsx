import React from "react";
import Round from "./Round";

function Quadrant(props) {
    return (
        <div className="quadrant">
            <Round
                quadNum={props.quadNum}
                roundNum={props.quadSide === "left" ? 1 : 4}
            />
            <Round
                quadNum={props.quadNum}
                roundNum={props.quadSide === "left" ? 2 : 3}
            />
            <Round
                quadNum={props.quadNum}
                roundNum={props.quadSide === "left" ? 3 : 2}
            />
            <Round
                quadNum={props.quadNum}
                roundNum={props.quadSide === "left" ? 4 : 1}
            />
        </div>
    );
}

export default Quadrant;