import React from "react";
import Matchup from "./Matchup";

function Round(props) {
    let numMatchups =[];

    // Calculate appropriate numbering for this round's matchups
    let startingNum = 1;
    switch (props.quadNum) {
        case 1:
            if (props.roundNum === 1) {
                startingNum = 1;
            } else if (props.roundNum === 2) {
                startingNum = 33;
            } else if (props.roundNum === 3) {
                startingNum = 49;
            } else if (props.roundNum === 4) {
                startingNum = 57;
            }
            break;
        case 2:
            if (props.roundNum === 1) {
                startingNum = 9;
            } else if (props.roundNum === 2) {
                startingNum = 37;
            } else if (props.roundNum === 3) {
                startingNum = 51;
            } else if (props.roundNum === 4) {
                startingNum = 58;
            }
            break;
        case 3:
            if (props.roundNum === 1) {
                startingNum = 17;
            } else if (props.roundNum === 2) {
                startingNum = 41;
            } else if (props.roundNum === 3) {
                startingNum = 53;
            } else if (props.roundNum === 4) {
                startingNum = 59;
            }
            break;
        case 4:
            if (props.roundNum === 1) {
                startingNum = 25;
            } else if (props.roundNum === 2) {
                startingNum = 45;
            } else if (props.roundNum === 3) {
                startingNum = 55;
            } else if (props.roundNum === 4) {
                startingNum = 60;
            }
            break;
        default:
            startingNum = 1;
    }

    // Create appropriately sized arrays from which to map the number of matchups per round:
    for (var i = startingNum; i<startingNum + (8/Math.pow(2, props.roundNum - 1)); i++) {
        numMatchups.push(i);
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

    function passWinnerDataToQuadrant(data) {
        props.onWinnerDataReceived(data);
    }

    return (
        <div className="round" style={calculatePadding(props.roundNum)}>
            {numMatchups.map((matchup, i) => {
               return (
                    <Matchup
                        quadNum={props.quadNum}
                        roundNum={props.roundNum}
                        marginValue={marginForThisRound}
                        matchupHeight={matchupHeight}
                        matchupNum={matchup}
                        onWinnerSelected={passWinnerDataToQuadrant}
                        winnerDataToSend={props.winnerDataToSend}
                    />
               );
            })}
        </div>
    );
}

export default Round;