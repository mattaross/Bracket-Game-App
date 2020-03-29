import React from "react";
import Matchup from "./Matchup";

function Round(props) {
    let numMatchups =[];

    // Create appropriately sized arrays from which to map the number of matchups per round:
    for (var i = 0; i<(8/Math.pow(2, props.roundNum - 1)); i++) {
        numMatchups.push(0);
    }

    // Enter global values here, other dimensions will adjust:
    const matchupHeight = 120;
    const firstRoundMargin = 20;
    const margins = [firstRoundMargin];

    //Calculations of dimensions based on global values above:
    const secondRoundPadding = (0.5 * matchupHeight) + (0.5 * firstRoundMargin);
    const secondRoundMargin = (1.5 * matchupHeight) + (2.5 * firstRoundMargin) - secondRoundPadding;
    margins.push(secondRoundMargin);
    const thirdRoundPadding = (0.5 * matchupHeight) + (0.5 * secondRoundMargin) + secondRoundPadding;
    const thirdRoundMargin = (1.5 * matchupHeight) + (2 * secondRoundMargin) + (1.5 * secondRoundPadding) - thirdRoundPadding;
    margins.push(thirdRoundMargin);
    const fourthRoundPadding = (0.5 * matchupHeight) + (0.5 * thirdRoundMargin) + thirdRoundPadding;
    const fourthRoundMargin = 0;
    margins.push(fourthRoundMargin);

    const marginForThisRound = margins[props.roundNum - 1];

    function calculatePadding(round) {
        let paddingValue = 0;

        switch (round) {
            case 1:
                paddingValue = 0;
                break;
            case 2:
                paddingValue = secondRoundPadding;
                break;
            case 3:
                paddingValue = thirdRoundPadding;
                break;
            case 4:
                paddingValue = fourthRoundPadding;
                break;
            default:
                paddingValue = 0;
        }

        return {"paddingTop": paddingValue}
    }

    return (
        <div className="round" style={calculatePadding(props.roundNum)}>
            {numMatchups.map((matchup, i) => {
               return <Matchup roundNum={props.roundNum} marginValue={marginForThisRound} matchupHeight={matchupHeight} /> 
            })}
        </div>
    );
}

export default Round;