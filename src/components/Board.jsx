import React from "react";
import Quadrant from "./Quadrant";

function Board(props) {
    function lastRoundsDataHandler(data) {
        props.onLastRoundsDataArrived(data);
    }

    return (
        <div className="board">
            <Quadrant
                quadSide="left"
                quadNum={1}
                onLastRoundsDataReceived={lastRoundsDataHandler}
                lastRoundsData={props.lastRoundsData}
            />
            <Quadrant
                quadSide="right"
                quadNum={2}
                onLastRoundsDataReceived={lastRoundsDataHandler}
                lastRoundsData={props.lastRoundsData}
            />
            <Quadrant
                quadSide="left"
                quadNum={3}
                onLastRoundsDataReceived={lastRoundsDataHandler}
                lastRoundsData={props.lastRoundsData}
            />
            <Quadrant
                quadSide="right"
                quadNum={4}
                onLastRoundsDataReceived={lastRoundsDataHandler}
                lastRoundsData={props.lastRoundsData}
            />
        </div>
    );
}

export default Board;