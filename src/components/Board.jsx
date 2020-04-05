import React from "react";
import Quadrant from "./Quadrant";

function Board() {
    return (
        <div className="board">
            <Quadrant
                quadSide="left"
                quadNum={1}
            />
            <Quadrant
                quadSide="right"
                quadNum={2}
            />
            <Quadrant
                quadSide="left"
                quadNum={3}
            />
            <Quadrant
                quadSide="right"
                quadNum={4}
            />
        </div>
    );
}

export default Board;