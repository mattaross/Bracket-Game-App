import React from "react";
import Competitor from "./Competitor";

function Matchup(props) {

    function setStyle() {
        return {"height": props.matchupHeight, "marginBottom": props.marginValue}
    }

    const competitorNum = props.matchupNum * 2;

    return (
        <div className="matchup" style={setStyle()}>
            <Competitor top="true" roundNum={props.roundNum} height={props.matchupHeight} competitorNum={competitorNum - 1} />
            <Competitor top="false" roundNum={props.roundNum} height={props.matchupHeight} competitorNum={competitorNum} />
        </div>
    );
}

export default Matchup;