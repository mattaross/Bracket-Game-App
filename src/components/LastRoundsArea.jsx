import React, { useState } from "react";
import Semifinal from "./Semifinal";
import Final from "./Final";
import ChampionArea from "./ChampionArea";

function LastRoundsArea(props) {
    const [semifinalWinnerData, setSemifinalWinnerData] = useState({
        winnerTitle: "",
        winnerBand: "",
        winnerTargetSpot: 0
    });

    const [finalWinnerData, setFinalWinnerData] = useState({
        winnerTitle: "",
        winnerBand: "",
        winnerTargetSpot: 0
    });

    function handleSemifinalWinnerData(data) {
        setSemifinalWinnerData(data);
    }

    function handleFinalWinnerData(data) {
        data.championReceived = true;

        setFinalWinnerData(data);
    }

    return (
        <div className="last-rounds-area">
            <Semifinal
                // semifinalData={props.lastRoundsData}
                winnerDataToRender={semifinalWinnerData.deletedData === true ? semifinalWinnerData : props.lastRoundsData}
                onLastRoundsWinnerDataReceived={handleSemifinalWinnerData}
            />
            <Final
                finalData={semifinalWinnerData}
                onLastRoundsWinnerDataReceived={handleFinalWinnerData}
            />
            <ChampionArea championData={finalWinnerData} />
        </div>
    );
}

export default LastRoundsArea;