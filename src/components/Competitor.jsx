import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

function Competitor(props) {
    const [titleEntered, setTitleEntered] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [bandEntered, setBandEntered] = useState(false);
    const [newBand, setNewBand] = useState("");
    const [competitorSelected, setCompetitorSelected] = useState(false);
    const [selectionTitle, setSelectionTitle] = useState("");
    const [selectionBand, setSelectionBand] = useState("");

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
                <table className="competitor-table table-finished" style={setShape()}>
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
                            <p className="band-name-text">{newBand}</p>
                        </td>
                        <td className="table-data-right">
                            <button className="edit-button" onClick={handleBandClick}><EditIcon style={{"fontSize": 15}} /></button>
                        </td>
                    </tr>
                </table>
            );
        }
    }

    function otherRounds() {
        if (competitorSelected) {
            return (
                <table className="table-not-first-round" style={setShape()}>
                    <tr>
                        <td>
                        <p className="song-title-text">{selectionTitle}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="band-name-text">{selectionBand}</p>
                        </td>
                    </tr>
                </table>
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