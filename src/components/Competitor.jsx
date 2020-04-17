import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function Competitor(props) {
    const [titleEntered, setTitleEntered] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [bandEntered, setBandEntered] = useState(false);
    const [newBand, setNewBand] = useState("");
    const [winnerDataAdded, setWinnerDataAdded] = useState(false);

    function setStyle() {
        if (props.top === "true") {
            return {"borderBottomColor": "black", "borderBottomStyle": "solid", "borderBottomWidth": 1}
        }
    }

    function setShape() {
        if (props.top === "true") {
            return {"borderRadius": "10px 10px 0 0"};
        } else {
            return {"borderRadius": "0 0 10px 10px"};
        }
    }

    function handleTitleChange(event) {
        const newSongTitle = event.target.value;
        setNewTitle(newSongTitle);
    }

    function handleTitleClick() {
        if (!titleEntered) {
            setTitleEntered(true);
        } else {
            setTitleEntered(false);
        }
    }

    function handleBandChange(event) {
        const newBandTitle = event.target.value;
        setNewBand(newBandTitle);
    }

    function handleBandClick() {
        if (!bandEntered) {
            setBandEntered(true);
        } else {
            setBandEntered(false);
        }
    }

    function handleDelete() {
        const selectedWinnerData = {
            winnerTargetSpot: props.targetSpotNum,
            winnerTitle: newTitle,
            winnerBand: newBand,
            winnerQuad: props.quadNum,
            winnerRound: props.roundNum,
            winnerMatchup: props.matchupNum,
            winnerCompetitor: props.competitorNum,
            deletedData: true,
            latestRoundWithData: (props.roundNum - 1)
        };

        if (props.roundNum < 4) {
            selectedWinnerData.roundType = "lower-round";
        } else if (props.roundNum === 4) {
            selectedWinnerData.roundType = "round-4";
        } else {
            selectedWinnerData.roundType = "late-round"
        }

        props.onSelectedWinner(selectedWinnerData);

        setWinnerDataAdded(false);
    }

    function handleWinnerSelection() {
        const selectedWinnerData = {
            winnerTargetSpot: props.targetSpotNum,
            winnerTitle: newTitle,
            winnerBand: newBand,
            winnerQuad: props.quadNum,
            winnerRound: props.roundNum,
            winnerMatchup: props.matchupNum,
            winnerCompetitor: props.competitorNum,
            latestRoundWithData: (props.roundNum + 1)
        };

        if (props.roundNum < 4) {
            selectedWinnerData.roundType = "lower-round";
        } else if (props.roundNum === 4) {
            selectedWinnerData.roundType = "round-4";
        } else {
            selectedWinnerData.roundType = "late-round"
        }
        
        props.onSelectedWinner(selectedWinnerData);
    }

    function handleDeleteButtonRendering() {
        if (props.winnerDataToRender.latestRoundWithData === props.roundNum || props.lastRoundsDeletionData.latestRoundWithData === props.roundNum) {
            return (
                <button className="delete-button" onClick={handleDelete}>
                    <DeleteIcon style={{"fontSize": 18}} />
                </button>
            );
        }
    }

    function firstRoundForms() {
        if (!titleEntered && !bandEntered) {
            return (
                <table className="competitor-table" style={setShape()}>
                    <tr className="table-row-unfinished">
                        <td className="table-data-left">
                            <input onChange={handleTitleChange} value={newTitle} type="text" placeholder=" Name/title..." />
                        </td>
                        <td className="table-data-right">
                            <button className="add-button" onClick={handleTitleClick}><AddIcon style={{"fontSize": 18}} /></button>
                        </td>
                    </tr>
                    <tr className="table-row-unfinished">
                        <td className="table-data-left">
                            <input onChange={handleBandChange} value={newBand} type="text" placeholder=" Band/description..." />
                        </td>
                        <td className="table-data-right">
                            <button className="add-button" onClick={handleBandClick}><AddIcon style={{"fontSize": 18}} /></button>
                        </td>
                    </tr>
                </table>
            );
        } else if (titleEntered && !bandEntered) {
            return (
                <table className="competitor-table" style={setShape()}>
                    <tr className="table-row-unfinished">
                        <td className="table-data-left">
                            <p className="song-title-text">{newTitle}</p>
                        </td>
                        <td className="table-data-right">
                            <button className="edit-button" onClick={handleTitleClick}><EditIcon style={{"fontSize": 15}} /></button>
                        </td>
                    </tr>
                    <tr className="table-row-unfinished">
                        <td className="table-data-left">
                            <input onChange={handleBandChange} value={newBand} type="text" placeholder=" Band/description..." />
                        </td>
                        <td className="table-data-right">
                            <button className="add-button" onClick={handleBandClick}><AddIcon style={{"fontSize": 18}} /></button>
                        </td>
                    </tr>
                </table>
            );
        } else if (!titleEntered && bandEntered) {
            return (
                <table className="competitor-table" style={setShape()}>
                    <tr className="table-row-unfinished">
                        <td className="table-data-left">
                            <input onChange={handleTitleChange} value={newTitle} type="text" placeholder=" Name/title..." />
                        </td>
                        <td className="table-data-right">
                            <button className="add-button" onClick={handleTitleClick}><AddIcon style={{"fontSize": 18}} /></button>
                        </td>
                    </tr>
                    <tr className="table-row-unfinished">
                        <td className="table-data-left">
                            <p className="band-name-text">{newBand}</p>
                        </td>
                        <td className="table-data-right">
                            <button className="edit-button" onClick={handleBandClick}><EditIcon style={{"fontSize": 15}} /></button>
                        </td>
                    </tr>
                </table>
            );
        } else if (titleEntered && bandEntered) {
            return (
                <table className="competitor-table table-finished" style={setShape()} onClick={handleWinnerSelection}>
                    <tr className="table-row-unfinished">
                        <td className="table-data-left">
                        <p className="song-title-text">{newTitle}</p>
                        </td>
                        <td className="table-data-right">
                            {(props.winnerDataToRender.latestRoundWithData === 1) &&
                                <button className="edit-button" onClick={handleTitleClick}>
                                    <EditIcon style={{"fontSize": 15}} />
                                </button>
                            }
                        </td>
                    </tr>
                    <tr className="table-row-unfinished">
                        <td className="table-data-left">
                            <p className="band-name-text">{newBand}</p>
                        </td>
                        <td className="table-data-right">
                            {(props.winnerDataToRender.latestRoundWithData === 1) &&
                                <button className="edit-button" onClick={handleBandClick}>
                                    <EditIcon style={{"fontSize": 15}} />
                                </button>
                            }
                        </td>
                    </tr>
                </table>
            );
        }
    }

    function otherRounds() {
        if (props.competitorNum === props.winnerDataToRender.winnerTargetSpot && !props.winnerDataToRender.deletedData) {
            if (!winnerDataAdded) {
                setNewTitle(props.winnerDataToRender.winnerTitle);
                setNewBand(props.winnerDataToRender.winnerBand);
                setWinnerDataAdded(true);
            }
        }

        if (winnerDataAdded) {
            return (
                <div className="not-first-round-container">
                    <table className="table-not-first-round" style={setShape()} onClick={handleWinnerSelection}>
                        <tr>
                            <td>
                                <p className="song-title-text">
                                    {newTitle}
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="band-name-text">
                                    {newBand}
                                </p>
                            </td>
                        </tr>
                    </table>
                    {handleDeleteButtonRendering()}
                </div>
            );
        }
    }

    return (
        <div className="competitor" style={setStyle()}>
            {(props.roundNum === 1) ? firstRoundForms() : otherRounds()}
        </div>
    );
}

export default Competitor;