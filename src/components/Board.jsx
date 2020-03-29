import React from "react";
import Quadrant from "./Quadrant";

function Board() {
    return (
        <div className="board">
            <Quadrant
                quadSide="left"
            />
            <Quadrant
                quadSide="right"
            />
            <Quadrant
                quadSide="left"
            />
            <Quadrant
                quadSide="right"
            />
        </div>
    );
}

export default Board;