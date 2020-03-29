import React from "react";
import Competitor from "./Competitor";

function Matchup(props) {

    function setStyle() {
        return {"height": props.matchupHeight, "marginBottom": props.marginValue}
    }

    return (
        <div className="matchup" style={setStyle()}>
            <Competitor top="true" roundNum={props.roundNum} />
            <Competitor top="false" roundNum={props.roundNum} />
        </div>
    );
}

export default Matchup;