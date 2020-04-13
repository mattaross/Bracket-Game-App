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
            />
            <Quadrant
                quadSide="right"
                quadNum={2}
                onLastRoundsDataReceived={lastRoundsDataHandler}
            />
            <Quadrant
                quadSide="left"
                quadNum={3}
                onLastRoundsDataReceived={lastRoundsDataHandler}
            />
            <Quadrant
                quadSide="right"
                quadNum={4}
                onLastRoundsDataReceived={lastRoundsDataHandler}
            />
        </div>
    );
}

export default Board;