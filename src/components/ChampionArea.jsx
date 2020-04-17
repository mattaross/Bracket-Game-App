import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function ChampionArea(props) {
    function handleChampionDelete() {
        const deletedChampionData = {
            winnerTargetSpot: props.targetSpotNum,
            winnerTitle: props.championData.winnerTitle,
            winnerBand: props.championData.winnerBand,
            winnerQuad: props.quadNum,
            winnerRound: props.roundNum,
            winnerMatchup: props.matchupNum,
            winnerCompetitor: props.competitorNum,
            deletedData: true,
            latestRoundWithData: (props.latestRoundWithData - 1),
            roundType: "champion",
            championReceived: false
        };

        props.onChampionDelete(deletedChampionData);
    }

    if (props.championData.championReceived) {
        return (
            <div className="champion-area">
                <h3 className="champion-title">WINNER:</h3>
                <h4>{props.championData.winnerTitle}</h4>
                <p>by</p>
                <h5>{props.championData.winnerBand}</h5>
                <button className="delete-button-champion" onClick={handleChampionDelete}>
                    <DeleteIcon style={{"fontSize": 24}} />
                </button>
            </div>
        );
    } else {
        return <div></div>
    }
}

export default ChampionArea;