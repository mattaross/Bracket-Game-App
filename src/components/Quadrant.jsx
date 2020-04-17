import React, { useState } from "react";
import Round from "./Round";

function Quadrant(props) {
    const [receivedWinnerData, setReceivedWinnerData] = useState({
        winnerTitle: "",
        winnerBand: ""
    });

    function sendWinnerDataToNextRound(data) {
        if (data.deletedData) {
            if (data.roundType === "lower-round" || data.roundType === "round-4") {
                setReceivedWinnerData(data);
            } else {
                props.onLastRoundsDataReceived(data);
                setReceivedWinnerData(data);
            }
        } else {
            if (data.roundType === "lower-round") {
                setReceivedWinnerData(data);
            } else if (data.roundType === "late-round") {
                props.onLastRoundsDataReceived(data);
            } else {
                props.onLastRoundsDataReceived(data);
                setReceivedWinnerData(data);
            }
        }
    }

    return (
        <div className="quadrant">
            <Round
                roundSide={props.quadSide}
                roundNum={props.quadSide === "left" ? 1 : 4}
                quadNum={props.quadNum}
                onWinnerDataReceived={sendWinnerDataToNextRound}
                winnerDataToSend={receivedWinnerData}
                lastRoundsDeletionData={props.lastRoundsData}
            />
            <Round
                roundSide={props.quadSide}
                roundNum={props.quadSide === "left" ? 2 : 3}
                quadNum={props.quadNum}
                onWinnerDataReceived={sendWinnerDataToNextRound}
                winnerDataToSend={receivedWinnerData}
                lastRoundsDeletionData={props.lastRoundsData}
            />
            <Round
                roundSide={props.quadSide}
                roundNum={props.quadSide === "left" ? 3 : 2}
                quadNum={props.quadNum}
                onWinnerDataReceived={sendWinnerDataToNextRound}
                winnerDataToSend={receivedWinnerData}
                lastRoundsDeletionData={props.lastRoundsData}
            />
            <Round
                roundSide={props.quadSide}
                roundNum={props.quadSide === "left" ? 4 : 1}
                quadNum={props.quadNum}
                onWinnerDataReceived={sendWinnerDataToNextRound}
                winnerDataToSend={receivedWinnerData}
                lastRoundsDeletionData={props.lastRoundsData}
            />
        </div>
    );
}

export default Quadrant;