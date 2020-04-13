import React from "react";

function ChampionArea(props) {
    if (props.championData.championReceived) {
        return (
            <div className="champion-area">
                <h3 className="champion-title">WINNER:</h3>
                <h4>{props.championData.winnerTitle}</h4>
                <p>by</p>
                <h5>{props.championData.winnerBand}</h5>
            </div>
        );
    } else {
        return <div></div>
    }
}

export default ChampionArea;