import React from "react";
import Competitor from "./Competitor";

function Matchup(props) {
    function setStyle() {
        return {"height": props.matchupHeight, "marginBottom": props.marginValue}
    }

    const competitorNum = props.matchupNum * 2;

    const targetSpotNum = Math.floor(((competitorNum - 1) * 0.5) + 64.5);

    function passWinnerDataToRound(data) {
        props.onWinnerSelected(data);
    }

    return (
        <div className="matchup" style={setStyle()}>
            <Competitor
                top="true"
                quadNum={props.quadNum}
                roundNum={props.roundNum}
                matchupNum={props.matchupNum}
                height={props.matchupHeight}
                competitorNum={competitorNum - 1}
                targetSpotNum={targetSpotNum}
                onSelectedWinner={passWinnerDataToRound}
                winnerDataToRender={props.winnerDataToSend}
                lastRoundsDeletionData={props.lastRoundsDeletionData}
            />
            <Competitor
                top="false"
                quadNum={props.quadNum}
                roundNum={props.roundNum}
                matchupNum={props.matchupNum}
                height={props.matchupHeight}
                competitorNum={competitorNum}
                targetSpotNum={targetSpotNum}
                onSelectedWinner={passWinnerDataToRound}
                winnerDataToRender={props.winnerDataToSend}
                lastRoundsDeletionData={props.lastRoundsDeletionData}
            />
        </div>
    );
}

export default Matchup;