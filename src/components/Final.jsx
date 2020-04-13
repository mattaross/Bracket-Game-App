import React from "react";
import Matchup from "./Matchup";
import { matchupBoxHeight, firstRoundBoxesMargin } from "../util/dimensions";

function Final(props) {
    function handleFinalWinnerData(data) {
        props.onLastRoundsWinnerDataReceived(data);
    }

    return (
        <div className="final-area">
            <h2 className="final-title">Championship Matchup</h2>
            <Matchup
                roundNum={6}
                marginValue={firstRoundBoxesMargin}
                matchupHeight={matchupBoxHeight}
                matchupNum={63}
                onWinnerSelected={handleFinalWinnerData}
                winnerDataToSend={props.finalData}
            />
        </div>
    )
}

export default Final;