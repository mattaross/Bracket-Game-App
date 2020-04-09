import React, { useState } from "react";
import Round from "./Round";

function Quadrant(props) {
    const [receivedWinnerData, setReceivedWinnerData] = useState({
        winnerTitle: "",
        winnerBand: ""
    });

    function sendWinnerDataToNextRound(data) {
        data.winnerRound += 1;

        setReceivedWinnerData(data);
    }

    return (
        <div className="quadrant">
            <Round
                roundSide={props.quadSide}
                roundNum={props.quadSide === "left" ? 1 : 4}
                quadNum={props.quadNum}
                onWinnerDataReceived={sendWinnerDataToNextRound}
                winnerDataToSend={receivedWinnerData}
            />
            <Round
                roundSide={props.quadSide}
                roundNum={props.quadSide === "left" ? 2 : 3}
                quadNum={props.quadNum}
                onWinnerDataReceived={sendWinnerDataToNextRound}
                winnerDataToSend={receivedWinnerData}
            />
            <Round
                roundSide={props.quadSide}
                roundNum={props.quadSide === "left" ? 3 : 2}
                quadNum={props.quadNum}
                onWinnerDataReceived={sendWinnerDataToNextRound}
                winnerDataToSend={receivedWinnerData}
            />
            <Round
                roundSide={props.quadSide}
                roundNum={props.quadSide === "left" ? 4 : 1}
                quadNum={props.quadNum}
                onWinnerDataReceived={sendWinnerDataToNextRound}
                winnerDataToSend={receivedWinnerData}
            />
        </div>
    );
}

export default Quadrant;