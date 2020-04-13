import React from "react";
import Matchup from "./Matchup";
import { matchupBoxHeight, firstRoundBoxesMargin } from "../util/dimensions";

function Semifinal(props) {
    function handleLastRoundsWinner(data) {
        props.onLastRoundsWinnerDataReceived(data);
    }

    return (
        <div className="semifinal-area">
            <h2 className="semifinal-title">Final Four</h2>
            <div className="semifinal-matchups-container">
                <div className="semifinal-individual-matchup-container">
                    <Matchup
                        roundNum={5}
                        marginValue={firstRoundBoxesMargin}
                        matchupHeight={matchupBoxHeight}
                        matchupNum={61}
                        onWinnerSelected={handleLastRoundsWinner}
                        winnerDataToSend={props.winnerDataToRender}
                    />
                </div>
                <div className="semifinal-individual-matchup-container">
                    <Matchup
                        roundNum={5}
                        marginValue={firstRoundBoxesMargin}
                        matchupHeight={matchupBoxHeight}
                        matchupNum={62}
                        onWinnerSelected={handleLastRoundsWinner}
                        winnerDataToSend={props.winnerDataToRender}
                    />
                </div>
            </div>
        </div>
    );
}

export default Semifinal;