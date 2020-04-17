import React, { useState } from "react";
import Semifinal from "./Semifinal";
import Final from "./Final";
import ChampionArea from "./ChampionArea";

function LastRoundsArea(props) {
    const [finalWinnerData, setFinalWinnerData] = useState({
        winnerTitle: "",
        winnerBand: "",
        winnerTargetSpot: 0
    });

    function handleSemifinalWinnerData(data) {
        props.onSemifinalDataReceived(data);
    }

    function handleFinalWinnerData(data) {
        if (data.deletedData) {
            props.onSemifinalDataReceived(data);
        } else {
            data.championReceived = true;

            setFinalWinnerData(data);
        };
    }

    function handleChampionDelete(data) {
        setFinalWinnerData(data);
    }

    return (
        <div className="last-rounds-area">
            <Semifinal
                winnerDataToRender={props.lastRoundsData}
                onLastRoundsWinnerDataReceived={handleSemifinalWinnerData}
            />
            <Final
                finalData={props.lastRoundsData}
                onLastRoundsWinnerDataReceived={handleFinalWinnerData}
            />
            <ChampionArea championData={finalWinnerData} onChampionDelete={handleChampionDelete} />
        </div>
    );
}

export default LastRoundsArea;